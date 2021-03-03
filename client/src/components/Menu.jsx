import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { selectEmployees, selectCustomers, selectOrders } from '../actions/menuActions';
// import Auth from './Auth.jsx';

const Menu = () => {
    const dispatch = useDispatch();

    const employeesLink = () => {
        dispatch(selectEmployees());
    }
    
    const customersLink = () => {
        dispatch(selectCustomers());
    }

    const ordersLink = () => {
        dispatch(selectOrders());
    }

    return (
        <Fragment>
            <div className="container menu">
                <h2>Menu </h2>
                <p>logged in as: Mike</p>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <button className="nav-link" href="#" onClick={employeesLink}>Admin</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" href="#" onClick={customersLink}>Customers</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link" href="#" onClick={ordersLink}>Orders</button>
                    </li>

                </ul>
            </div>
        </Fragment>
    )
};

export default Menu;