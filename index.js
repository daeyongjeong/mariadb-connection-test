const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "",
  port: "",
  user: "",
  password: "",
  connectionLimit: 5,
});

async function asyncFunction() {
    let conn;
    try {
        conn = await pool.getConnection();
        console.log("success");
    } catch (err) {
        console.log("error");
    } finally {
        console.log("connection test ends")
    }
}

asyncFunction();
