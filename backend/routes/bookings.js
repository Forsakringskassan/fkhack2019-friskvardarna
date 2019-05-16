var express = require('express');
var router = express.Router();

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fkhack',
    password: 'oxsta123',
    port: 5432,
})

/* GET users listing. */
router.get('/', function(req, res, next) {
    pool.query('SELECT * FROM public.bookings ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

module.exports = router;
