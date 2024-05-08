const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({ path: 'src/.env' });;

const envFile = `export const environment = {
    POCKETBASE_URL: '${process.env.POCKETBASE_URL}',
    GEOCODING_URL: '${process.env.GEOCODING_URL}',
    GEOCODING_API_KEY: '${process.env.GEOCODING_API_KEY}',
    MAPSJS_API_KEY: '${process.env.MAPSJS_API_KEY}',
};`;

const targetPath = path.join(__dirname, './src/environments/environment.development.ts');
fs.writeFile(targetPath, envFile, (err) => {
    if (err) {
        console.error(err);
        throw err;
    } else {
        console.log(successColor, `${checkSign} Successfully generated environment.development.ts`);
    }
});