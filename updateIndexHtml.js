const fs = require('fs');
const filePath = './build/app/index.html';
const regex = /\/static\//g;

fs.readFile(filePath, (err, data) => {
    if (err) throw err;
    data = data.toString();
    data = data.replace('<link rel="icon" href="/favicon.ico"/>','');
    data = data.replace('<link rel="apple-touch-icon" href="/logo192.png"/>','');
    data = data.replace('<link rel="manifest" href="/manifest.json"/>','');
    data = data.replace(regex, './');
    fs.writeFile(filePath, data, err => {
        err || console.log('Data replaced \n');
    });
});
