import React, {Fragment, useEffect, useState } from 'react';
import Auth from './Auth.jsx';

const Menu = () => {

    return (
        <Fragment>
            <div className="container menu">
                <h2>Menu </h2>
                <p>logged in as: Mike</p>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#">Admin</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Customers</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Orders</a>
                    </li>
                    
                </ul>
            </div>
        </Fragment>
    )
};

export default Menu;