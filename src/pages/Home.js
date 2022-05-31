import React, {useState} from 'react';
import Hedear from '../components/Hedear';
import EmployeList from "../components/EmployeList.js";
import Employees from '../data/data';
import AddEmplye from "../components/Add"
import EditComponent from "../components/Edit"
import swal from 'sweetalert';


const Home = () => {
    const [Add, setAdd] = useState(false)
    const [Edit, setEdit] = useState(false)
    const [Employee, setEmployee] = useState(Employees)
    const [Selecteditem, setSelecteditem] = useState({})
     
    const addHandler = () => {
        setAdd(!Add)
         
     }
     
    const EditHandler = (id) => {
        setEdit(!Edit)
        const Employe = Employee?.find(employe => employe?.id === id)
        setSelecteditem(Employe)
        
        
    }

    const DeleteHandler = (id) => {

        swal({
            icon: 'warning',
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            buttons: [true, "Yes!"],
          
        }).then((res) => { 

            if (res) {
            swal({
                icon: "success",
                title: 'Deleted!',
                buttons: false,
                timer: 1000
            })
                
        const restEmployee = Employees.filter((employee) => employee.id !== id)
        setEmployee(restEmployee)   
                
                
            }

         })
    
     



    }
     

    return (
        <>
            {!Add && !Edit &&
                <>
                <Hedear AddHandler={addHandler}  setAdd={setAdd} />
                <EmployeList
                    EditHandler={EditHandler}
                    DeleteHandler={DeleteHandler}
                    setEdit={setEdit}
                    employe={Employee}
                     ></EmployeList>
                </>   
            }
            
            {Add && <AddEmplye Add={Add} addHandler={addHandler}  employe={Employee}></AddEmplye>
     

            }

            {Edit && <EditComponent  Selecteditem={Selecteditem}  Edit={Edit} setEdit={setEdit} Employee={Employee} ></EditComponent>
            
            }
    
        </>
        
         );
};

export default Home;