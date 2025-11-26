const { pool } = require('../src/db');

async function checkTables() {
    try {
        const [rows] = await pool.query("SHOW TABLES LIKE 'pricingplan'");
        if (rows.length > 0) {
            console.log('Table pricingplan EXISTS');
        } else {
            console.log('Table pricingplan DOES NOT EXIST');
        }
        process.exit(0);
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
}

checkTables();
