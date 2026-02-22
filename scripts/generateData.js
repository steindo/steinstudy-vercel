import fs from 'fs';
import path from 'path';

/**
 * Script to generate template JSON files for all 300 pages.
 */
const DATA_DIR = './src/data/pages';
const TOTAL_PAGES = 300;

if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

console.log(`Generating ${TOTAL_PAGES} template JSON files...`);

for (let i = 1; i <= TOTAL_PAGES; i++) {
    const filePath = path.join(DATA_DIR, `page_${i}.json`);

    if (!fs.existsSync(filePath)) {
        const template = {
            pageNumber: i,
            imagePath: `/scans/page_${i}.webp`,
            elements: [
                {
                    id: `p${i}_q1`,
                    type: "text",
                    top: "10%",
                    left: "10%",
                    width: "20%",
                    answer: "placeholder"
                }
            ]
        };

        fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
    }
}

console.log("Done! Place your images in /public/scans/ and update the JSON coordinates.");
