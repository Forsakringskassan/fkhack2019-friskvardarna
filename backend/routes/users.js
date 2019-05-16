var express = require('express');
var router = express.Router();
var crypto = require('crypto')

const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'fkhack',
    password: 'oxsta123',
    port: 5432,
})

/* GET users listing. */
router.get('/', function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    pool.query('SELECT * FROM public.users ORDER BY id ASC', (error, results) => {
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

    const {name, username, email, location, password} = req.body

    var salt = crypto.randomBytes(16).toString('base64');
    console.log(salt)
    console.log(name)
    console.log(email)
    console.log(location)
    console.log(password)
    console.log(username)

    pool.query('INSERT INTO users (name, username, location, password, salt) VALUES ($1, $2, $3, $4, $5)', [name, username, location, password, salt], (error, results) => {
        if (error) {
            throw error
        }
        res.status(201).send(`User added with ID: ${res.insertId}`)
    })
});


router.get('/:userid/bookings', function (req, res, next) {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    const id = parseInt(req.params.userid)
    console.log(id)
    pool.query('SELECT id as bookingid, event, user, tstamp FROM public.bookings where "user" =$1 ORDER BY id ASC', [id], (error, results) => {
        if (error) {
            throw error
        }
        res.status(200).json(results.rows)
    })
});

module.exports = router;
