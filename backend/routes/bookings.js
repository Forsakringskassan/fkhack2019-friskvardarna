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

    pool.query('SELECT * FROM public.bookings ORDER BY id ASC', (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.get('/user/:userid', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const userid = parseInt(req.params.userid);

    pool.query('SELECT * FROM public.bookings where "user" = $1 ORDER BY id ASC', [userid], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.delete('/:bookingid', function(req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const bookingid = parseInt(req.params.bookingid)
    pool.query('DELETE FROM bookings WHERE id = $1', [bookingid], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

router.post('/', function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const {event, userid} = req.body

    pool.query('SELECT * FROM bookings where event=$1 AND "user" = $2 ORDER BY id ASC',[event, userid], (error, results) => {
        if (error) {
            throw error
        }
        console.log(results.rows.length)
        if(results.rows.length > 0){
            res.status(406).send('User is already booked for this event')
        }
        else{
            console.log(event)
            console.log(userid)

            pool.query('INSERT INTO bookings ( event, "user") VALUES ($1, $2)', [event, userid], (error, results) => {
                if (error) {
                    throw error
                }
                res.status(201).send(`Booking created with ID: ${res.insertId}`)
            })
        }
    })
});



module.exports = router;
