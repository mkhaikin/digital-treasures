import React, { Fragment, useEffect, useState } from 'react';
// import SelectEmployee from './SelectEmployee';
import PageTitle from './PageTitle.jsx';
import Comments from './Comments.jsx';

const Main = () => {

    const [employees, setEmployees] = useState([]);

    const getEmployees = async () => {
        try {
            const response = await fetch('http://localhost:5000/admin/employees');
            const jsonData = await response.json();
            // console.log(jsonData);
            setEmployees(jsonData);
        } catch (err) {
            console.error(err.message)
        }
    };
    
    useEffect(() => {
        getEmployees()
    }, []);

    return (
        <Fragment>
            <div className="container-fluid main">
                <PageTitle/>
                <table className="table mt-5 text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <tr>
                            <td>John</td>
                            <td>Doe</td>
                            <td>john@example.com</td>
                        </tr> 
                    */}
                        {employees.map((employee,i) => (
                            <tr key={i+1}>
                                <td>{i+1}</td>
                                {console.log([Object.keys(employee)[1]])}
                                <td>{Object.keys(employee)[1]
                                 + ' ' + employee.last_name}</td>
                                <td>{employee.role}</td>
                                <td>{employee.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <Comments/>
            </div>
            
        </Fragment>
    );
};

export default Main;

