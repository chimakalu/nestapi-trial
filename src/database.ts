const MySQL2Extended = require('mysql2-extended');
const mysql2 = require('mysql2/promise');

export const pool = mysql2.createPool({
    host: 'sdb-n.hosting.stackcp.net',
    user: 'blogdb-313936e6b8',
    password: 'hom273j152',
    database: 'blogdb-313936e6b8',
    waitForConnections: true,
    connectionLimit: 20,
    queueLimit: 0
})

export const db = new MySQL2Extended(pool);