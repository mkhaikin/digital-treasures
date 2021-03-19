import React, {Fragment} from 'react';
import {useSelector, useDispatch } from 'react-redux';
import { logOut } from '../actions/authActions';


const Header = () => {

    const auth = useSelector((state) => state.auth)
    const loggedIn = auth.loggedIn;
    const userName = auth.user;
    const dispatch = useDispatch();

    const logoutBtn = () => {
        dispatch(logOut())
      }

    return (
        <Fragment>
            <div className="container-fluid header">
                <h4>Digital Treasures OMS</h4>
                {
                    loggedIn && <p>You are logged in as <span>{userName}</span><button type="button" className="btn btn-primary" onClick={logoutBtn}>Logout</button></p>
                     
                }
            </div>
        </Fragment>
    );
};

export default Header;