import React, { useState } from 'react';
import swal from 'sweetalert';

const DataField = ({ Selecteditem, Employee, Edit, setEdit }) => {
  
   const [query, setquery] = useState({
        id: Selecteditem?.id,
        name: Selecteditem.name,
        email: Selecteditem.email,
        designation: Selecteditem.designation,
        date: Selecteditem.date,
        salary : Selecteditem.salary,
        
   })
  
  const TextSeter = (e) => {

    const Name = e.target.name;
    const value = e.target.value;

    const newEmployee = { ...query, [Name]: value }
    setquery(newEmployee)
     
  }


  const EditData = (e) => {
    e.preventDefault()

     const UpdateEmploye = { ...query} 

     for (let i = 0; i < Employee.length; i++) {
       if (Employee[i].id === UpdateEmploye.id) {
              swal({
                icon: "success",
                title: 'Succesfully Edit!',
                text: "Data update successfully",
                buttons: false,
                timer: 3000
            })
                Employee.splice(i, 1, UpdateEmploye);
                setEdit(!Edit)
            }
        }


    
    
 }   




  
    return (
        <div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input type="text" name='name'  onChange={TextSeter} value={query.name} className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" value={query.email} name="email" onChange={TextSeter}  className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Designation</label>
  <input type="text" value={query.designation} name="designation" onChange={TextSeter}  className="form-control" id="exampleFormControlInput1" placeholder="Give a rule"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
          <input type="date" name='date' value={query.date} onChange={TextSeter}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Salary</label>
  <input type="number" name='salary' value={query.salary} onChange={TextSeter}  className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className='my-4'>
                <button className='btn btn-primary' onClick={EditData} >Update</button>
                
</div>
      
        </div>
    );
};

export default DataField;     