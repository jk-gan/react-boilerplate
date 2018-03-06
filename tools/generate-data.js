const jsf = require('json-schema-faker');
const mockDataSchema = require('./schema');
const fs = require('fs');

const json = JSON.stringify(jsf(mockDataSchema));

fs.writeFile('./src/api/db.json', json, (err) => {
  if (err) {
    return console.log(err);
  }
  console.log('Mock data generated.');
  return null;
});
