import React, {Fragment, useState} from 'react';

const EditEmployee = ({employee}) => {
    
    
    
    return (
        <Fragment>
                <button 
                    type="button" 
                    className="btn btn-warning" 
                    data-toggle="modal" 
                    data-target={`#id${employee.id}`}>
                        Edit
                </button>

                <div className="modal" id={`id${employee.id}`}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">Edit Todo </h4>
                                <button type="button" className="close" data-dismiss="modal"
                                // onClick={() => setDescription(todo.description)}
                                >&times;</button>
                            </div>

                            <div className="modal-body">
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    // value={description} 
                                    // onChange = {e => setDescription(e.target.value)}
                                    />
                            </div>

                            <div className="modal-footer">
                                <button 
                                    type="button" 
                                    className="btn btn-warning" 
                                    data-dismiss="modal"
                                    // onClick = {e => updateDescription(e)}
                                    >
                                        Edit
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-danger" 
                                    data-dismiss="modal"
                                    // onClick={() => setDescription(todo.description)}
                                    >
                                        Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 
            </Fragment>
    );
}

export default EditEmployee;