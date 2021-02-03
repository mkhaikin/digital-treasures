const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES

// Get all employees

// Get all customers
// Create customer
app.post('/customers', async (req,res) =>{
    try {
        const { address, city, email, first_name, last_name, phone, postal_code, province, notes } = req.body;
        const newCustomer = await pool.query(
            'INSERT INTO customers (address, city, email, first_name, last_name, phone, postal_code, province, notes) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
            [address, city, email, first_name, last_name, phone, postal_code, province, notes]
        );
        console.log('row was inserted. new customer created');
        res.json(newCustomer.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});
// Get all orders

// Create user

app.listen(5000, () => {
    console.log("server has started on PORT 5000")
});
