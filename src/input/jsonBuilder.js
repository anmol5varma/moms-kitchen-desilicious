import fs from 'fs';
import path from 'path';
import csv from 'csv-parser';
import { fileURLToPath } from 'url';

export const buildJSON = () => {
    const __filename = fileURLToPath(import.meta.url);

    const __dirname = path.dirname(__filename);
    const csvFilePath = path.join(__dirname, 'products.csv');
    const jsonFilePath = path.join(__dirname, 'products.json');
    const jsonCategoryFilePath = path.join(__dirname, 'categories.json');

    const results = [];

    return new Promise((res, rej) => {
        const categories = new Set(["all"])
        fs.createReadStream(csvFilePath, { encoding: 'utf8' })
            .pipe(csv())
            .on('data', (data) => {
                // Convert MRP to number
                data.mrp = data.mrp ? +data.mrp : 0
                results.push(data)
                categories.add(data?.category?.toLowerCase())
            })
            .on('end', () => {
                fs.writeFile(jsonFilePath, JSON.stringify(results, null, 2), (err) => {
                    if (err) {
                        console.error('Error writing JSON file', err);
                        rej(err)
                    } else {
                        console.log('CSV file successfully converted to JSON');
                        res('success')
                    }
                });

                console.log(categories);
                

                fs.writeFile(jsonCategoryFilePath, JSON.stringify([...categories], null, 2), (err) => {
                    if (err) {
                        console.error('Error writing categories file', err);
                        rej(err)
                    } else {
                        console.log('Categories successfully saved to JSON');
                        res('success')
                    }
                });
            })
            .on('error', (err) => {
                console.error('Error processing CSV file', err);
                rej(err);
            });
    })
}

(async () => {
    try {
        await buildJSON();
    } catch (error) {
        console.error('Error:', error);
    }
})();