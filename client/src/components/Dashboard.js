import React, {Fragment, useEffect, useState} from 'react';

const Dashboards = () => {

    const [customers, setCustomers] = useState([]);
    const getCustomers = async () => {
        try {
            const response = await fetch('http://localhost:5000/customers');
            const jsonData = await response.json();
            // console.log(jsonData);
            setCustomers(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };
    useEffect(() => {
        getCustomers()
    },[]);
    return (
        <Fragment>
            <div className="container-fluid dashboard">
            {' '}
            <table class="table mt-5 text-center">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Address</th>
                    <th>City</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Notes</th>
                </tr>
                </thead>
                <tbody>
                {/* <tr>
                        <td>John</td>
                        <td>Doe</td>
                        <td>john@example.com</td>
                    </tr> 
                */}
                {customers.map(customer => (
                    <tr key={customer.todo_id}>
                        <td>{customer.first_name+' '+customer.last_name}</td>
                        <td>{customer.address}</td>
                        <td>{customer.city}</td>
                        <td>{customer.email}</td>
                        <td>{customer.phone}</td>
                        <td>{customer.notes}</td>
                    </tr>
                ))}
                </tbody>
            </table>   
            </div>
        </Fragment>
    );
};

export default Dashboards;