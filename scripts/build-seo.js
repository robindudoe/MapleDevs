const fs = require('fs');
const path = require('path');

const ROOT_DIR = path.join(__dirname, '..');
const INDEX_PATH = path.join(ROOT_DIR, 'index.html');

if (!fs.existsSync(INDEX_PATH)) {
    console.error('index.html not found!');
    process.exit(1);
}

const baseHTML_raw = fs.readFileSync(INDEX_PATH, 'utf8');

// NUCLEAR CLEANUP: Remove any rogue JSON text from the top of the file
let baseHTML = baseHTML_raw.trim();
if (baseHTML.startsWith('{')) {
    const docTypeIdx = baseHTML.toLowerCase().indexOf('<!doctype');
    if (docTypeIdx !== -1) baseHTML = baseHTML.substring(docTypeIdx);
}

const SEO_TARGETS = [
    { folder: 'vancouver', hash: '#city=Vancouver', title: 'Vancouver Game Studio Jobs | Verified & Canadian - MapleDevs', desc: 'Find verified game dev jobs at studios located in Vancouver, BC. No US roles. Salaries, entry-level, and remote roles included.' },
    { folder: 'toronto', hash: '#city=Toronto', title: 'Toronto Game Dev Jobs | Verified & Canadian - MapleDevs', desc: 'Find verified game dev jobs at studios located in Toronto, ON. No US roles. Salaries, entry-level, and remote roles included.' },
    { folder: 'montreal', hash: '#city=Montreal', title: 'Montreal Game Studio Jobs | Verified & Canadian - MapleDevs', desc: 'Find verified game dev jobs at studios located in Montreal, QC. Browse the best opportunities in the Canadian game industry.' },
    { folder: 'junior', hash: '#exp=junior', title: 'Junior & Entry-Level Game Dev Jobs Canada - MapleDevs', desc: 'Break into the Canadian games industry. Browse verified entry-level, junior, co-op, and internship roles for game developers.' },
    { folder: 'programming', hash: '#role=programming', title: 'Game Programming & Engineering Jobs Canada - MapleDevs', desc: 'Find C++, Unity, Unreal, and general programming jobs at Canadian game studios. 100% verified Canadian listings.' },
    { folder: 'art', hash: '#role=art', title: 'Game Art & Animation Jobs Canada - MapleDevs', desc: 'Discover 2D, 3D, UI, and VFX artist jobs at verified game studios operating across Canada.' }
];

// Helper to safely replace tag content without "eating" lines
function safeReplaceMeta(html, propertyOrName, newValue, isProperty = true) {
    const attr = isProperty ? 'property' : 'name';
    const regex = new RegExp(`<meta [^>]*${attr}="${propertyOrName}"[^>]*content="[^"]*"[^>]*>`, 'i');
    return html.replace(regex, `<meta ${attr}="${propertyOrName}" content="${newValue}">`);
}

function injectSEO(html, target) {
    let output = html;

    // 1. Remove ANY rogue text nodes before <!DOCTYPE (Double Layer Protection)
    output = output.replace(/^[^{]*\{[^{}]*"@context":[^{}]*\}/s, '').trim();

    // 2. Safe Title & Meta Replacements
    output = output.replace(/<title>.*?<\/title>/i, `<title>${target.title}</title>`);
    output = safeReplaceMeta(output, 'description', target.desc, false);
    output = safeReplaceMeta(output, 'og:title', target.title, true);
    output = safeReplaceMeta(output, 'og:description', target.desc, true);
    output = safeReplaceMeta(output, 'og:url', `https://mapledevs.ca/${target.folder}/`, true);

    // 3. Update Canonical
    output = output.replace(/<link rel="canonical" href="[^"]*"/i, `<link rel="canonical" href="https://mapledevs.ca/${target.folder}/"`);

    // 4. Add redirect script
    const redirectScript = `\n    <script>if(!window.location.hash) window.location.hash = '${target.hash}';</script>\n`;
    output = output.replace('<head>', '<head>' + redirectScript);
    
    return output;
}

console.log('Generating SEO Landing Pages...');

let sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
<!-- Heartbeat: ${new Date().toISOString()} -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://mapledevs.ca/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>`;

for (const target of SEO_TARGETS) {
    const targetDir = path.join(ROOT_DIR, target.folder);
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir);

    const modifiedHTML = injectSEO(baseHTML, target);
    fs.writeFileSync(path.join(targetDir, 'index.html'), modifiedHTML);
    
    sitemapXML += `\n  <url><loc>https://mapledevs.ca/${target.folder}/</loc><changefreq>weekly</changefreq><priority>0.8</priority></url>`;
    console.log(`✅ Generated /${target.folder}/index.html`);
}

sitemapXML += `\n</urlset>`;
fs.writeFileSync(path.join(ROOT_DIR, 'sitemap.xml'), sitemapXML);
console.log('✅ Generated sitemap.xml');
console.log('Done!');
