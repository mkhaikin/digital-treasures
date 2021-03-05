import React, { Fragment, useEffect } from 'react';
// import SelectEmployee from './SelectEmployee';
import { useSelector } from 'react-redux';
import PageTitle from './PageTitle.jsx';

const Employees = () => {

    const datas = useSelector((state) => state.menu);
    const title = datas.title;
    const keys = datas.data[0];
    const employees = datas.data
    
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
                        {employees.map((employee,i) => (
                            <tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{ employee.first_name }</td>
                                <td>{ employee.last_name }</td>
                                <td>{ employee.email }</td>
                                <td>{ employee.password }</td>
                                <td>{ employee.role }</td>

                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {/* {datas.map((data,i) => (
                            <tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{data.first_name
                                 + ' ' + data.last_name}</td>
                                <td>{data.role}</td>
                                <td>{data.email}</td>
                            </tr>
                        ))} */}
                    </tbody>
                </table>
    </Fragment>
    );
};
    
export default Employees;
    