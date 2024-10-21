import { pool } from "../../index.js";

class SSMSModel {
  async Create(tableName, values,atributes) {
    try {
      return await pool.then(async (pool) => {
        await pool
          .request()
          .query(`INSERT INTO ${tableName}  
            ${atributes? `(${atributes})`: ""}
            VALUES (${values})`);

        const response = await pool
          .request()
          .query(`SELECT * FROM ${tableName} WHERE ${"1=1"}`);
        return response.recordset[response.recordset.length - 1];
      });
    } catch (error) {
      console.log("Cannot create", error);
    }
  }
  async Read(tableName, atribute, filter) {
    try {
      return await pool.then(async (pool) => {
        let result = await pool.request().query(`SELECT ${atribute} 
            FROM ${tableName} 
           ${filter}`);
        return result.recordset;
      });
    } catch (error) {
      console.log("Cannot read", error);
    }
  }
  async Update(tableName,columnsAndValues , filter) {
    return await pool.then(async (pool) => {
      await pool.request().query(`UPDATE ${tableName}
        SET ${columnsAndValues} ${filter}
        `);
      const response = await pool
        .request()
        .query(`SELECT * FROM ${tableName} ${filter}`);
      return response.recordset[0];
    });
  }
  async Delete(tableName, filter) {
    return await pool.then(async (pool) => {
      await pool.request().query(`DELETE FROM ${tableName} ${filter}`);
    });
  }
  async GetIdFromName(tableName, filter, values)  {
    try {
      return await pool.then(async (pool) => {
        let result = await pool
          .request()
          .query(`SELECT * FROM ${tableName} ${filter}`);
        if (result.recordset.length === 0) {
          await pool
            .request()
            .query(`INSERT INTO ${tableName} VALUES (${values})`);
          let result = await pool
            .request()
            .query(`SELECT * FROM ${tableName} ${filter}`);
          return result.recordset[0].ID;
        } else {
          return result.recordset[0].ID;
        }
      });
    } catch (error) {
      console.log("Cannot get id", error);
    }
  }
}

export default SSMSModel;
