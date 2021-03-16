import React, { Fragment} from 'react';
// import SelectEmployee from './SelectEmployee';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from './PageTitle.jsx';

import Comments from './Comments.jsx';

const Employees = () => {

    const dispatch = useDispatch();
    const datas = useSelector((state) => state.menu);
    const title = datas.title;
    const keys = datas.data[0];
    const customers = datas.data
    return (
        <Fragment>
            <PageTitle/>
            <table className="table mt-5 text-center">
                <thead>
                    <tr>
                        {
                            ( keys) ? (Object.keys(keys)).map((key,i) => (
                                <th>{key}</th>
                                
                            ))
                            : ""
                        }
                    </tr>
                </thead>
                <tbody>
                     {customers.map((customer,i) => (
                            <tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{customer.address}</td>
                                <td>{customer.city}</td>
                                <td>{customer.email}</td>
                                <td>{customer.id}</td>
                                <td>{customer.last_name}</td>
                                <td>{customer.phone}</td>
                                <td>{customer.postal_code}</td>
                                <td>{customer.province}</td>
                                <td>{customer.notes}</td>
                                
                            </tr>
                        ))}
                </tbody>
            </table>
            <Comments />
        </Fragment>
    );
};

export default Employees;
