import React, { Fragment, useEffect } from 'react';
// import SelectEmployee from './SelectEmployee';
import { useSelector } from 'react-redux';
import PageTitle from './PageTitle.jsx';
import Comments from './Comments.jsx';


const Orders = () => {

    const datas = useSelector((state) => state.menu);
    const title = datas.title;
    
    return (
        <Fragment>
            <PageTitle/>
                
            <Comments/>
        </Fragment>
    );
};
    
export default Orders;
    