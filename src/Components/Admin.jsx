import React, { useEffect, useState } from "react";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import axios from 'axios'
import { Link } from "react-router-dom";

function Admin() {

  const base_url='http://localhost:8000'

  const [allEmployees,setAllEmployees]=useState([])

  const fetchData=async()=>{
    //Api fetch - get all employees details
    const result =await axios.get(`${base_url}/get-all-employees`)//employees details
    console.log(result.data.employees);//object->array 
    setAllEmployees(result.data.employees)
  }
  console.log(allEmployees);//array

  const DeleteEmployee=async(id)=>{
    const result =await axios.delete(`${base_url}/delete-employee/${id}`)//delete employee
    alert(result.data.message)
    fetchData()
  }

  useEffect(()=>{
    fetchData()
  },[])
  return (
    <div>
      <h1 className="text-center m-3">Employee Management System</h1>
      <div className="container">
        <p>
          Employee management is a practice that helps a manager improve
          employee productivity and satisfaction to help an organisation reach
          its goals. Human resources (HR) professionals often use an employee
          management system (EMS), including recruitment, offboarding and
          performance management. Using a dedicated EMS can help an HR manager
          streamline the hiring process and improve workplace efficiency. In
          this article, we discuss what an employee management systems is,
          outline its benefits and types and list some examples of employee
          management software tools.
        </p>
      </div>
      {/* navigate to add page */}
<Link to={'/add'}>
<a style={{ float: "right" }} className="btn btn-primary" href="">
        Add
      </a>
</Link>

      <div className="container">
        <MDBTable align="middle">
          <MDBTableHead>
            <tr>
            <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
              <th scope="col">Designation</th>
              <th scope="col">Salary</th>
              <th scope="col">Actions</th>
            </tr>
          </MDBTableHead>
          <MDBTableBody>
           {
            allEmployees.map((item)=>(
              <tr>
              <td>
               {item.id}
              </td>
              <td>
              {item.name}
              </td>
              <td>
              {item.age}
              </td>
              <td>      {item.designation}</td>
              <td>
               {item.salary}
              </td>
              <td>
                <div className="d-flex justify-content-evenly">
                 <Link to={`view/${item.id}`}>
                 <i class="fa-solid fa-eye text-success"></i>
                 </Link>
                 <Link to={`edit/${item.id}`}>
                    <i className="fa-solid fa-pen text-success"></i>
                    </Link>
                    <i onClick={()=>DeleteEmployee(item.id)} className="fa-solid fa-trash text-danger"></i>
                </div>

              </td>
            </tr>
            ))
           }
           
          </MDBTableBody>
        </MDBTable>
      </div>
    </div>
  );
}

export default Admin;
