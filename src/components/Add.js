import React, {useEffect, useRef, useState} from 'react';
import swal from 'sweetalert';

const Add = ({ addHandler, Add , employe }) => {
  
  const nameRef = useRef()

  useEffect(() => {
     nameRef.current.focus();
  },[])

  const [Newemploye, setNewemploye] = useState({
        id: employe.length + 1,
        name: "",
        email: "",
        designation: "",
        date: "",
        salary : "",

  })
  
  const TextSeter = (e) => {

    const Name = e.target.name;
    const value = e.target.value;

    const newEmployee = { ...Newemploye, [Name]: value }
    setNewemploye(newEmployee)
     
  }

  const onSubmit = (e) => {
    e.preventDefault()

    swal({
                icon: "success",
                title: 'Add!',
                text: "New Employe added succesfully",
                buttons: false,
                timer: 3000
            })
    employe.push(Newemploye)
    addHandler(!Add)
 
   }

  


    return (
        <div className='container my-4'>
            <h1>Add a New Employe.</h1>
             <button onClick={addHandler} className='btn btn-primary my-5'>Back</button>
        <div>
          
            
          <form onSubmit={onSubmit}>
             <div className="mb-3">
    <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
  <input onChange={TextSeter} ref={nameRef} required name="name" type="name" value={Newemploye.name}  className="form-control" id="exampleFormControlInput1" placeholder="name"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
  <input onChange={TextSeter} name="email" required type="email" value={Newemploye.email} className="form-control" id="exampleFormControlInput1" placeholder="Email"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Designation</label>
  <input onChange={TextSeter} name="designation"  required type="text" value={Newemploye.designation} className="form-control" id="exampleFormControlInput1" placeholder="Give a rule"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Date</label>
  <input onChange={TextSeter} name="date" type="date" required value={Newemploye.date} className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label htmlFor="exampleFormControlInput1" className="form-label">Salary</label>
  <input onChange={TextSeter} name="salary"  type="number" required value={Newemploye.salary} className="form-control" id="exampleFormControlInput1" placeholder='0'/>
            </div>
            <div className='my-4'>
                <button type='submit' className='btn btn-primary' >Add</button>
           
 
                
</div>
          </form>
 
      
        </div>              
        </div>
    );
};

export default Add;