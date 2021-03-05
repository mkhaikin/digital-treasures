import React, { Fragment, useEffect } from 'react';
// import SelectEmployee from './SelectEmployee';
import { useSelector } from 'react-redux';
import Employees from './Employees.jsx';
import Customers from './Customers.jsx';
import Orders from './Orders.jsx';
import Report from './Report.jsx';
const Main = () => {

    const datas = useSelector((state) => state.menu);
    const title = datas.title;

    return (
        <Fragment>
            <div className="container-fluid main">

                {   
                    title === 'Employees' ? <Employees/>
                    : title === 'Customers' ? <Customers/>
                    : title === 'Orders' ? <Orders/>
                    : <Report/>
                }
 
            </div>

        </Fragment>
    );
};

export default Main;

