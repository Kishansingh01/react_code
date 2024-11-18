// The three dots (...) in JavaScript is known as the spread operator, and it's used to make shallow copies of JavaScript objects

import React, { useState } from 'react';
import './Control_Component.css';
import 'react-toastify/dist/ReactToastify.css';
import {Col,Container,Form,Row,Table} from 'react-bootstrap'; 
import { toast,ToastContainer } from 'react-toastify';

export default function Update() {
 let [formData,setFormData]=useState(
      {
        uname:'',
        uemail:'',
        uphone:'',
        umessage:'',
        index:''
      } )
      let [userData,setUserData]=useState([])

      let getValue=(event)=>{
           let oldData={...formData}
           let inputName= event.target.name; //uname
           let inputValue= event.target.value; //ws
           oldData[inputName]= inputValue;
           setFormData(oldData)  
      }
      let handleSubmit=(event)=>{

        let currentUserFormdata={
          uname:formData.uname,
          uemail:formData.uemail,
          uphone:formData.uphone,
          umessage:formData.umessage

        }

        if(formData.index===""){
        let checkFilterUser=userData.filter((v)=>v.uemail==formData.uemail || v.uphone==formData.uphone)
        if(checkFilterUser.length==1){
            // alert("Email or Phone Already exist")
            toast.error("Email or Phone Already exist") // Here it is taking the toasted things
        }
        else{

        let oldUserData= [...userData,currentUserFormdata]// Old Array+ New Array Elements
        console.log(oldUserData)
        setUserData(oldUserData)
        setFormData(
          {
            uname:'',
            uemail:'',  // To make blank the data after submitting.
            uphone:'',
            umessage:'',
            index:''
          }
         )
        } 
        }
        else{
              let editIndex=formData.index;
              let oldData=userData;

              let checkFilterUser=userData.filter((v,i)=>(v.uemail==formData.uemail ||
                v.uphone==formData.uphone)&& i!=editIndex) // check updation after same phone or email has or not

                if(checkFilterUser.length==0){


              oldData[editIndex]['uname']=formData.uname
              oldData[editIndex]['uemail']=formData.uemail  // for updating part in input and table.
              oldData[editIndex]['uphone']=formData.uphone 
              oldData[editIndex]['umessage']=formData.umessage
             
               setUserData(oldData)
               setFormData(
                {
                    uname:'',
                    uemail:'',
                    uphone:'',
                    umessage:'',
                    index:''
                }
               )
            }
            else{
                toast.error("Email or Phone already Exists")
            }
        }
        event.preventDefault();
      }
  
    let deleteRow=(indexNumber)=>{

    let filterDataafterDelete=userData.filter((v,i)=> i!=indexNumber) //FILTer makes new data from the array.
    toast.success("Data deleted successfully") // here it is taking the toasted
    setUserData(filterDataafterDelete)
  }
  let editRow=(indexNumber)=>{
   

     let editData= userData.filter((v,i)=> i==indexNumber)[0]
     console.log(editData)
     editData['index']=indexNumber;
     console.log(editData)
     setFormData(editData)
  }
  

  return (
   <Container fluid>
    <ToastContainer/>
    <Container>
   <Row>
      <Col className="text-center py-5 ">
      <h1 className="text-danger">Enquiry Now7</h1>
      </Col>
    </Row>  
   <Row>
    <Col lg={5}>
    {userData.length} 
    <form onSubmit={handleSubmit}>
       <div className="pb-3">
            <label className="form-label">Name</label>
            <input type="text" onChange={getValue} value={formData.uname} name="uname" className="form-control"/>
       </div>

       <div className="pb-3">
            <label className="form-label">Email</label>
            <input type="email" onChange={getValue} value={formData.uemail} name="uemail" className="form-control"/>
       </div>

       <div>
        <label className="form-label">Phone</label>
        <input type="number" onChange={getValue}value={formData.uphone} name="uphone" className="form-control"/>
       </div>

       <div>
        <label  className="form-label">Message</label>
        <textarea onChange={getValue} className="form-control" value={formData.umessage} name="umessage" id="" row="3"></textarea>
       </div>
              <button className="btn btn-primary">
                {
                  formData.index!=="" ? 'Update' : 'save'
                } 
              </button>
     </form>
     </Col>
      <Col lg={7}>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Message</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {userData.length>=1 ?
        userData.map((obj,i)=>{
          return(
            <tr key={i}>
            <td>{i+1}</td>
            <td>{obj.uname}</td>
            <td>{obj.uemail}</td>
            <td>{obj.uphone}</td>
            <td>{obj.umessage}</td>
            <td>
              <button onClick={()=>deleteRow(i)}>Delete5</button>
              <button onClick={()=>editRow(i)}>Update</button>
            </td>
          </tr>
          )
        })
       
        :
        <tr>
          <td colSpan={6}>No Data found</td>
        </tr>
        }
         
      </tbody>
    </Table>
      </Col>
     </Row>
     </Container>
     </Container>
 
  );
}




