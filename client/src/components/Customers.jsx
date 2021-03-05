import React, { Fragment, useEffect } from 'react';
// import SelectEmployee from './SelectEmployee';
import { useSelector } from 'react-redux';
import PageTitle from './PageTitle.jsx';
import Comments from './Comments.jsx';


const Customers = () => {

    const datas = useSelector((state) => state.menu);
    const title = datas.title;
    
    return (
        <Fragment>
            <PageTitle/>

            <Comments/>
        </Fragment>
    );
};
    
export default Customers;

{/* { Object.keys(Object.keys(datas)[1]).map((item, i) => (
    <div key={i} className="report">
        {result[item].map((media,i) =>
            <div key={ind}>{media.name}</div>
        )}
    </div>
    ))
} */}