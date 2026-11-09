// Production Bundler for KURZAN Portfolio
// Compiles all JSX and modules into a high-performance standalone bundle
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load Babel Standalone
const babelCode = fs.readFileSync(path.join(__dirname, "public", "babel.min.js"), "utf-8");

const globalScope = {
  window: {},
  navigator: { userAgent: "Node" },
  location: { href: "" }
};

const runBabel = new Function("window", "navigator", "location", babelCode + "; return Babel;");
const Babel = runBabel(globalScope.window, globalScope.navigator, globalScope.location);

console.log("Compiling KURZAN Freestyle Portfolio...");

// 1. Compile Data File
const dataRaw = fs.readFileSync(path.join(__dirname, "src/data/portfolioData.js"), "utf-8");
const dataCode = dataRaw.replace(/export\s+const\s+/g, "const ");

// 2. Component compilation helper
function compileComponent(relPath) {
  const raw = fs.readFileSync(path.join(__dirname, relPath), "utf-8");
  // Remove import statements
  const clean = raw
    .replace(/import\s+React.*?from\s+['"].*?['"];?/g, "")
    .replace(/import\s+.*?\s+from\s+['"].*?['"];?/g, "")
    .replace(/export\s+default\s+function\s+(\w+)/, "function $1")
    .replace(/export\s+const\s+/g, "const ");

  const transformed = Babel.transform(clean, {
    presets: ["react"]
  }).code;

  return `// === Module: ${relPath} ===\n${transformed}\n`;
}

let bundleParts = [];

// Header with React and ReactDOM references
bundleParts.push(`
// KURZAN // Official Football Freestyle Portfolio Bundle
// Generated automatically - Production Ready
const { useState, useEffect, useRef } = React;
`);

// Add Data
bundleParts.push(`// === Module: src/data/portfolioData.js ===\n${dataCode}\n`);

// Add Components in dependency order
const componentList = [
  "src/components/AudioAmbience.jsx",
  "src/components/CustomCursor.jsx",
  "src/components/VideoModal.jsx",
  "src/components/MediaKitModal.jsx",
  "src/components/QrCodeModal.jsx",
  "src/components/Navbar.jsx",
  "src/components/Hero.jsx",
  "src/components/About.jsx",
  "src/components/TrickMatrix.jsx",
  "src/components/Videos.jsx",
  "src/components/Works.jsx",
  "src/components/Achievements.jsx",
  "src/components/Contact.jsx",
  "src/components/Footer.jsx",
  "src/App.jsx"
];

componentList.forEach((compPath) => {
  const code = compileComponent(compPath);
  bundleParts.push(code);
  console.log(`✓ Processed: ${compPath}`);
});

// App Mount Code
bundleParts.push(`
// === App Initialization & DOM Mount ===
document.addEventListener("DOMContentLoaded", () => {
  const rootElement = document.getElementById("root");
  if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(React.createElement(App));
  }

  // Dismiss Loading Screen
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.style.opacity = "0";
      loader.style.transition = "opacity 0.4s ease";
      setTimeout(() => loader.remove(), 400);
    }
  }, 250);
});
`);

const finalBundle = bundleParts.join("\n");
const outputPath = path.join(__dirname, "public", "bundle.js");
fs.writeFileSync(outputPath, finalBundle, "utf-8");

console.log(`\n🎉 Success! Bundle generated at public/bundle.js (${(finalBundle.length / 1024).toFixed(1)} KB)`);
