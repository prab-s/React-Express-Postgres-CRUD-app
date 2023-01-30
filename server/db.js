const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "mysuperpassword1",
    host: "192.168.1.77",
    port: 8002,
    database: "perntodo"
});

module.exports = pool;