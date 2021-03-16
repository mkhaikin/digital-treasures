import React, { Fragment, useEffect, useState } from 'react';
// import SelectEmployee from './SelectEmployee';
import { useSelector, useDispatch } from 'react-redux';
import PageTitle from './PageTitle.jsx';

import EditEmployee from './EditEmployee.jsx';


const Employees = () => {

    const dispatch = useDispatch();
    const datas = useSelector((state) => state.menu);
    const title = datas.title;
    const keys = datas.data[0];
    const employees = datas.data

    const addEmployeeBtn = () => {
        return ;
    }

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
                         
                         {employees.map((employee,i) => (
                            <tr key={i+1}>
                                <td>{i+1}</td>
                                <td>{employee.first_name
                                 + ' ' + employee.last_name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.email}</td>
                                <td><EditEmployee employee={employee}/></td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
    </Fragment>
    );
};
    
export default Employees;
    