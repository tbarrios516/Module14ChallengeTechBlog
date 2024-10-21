const fs = require('fs');
const path = require('path');
const sequelize = require('../config/connection');

const runSchema = async () => {
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, { encoding: 'utf8' });

    await sequelize.query(schema);
    console.log('Schema executed successfully.');
  } catch (error) {
    console.error('Error executing schema:', error);
  } finally {
    await sequelize.close();
  }
};

runSchema();
