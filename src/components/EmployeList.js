import React from 'react';

const EmployeList = ({ employe, DeleteHandler, EditHandler}) => {
    


    return (
        <div className='container mt-4' >
        <div className='table-responsive-sm'>
         <table className="table table-striped table-dark text-center">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Designation</th>
      <th scope="col">Date</th>
      <th scope="col">Salary</th>
      <th scope="col">Action</th>
                        
    </tr>
  </thead>
     <tbody>
    {  employe.length > 0 && (
      employe.map((employe, index) => (
                                       
    <tr key={index} className='table-blue'>
              <th scope="row">{employe.id + 1}</th>
              <td>{employe.name}</td>
              <td>{employe.email}</td>
              <td>{employe.designation}</td>
              <td>{employe.date }</td>
              <td>$ {employe.salary}</td>
              <td> <button className='btn btn-success' onClick={() => EditHandler(employe.id)} >Edit</button> <button className='btn btn-danger' onClick={() => DeleteHandler(employe.id)} >Delete</button> </td>
    </tr>
                         
      ))
    )}
  </tbody>
    </table> 
      </div>
     
            
        </div>
    );
};

export default EmployeList;