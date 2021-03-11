const fs = require('fs');

export function parse(file: string) {
    return fs.readFileSync(file, {encoding: 'base64'});
};