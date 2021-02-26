import React, {Fragment, useState} from 'react';
import {useDispatch} from 'react-redux';
import {selectEmployee} from '../actions/actions';

const SelectEmployee = () => {
    
    const dispatch = useDispatch();
    const [lastName, setLastName] = useState("");

    const onSubmitForm = (e) => {
        e.preventDefault();
        if(!lastName) return;
        dispatch(selectEmployee(lastName));
    }

    return (
        <Fragment>
            <h1 className="text-center mt-5">Add New Employee</h1>
            <form className="d-flex mt-5" onSubmit={onSubmitForm}>
                <input 
                    type="text" 
                    className="form-control"
                    placeholderText="First Name"
                    value={lastName} 
                    onChange={e => setLastName(e.target.value)}
                />
                {/* <input 
                    type="text" 
                    className="form-control" 
                    placeholderText="Last Name"
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholderText="Email" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholderText="Password" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                />
                <input 
                    type="text" 
                    className="form-control"
                    placeholderText="Role" 
                    value={description} 
                    onChange={e => setDescription(e.target.value)}
                /> */}
                <button className="btn btn-success">Find</button>
            </form>
        </Fragment>
    );
}

export default SelectEmployee;