const fs = require('fs');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL);

async function runSchema() {
  try {
    const schema = fs.readFileSync('schema.sql', 'utf-8');
    await sequelize.query(schema);
    console.log('Schema executed successfully.');
  } catch (error) {
    console.error('Error executing schema:', error);
  } finally {
    await sequelize.close();
  }
}

runSchema();
