'use strict';

const
fs = require('fs'),

readJsonFile = (path) => {
  console.log(`readJsonFile ${path}`);

  if (!fs.existsSync(path)) {
    console.log(`${path} not found`);
    return;
  }

  const
    fileContent = fs.readFileSync(path) + '',
    data = JSON.parse(fileContent)
  ;

  console.log(`${fileContent.length} characters loaded`);
  return data;
}
;

module.exports = {
  readJsonFile
};
