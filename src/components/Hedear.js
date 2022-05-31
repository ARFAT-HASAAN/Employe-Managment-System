import React from 'react';

const Hedear = ({AddHandler}) => {
    return (
        <div className='container mt-4' >
            <h1 className='' >Employe Managment System</h1>

            <button onClick={AddHandler} className='btn btn-primary my-4'> Add Employe </button>
        </div>
    );
};

export default Hedear;