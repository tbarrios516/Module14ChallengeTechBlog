const fs = require('fs');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

async function runSchema() {
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    await sequelize.query(schema);
    console.log('Schema executed successfully.');
  } catch (error) {
    console.error('Error executing schema:', error);
  } finally {
    await sequelize.close();
  }
}

runSchema();
