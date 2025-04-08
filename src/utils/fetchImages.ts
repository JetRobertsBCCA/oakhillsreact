import fs from 'fs';
import path from 'path';

export function fetchImages() {
    const imagesDir = path.join(process.cwd(), 'images');
    const files = fs.readdirSync(imagesDir);
    return files.map(file => ({
        url: `/images/${file}`,
        alt: file,
    }));
}
