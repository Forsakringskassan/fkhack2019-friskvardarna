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

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    pool.query('SELECT E.*, TO_CHAR(E.eventdate,\'YYYY-MM-DD\') as eventdate, TO_CHAR(E.eventdate,\'DY\') as eventday, TO_CHAR(E.eventdate,\'IW\') as week, (select count(*) from bookings B where B.event = E.id) as bookings FROM public.events E ORDER BY E.id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.get('/location/:locationid', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const locationid = parseInt(req.params.locationid)
    pool.query('SELECT E.*, TO_CHAR(E.eventdate,\'YYYY-MM-DD\') as eventdate, TO_CHAR(E.eventdate,\'DY\') as eventday, TO_CHAR(E.eventdate,\'IW\') as week, (select count(*) from bookings B where B.event = E.id) as bookings FROM public.events E where E.id = $1 ORDER BY E.id ASC', [locationid], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.get('/test', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    pool.query('SELECT E.name, L.name as locationname FROM events E INNER JOIN locations L on E.location = L.id ORDER BY E.id ASC', (error, results) => {
        if (error) {
            throw error
        }
        console.log(results)
        res.status(200).json(results.rows)
    })
});

//SELECT E.name, L.name as locationname FROM events E INNER JOIN locations L on E.location = L.id ORDER BY E.id ASC

module.exports = router;
