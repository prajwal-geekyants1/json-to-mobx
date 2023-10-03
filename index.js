const fs = require('fs');
const convertToMobX = require('./converter');

// Assuming you have types defined somewhere for your MobX models
const types = {
    boolean: 'Boolean',
    number: 'Number',
    string: 'String',
    Date: 'Date',
    model: (title, properties) => `Model: ${title}, Properties: ${JSON.stringify(properties)}`,
    frozen: 'Frozen',
    array: (item) => `Array of ${item}`,
    optional: (type, defaultValue) => `Optional(${type} with default ${defaultValue})`,
    maybe: (type) => `Maybe(${type})`
  };
  

const convertSchema = (schema) => {
  const convert = convertToMobX(types);
  return convert(schema);
};

// Example usage
const jsonSchema = JSON.parse(fs.readFileSync('example.json', 'utf8'));
const mobxModel = convertSchema(jsonSchema);
console.log(mobxModel);