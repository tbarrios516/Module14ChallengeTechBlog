const fs = require('fs');
const path = require('path');
const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const sequelize = new Sequelize(process.env.DB_URL || 'postgresql://tech_blog_db_j52n_user:oNJCkiolXYu8JOOl8hy0OfhFBBFI0Z3O@dpg-csb86dl6l47c73cvkv80-a.virginia-postgres.render.com/tech_blog_db_j52n');

const runSchema = async () => {
  try {
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, { encoding: 'utf8' });

    await sequelize.query(schema);
    console.log('Schema executed successfully.');

    const db = new Sequelize(process.env.DB_URL || 'postgresql://tech_blog_db_j52n_user:oNJCkiolXYu8JOOl8hy0OfhFBBFI0Z3O@dpg-csb86dl6l47c73cvkv80-a.virginia-postgres.render.com/tech_blog_db_j52n');

  } catch (error) {
    console.error('Error executing schema:', error);
  } finally {
    await sequelize.close();
  }
};

runSchema();
