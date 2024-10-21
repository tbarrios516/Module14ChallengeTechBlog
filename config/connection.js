require("dotenv").config();
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.DATABASE_URL || "", {
  dialect: "postgres",
  protocol: "postgres",
  dialectOptions: {
    ssl: process.env.DATABASE_URL ? {
      require: true,
      rejectUnauthorized: false, 
    } : false, 
  },
  host: process.env.DB_HOST || "localhost",
  port: process.env.DB_PORT || 5432,
  logging: false, 
});

module.exports = sequelize;
