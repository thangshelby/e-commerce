import sql from "mssql";
import dotenv from "dotenv";
dotenv.config();



const sqlConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  server: process.env.DB_SERVER,
  options: {
    trustedConnection: false,
    trustServerCertificate: true,
    enableArithAbort: true,
  },
  port: 1433,
};

const db = {
  async connect() {
    try {
      return  await sql.connect(sqlConfig);
    } catch (error) {
      console.log("Cannot connect", error);
    }
  },
};

db.connect();

export default db;
