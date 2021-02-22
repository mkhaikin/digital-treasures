const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES
// Create employee
app.post('/admin/employees', async (req,res) =>{
    try {
        const { first_name, last_name, role, email, password} = req.body;
        const newUser = await pool.query(
            'INSERT INTO employees (first_name, last_name, role, email, password) VALUES($1,$2,$3,$4,$5) RETURNING *',
            [first_name, last_name, role, email, password]
        );
        console.log('row was inserted. new employee created');
        res.json(newUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all employees
app.get('/admin/employees', async (req,res) => {
    try {
        const allEmployees = await pool.query('SELECT * FROM employees');
        res.json(allEmployees.rows);
      } catch (err) {
          console.error(err.message);
      }
});

// Get employee by id
app.get('/admin/employees/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const user = await pool.query('SELECT * FROM employees WHERE id = $1', [id]);
        res.json(user.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Update employee by id
app.put('/admin/employees/:id', async (req,res) =>{
    try {
        const { first_name, last_name, role, email, password} = req.body;
        const updatedUser = await pool.query(
            'INSERT INTO employees (first_name, last_name, role, email, password) VALUES($1,$2,$3,$4,$5) RETURNING *',
            [first_name, last_name, role, email, password]
        );
        console.log('Success, employee updated!');
        res.json(updatedUser.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all customers
app.get('/customers', async (req,res) => {
    try {
        const allCustomers = await pool.query('SELECT * FROM customers');
        res.json(allCustomers.rows);
      } catch (err) {
          console.error(err.message);
      }
});

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

// Get customer by id
app.get('/customers/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const customer = await pool.query('SELECT * FROM customers WHERE id = $1', [id]);
        res.json(customer.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Update customer by id
app.put('/customers/:id', async (req,res) =>{
    try {
        const { address, city, email, first_name, last_name, phone, postal_code, province, notes } = req.body;
        const updatedCustomer = await pool.query(
            'INSERT INTO customers (address, city, email, first_name, last_name, phone, postal_code, province, notes) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *',
            [address, city, email, first_name, last_name, phone, postal_code, province, notes]
        );
        console.log('Success, customer updated!');
        res.json(updatedCustomer.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

// Get all Orders
app.get('/orders', async (req,res) => {
    try {
        const allOrders = await pool.query('SELECT * FROM orders');
        res.json(allOrders.rows);
      } catch (err) {
          console.error(err.message);
      }
});

// Insert order
app.post('/orders', async (req,res) =>{
    try {
        const { note, estimated_price, is_guaranteed } = req.body;
        const createrBy = 'mike@email.com';
        const newOrder = await pool.query(
            'INSERT INTO orders (note, estimated_price, is_guaranteed, created_by, customer_id, status_id) VALUES($1,$2,$3,(SELECT id FROM employees WHERE (email = $4)), 1, 1 ) RETURNING *',
            [note, estimated_price, is_guaranteed,createrBy]
        );
        console.log('row was inserted. new order created');
        res.json(newOrder.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, () => {
    console.log("server has started on PORT 5000");
});

// INSERT INTO orders(note,estimated_price,is_guaranteed,created_by,customer_id,status_id)
// VALUES('first order',123,false,
// 	(SELECT id FROM employees WHERE (email = 'mike@email.com')), 
// 	   1,
// 	(SELECT id FROM status WHERE (abbr = 'NS') OR (status_name = 'Not Started'))
// 	  )


// inserting using Foreign KEY temp.
// INSERT INTO articles( article_name, article_content, category_id, img, url ) 
// VALUES( ?, ?, ( SELECT category_id FROM categories WHERE categories.category_id = ? ), ?, ?) 