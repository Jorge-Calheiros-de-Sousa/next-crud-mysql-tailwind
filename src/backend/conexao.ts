import mysql from "mysql2"
import "dotenv/config"

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.ROOT,
    database: process.env.DATABASE
})


export default connection; 