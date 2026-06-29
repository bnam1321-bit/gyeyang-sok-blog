const fs = require('fs');

const homeHtmlPath = 'public/home.html';
let content = fs.readFileSync(homeHtmlPath, 'utf8');

// Normalize line endings to LF for easier replacements
const originalLineEndings = content.includes('\r\n') ? '\r\n' : '\n';
content = content.replace(/\r\n/g, '\n');

// 1. Update Hero Variant A container class
const target1 = `      {/* HERO - Variant A */}
      <section id="hero" data-screen-label="hero" style={{
        minHeight: "90vh", position: "relative", overflow: "hidden", background: "#f0f4f8",
      }}>`;

const replacement1 = `      {/* HERO - Variant A */}
      <section id="hero" data-screen-label="hero" className="hero-a-container" style={{
        minHeight: "90vh", position: "relative", overflow: "hidden", background: "#f0f4f8",
      }}>`;

// 2. Update Doctor photo class
const target2 = `        {/* Doctor photo - full section, no filter */}
        <img
          src={window.__resources?.doctorsImg || "uploads/doctors.jpg"}
          alt="속편한내과 의료진"
          style={{
            width: "100%", height: "100%", minHeight: "90vh",
            objectFit: "cover", objectPosition: "center 30%",
            display: "block", position: "absolute", inset: 0,
          }}
        />`;

const replacement2 = `        {/* Doctor photo - full section, no filter */}
        <img
          src={window.__resources?.doctorsImg || "uploads/doctors.jpg"}
          alt="속편한내과 의료진"
          className="hero-a-img"
          style={{
            width: "100%", height: "100%", minHeight: "90vh",
            objectFit: "cover", objectPosition: "center 30%",
            display: "block", position: "absolute", inset: 0,
          }}
        />`;

// 3. Update Gradient class
const target3 = `        {/* Gradient only on top ~38% where faces are NOT */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "42%",
          background: "linear-gradient(to bottom, rgba(240,244,248,0.97) 0%, rgba(240,244,248,0.92) 70%, transparent 100%)",
        }} />`;

const replacement3 = `        {/* Gradient only on top ~38% where faces are NOT */}
        <div className="hero-a-gradient" style={{
          position: "absolute", top: 0, left: 0, right: 0, height: "42%",
          background: "linear-gradient(to bottom, rgba(240,244,248,0.97) 0%, rgba(240,244,248,0.92) 70%, transparent 100%)",
        }} />`;

// 4. Update Text class
const target4 = `        {/* Text — sits within the top empty white area */}
        <div style={{
          position: "absolute", top: 0, left: 0, right: 0,
          zIndex: 2, textAlign: "center",
          padding: "48px 5% 0",
        }}>`;

const replacement4 = `        {/* Text — sits within the top empty white area */}
        <div className="hero-a-text" style={{
          position: "absolute", top: 0, left: 0, right: 0,
          zIndex: 2, textAlign: "center",
          padding: "48px 5% 0",
        }}>`;

// 5. Update Bullets class
const target5 = `          <div style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 18, flexWrap: "wrap" }}>`;
const replacement5 = `          <div className="hero-a-bullets" style={{ display: "flex", gap: 20, justifyContent: "center", marginBottom: 18, flexWrap: "wrap" }}>`;

// 6. Update Buttons class
const target6 = `        {/* Buttons - bottom of hero, below the doctors */}
        <div style={{
          position: "absolute", bottom: 36, left: 0, right: 0,
          zIndex: 3, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
        }}>`;

const replacement6 = `        {/* Buttons - bottom of hero, below the doctors */}
        <div className="hero-a-buttons" style={{
          position: "absolute", bottom: 36, left: 0, right: 0,
          zIndex: 3, display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
        }}>`;

// 7. Update Media Queries
const target7 = `      <style>{\`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-grid, .hero-split, .hours-grid { grid-template-columns: 1fr !important; }
          .hero-split > div { min-height: auto !important; padding: 60px 7% !important; }
        }
      \`}</style>`;

const replacement7 = `      <style>{\`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
          .hero-grid, .hero-split, .hours-grid { grid-template-columns: 1fr !important; }
          .hero-split > div { min-height: auto !important; padding: 60px 7% !important; }
          
          /* Hero Variant A Mobile Fixes */
          .hero-a-container {
            display: flex !important;
            flex-direction: column !important;
            min-height: auto !important;
            height: auto !important;
            position: relative !important;
            background: #f0f4f8 !important;
          }
          .hero-a-img {
            position: relative !important;
            inset: auto !important;
            width: 100% !important;
            height: auto !important;
            min-height: auto !important;
            object-fit: cover !important;
            object-position: center 20% !important;
            aspect-ratio: 1.5 / 1 !important;
            display: block !important;
          }
          .hero-a-gradient {
            display: none !important;
          }
          .hero-a-text {
            position: static !important;
            padding: 40px 20px 20px !important;
            background: #f0f4f8 !important;
          }
          .hero-a-bullets {
            flex-direction: column !important;
            align-items: center !important;
            gap: 12px !important;
            margin-bottom: 24px !important;
          }
          .hero-a-buttons {
            position: static !important;
            display: flex !important;
            flex-direction: column !important;
            align-items: stretch !important;
            gap: 10px !important;
            padding: 0 20px 40px !important;
            background: #f0f4f8 !important;
          }
          .hero-a-buttons a, .hero-a-buttons button {
            width: 100% !important;
            justify-content: center !important;
            padding: 14px 20px !important;
            font-size: 15px !important;
          }
        }
      \`}</style>`;

let replaced = 0;

if (content.includes(target1)) { content = content.replace(target1, replacement1); replaced++; } else { console.log('Target 1 not found'); }
if (content.includes(target2)) { content = content.replace(target2, replacement2); replaced++; } else { console.log('Target 2 not found'); }
if (content.includes(target3)) { content = content.replace(target3, replacement3); replaced++; } else { console.log('Target 3 not found'); }
if (content.includes(target4)) { content = content.replace(target4, replacement4); replaced++; } else { console.log('Target 4 not found'); }
if (content.includes(target5)) { content = content.replace(target5, replacement5); replaced++; } else { console.log('Target 5 not found'); }
if (content.includes(target6)) { content = content.replace(target6, replacement6); replaced++; } else { console.log('Target 6 not found'); }
if (content.includes(target7)) { content = content.replace(target7, replacement7); replaced++; } else { console.log('Target 7 not found'); }

if (replaced > 0) {
  // Restore original line endings if they were CRLF
  if (originalLineEndings === '\r\n') {
    content = content.replace(/\n/g, '\r\n');
  }
  fs.writeFileSync(homeHtmlPath, content, 'utf8');
  console.log(`Successfully completed ${replaced} replacements!`);
} else {
  console.log('No replacements were made.');
}
