import React, {Fragment} from 'react';
import Menu from './Menu.jsx';
import Main from './Main.jsx';

const Dashboard = () => {

    return (
        <Fragment>
            <div className="container-fluid dashboard">
                <Menu/>
                <Main/>
            </div>
        </Fragment>
    )
};

export default Dashboard;