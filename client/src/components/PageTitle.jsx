import React from 'react';
import {useSelector} from 'react-redux';

const PageTitle = () => {
    const datas = useSelector((state) => state.menu);
    const title = datas.title;
    return (
        <h2>{ title === 'Employees' ? "Employees"
            : title === 'Customers' ? 'Customers'
            : title === 'Orders' ? "Orders"
            : "Dashboard"}
        </h2>
         
    );
};

export default PageTitle;
