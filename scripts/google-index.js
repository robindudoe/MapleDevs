const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');
// --- CONFIG ---
const KEY_PATH = 'c:/Users/wupei/Downloads/mapledevs-493406-92f28ff2a109.json';
const SITEMAP_PATH = path.join(__dirname, '..', 'sitemap.xml');
let key;
let rawKey = process.env.GOOGLE_INDEXING_KEY;
if (rawKey) {
    console.log('🔑 GOOGLE_INDEXING_KEY detected. Processing...');
    try {
        key = JSON.parse(rawKey.trim());
    } catch (e1) {
        try {
            // Failsafe: Try to decode as Base64 incase copy-pasting was messy
            const decoded = Buffer.from(rawKey.trim(), 'base64').toString('utf8');
            key = JSON.parse(decoded);
            console.log('✅ Successfully decoded Base64 credentials.');
        } catch (e2) {
            console.error('❌ Failed to parse GOOGLE_INDEXING_KEY.');
            process.exit(1);
        }
    }
} else if (fs.existsSync(KEY_PATH)) {
    key = require(KEY_PATH);
    console.log('🔑 Using credentials from local file.');
} else {
    console.error(`❌ No credentials found (check env var GOOGLE_INDEXING_KEY)`);
    process.exit(1);
}
const jwtClient = new google.auth.JWT(
    key.client_email,
    null,
    key.private_key,
    ['https://www.googleapis.com/auth/indexing'],
    null
);
async function indexUrls() {
    console.log('🔗 Starting Google Indexing Ping...');
    try {
        await jwtClient.authorize();
        const indexing = google.indexing('v3');
        const sitemap = fs.readFileSync(SITEMAP_PATH, 'utf8');
        const urlRegex = /<loc>(https:\/\/mapledevs\.ca\/.*?)<\/loc>/g;
        let match, urls = [];
        while ((match = urlRegex.exec(sitemap)) !== null) urls.push(match[1]);
        console.log(`🔍 Found ${urls.length} URLs in sitemap.`);
        for (const url of urls) {
            try {
                await new Promise(resolve => setTimeout(resolve, 200)); 
                await indexing.urlNotifications.publish({
                    auth: jwtClient,
                    requestBody: { url: url, type: 'URL_UPDATED' }
                });
                console.log(`✅ Indexed: ${url}`);
            } catch (err) {
                console.error(`❌ Failed to index ${url}:`, err.message);
            }
        }
    } catch (err) {
        console.error('❌ Authentication failed:', err);
    }
}
indexUrls();
