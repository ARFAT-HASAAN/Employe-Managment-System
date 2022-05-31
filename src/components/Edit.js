import React, { useEffect, useState } from 'react';
import DataField from './DataField';


const Edit = ({ Edit, setEdit, Selecteditem, Employee }) => {

   
    

    return (
        <div className='container'>
            <h1 className='mt-4'>Update Employe Data.</h1>
             
            <button className='btn btn-primary my-4' onClick={() => setEdit(!Edit)} >Back</button>
            <DataField Selecteditem={Selecteditem} Employee={Employee} setEdit={setEdit} Edit={Edit}   ></DataField>
        </div>

    );
};

export default Edit;