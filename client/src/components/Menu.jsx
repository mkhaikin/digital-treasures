import React, { Fragment } from 'react';
import { useDispatch } from 'react-redux';
import { menuEmployees, menuCustomers, menuOrders } from '../actions/menuActions';
// import Auth from './Auth.jsx';

const Menu = () => {
    const dispatch = useDispatch();

    const employeesLink = () => {
        dispatch(menuEmployees());
    }
    
    const customersLink = () => {
        dispatch(menuCustomers());
    }

    const ordersLink = () => {
        dispatch(menuOrders());
    }

    return (
        <Fragment>
            <div className="container menu">
                <h2>Menu </h2>
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