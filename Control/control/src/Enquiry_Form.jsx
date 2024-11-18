// The three dots (...) in JavaScript is known as the spread operator, and it's used to make shallow copies of JavaScript objects

import React, { useState } from 'react';
import './Control_Component.css';
import {Col,Container,Form,Row,Table} from 'react-bootstrap'; 

export default function App3() {
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
        let oldUserData= [...userData,currentUserFormdata]// Old Array+ New Array Elements
        console.log(oldUserData)
        setUserData(oldUserData)
        event.preventDefault();
      }
 
  return (
   <Container fluid>
    <Container>
   <Row>
      <Col className="text-center py-5 ">
      <h1 className="text-danger">Enquiry Now</h1>
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
        <input type="text" onChange={getValue}value={formData.uphone} name="uphone" className="form-control"/>
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
      </Col>
     </Row>
     </Container>
     </Container>
 
  );
}


