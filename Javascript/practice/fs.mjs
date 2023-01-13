
const fsPromises = require('fs').promises;

import path from 'path'

console.log(import.meta.url)



const template = await fsPromises.readfile(path.join(__dirname, 'template.html'), 'utf8')
