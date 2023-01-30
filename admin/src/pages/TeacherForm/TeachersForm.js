import React, { useEffect } from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'
import Navbar from '../../components/Navbar/Navbar'
import TextField from '@mui/material/TextField';

import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import {useState } from "react"
import "./TeachersForm.scss"
import axios from "axios";
import jwt_decode from "jwt-decode";
import MenuItem from '@mui/material/MenuItem';


const Subject = [
  {
    value: 'Physics',
    label: 'Physics',
  },
  {
    value: 'Math',
    label: 'Math',
  },
  {
    value: 'Chemistry',
    label: 'Chemistry',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Hindi',
    label: 'English',
  },

];
const Medium = [
  {
    value: 'English',
    label: 'English',
  },
  {
    value: 'Hindi',
    label: 'Hindi',
  },

];
const Gender = [
  {
    value: 'Physics',
    label: 'Physics',
  },
  {
    value: 'Math',
    label: 'Math',
  },
  {
    value: 'Chemistry',
    label: 'Chemistry',
  },
  {
    value: 'Biology',
    label: 'Biology',
  },
  {
    value: 'Hindi',
    label: 'English',
  },
 



]
const TeachersForm = () => {
  const [teacher_name,setName]=useState("");
  const [age,setAge]=useState("");
  const [mobile,setPhone]=useState("");
  const [email,setEmail]=useState("");
  const [gender,setGender]=useState("");
  const [city,setCity]=useState("");
  const [experience,setWorkExp]=useState("");
  const [salary,setSalary]=useState("");
 const [medium,setMedium]=useState("");
 const [subject_id,setSubject]=useState("");
 const [address,setAddress]=useState("");
 const [date,setDate]=useState("");
 
  let decode = jwt_decode(localStorage.getItem("auth_token"));
  let school_id = decode.result.school_id;

 useEffect(() => {
    axios.get(`http://localhost:8080/school/${school_id}/allSubject`)
    .then((data) => {
      console.log(data.data);
    }).catch((err) => {
       console.log(err);
    })
 },[])

  const submitHandler=(e)=>
  {
        e.preventDefault();
        axios.post('/user', {
          teacher_name,
          age,mobile,email,gender,gender,experience,salary,subject_id,city
        })
        .then( (res) => {
          console.log(res);
        })
        .catch( (err) => {
          console.log(err);
        });
  }
  return (
    <div className='teachers-container '>
    <Sidebar/>
    <div className='teachers'>
        <Navbar/>
        <div className='teachers-page page-container'>
          
        <div className="teacherForm-page-container">
            <div className='teacherForm-page-container-heading'>

              {/* header container */}
              <span >Add Teacher</span>
            </div>
            <form noValidate  onSubmit={submitHandler}>
            <div className='teachers-info-detail-container'>
           
             <div className='teachers-info-detail-student-container'>
              <div className='teachers-info-detail-student-container-subheading'>
                <span>Teacher Details</span>
              </div>
              <div className='teachers-info-detail-student-container-textfield'>
                

                {/* row one */}


                <div className='teachers-info-section '>
                <TextField sx={{ flex:1 }} label="Teacher Name" 
                required
                variant="outlined" 
                onChange={(e)=>setName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  label="Gender" variant="outlined" 
                 required
                onChange={(e)=>setGender(e.target.value)}/>
                 <TextField sx={{ flex:1 }} label="Email" variant="outlined" 
                  required
                type="email"
                onChange={(e)=>setEmail(e.target.value)}/>
             </div>


                {/* row two */}

                <div className='teachers-info-section '>
               
                 <TextField
                 sx={{ flex:1 }}
                 required
                 select
                 label="Subject"
                 onChange={(e)=>setSubject(e.target.value)}
               
                 helperText="Select Subject">
                {Subject.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
                 <TextField
                 sx={{ flex:1 }}
                 required
                 select
                 label="Medium"
                 onChange={(e)=>setMedium(e.target.value)}
                
                 helperText="Select Medium">
                {Medium.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
              <TextField sx={{ flex:1 }}
               required
               label="Work-Exp" variant="outlined" 
                onChange={(e)=>setWorkExp(e.target.value)}/>
        
               
                </div>


                {/* { third row} */}
                <div className='teachers-info-section '>
               
                 <TextField
                 sx={{ flex:1 }}
                 required
                 select
                 label="Gender"
                
                 onChange={(e)=>setGender(e.target.value)}
                 SelectProps={{
                 native: true,
                 }}
                 helperText="Select Gender">
                {Gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
              <TextField sx={{ flex:1 }}label="Salary" variant="outlined" 
                type="numner"
                required
                onChange={(e)=>setSalary(e.target.value)}/>
                
                <TextField sx={{ flex:1 }} label="City" variant="outlined" 
                type="numner"
                required
                helperText="Enter City"
                onChange={(e)=>setCity(e.target.value)}/>
                
        
               
                </div>

                {/* 4 th row */}
                <div className='teachers-info-section '>
                  
                <TextField sx={{ flex:1 }} label="Age" variant="outlined" 
                type="numner"
                required
                helperText="Enter Age"
                onChange={(e)=>setSalary(e.target.value)}/>
                
                <TextField sx={{ flex:1 }} 
                variant="outlined" 
                type="date"
                required
                helperText="Enter StartDate"
                onChange={(e)=>setDate(e.target.value)}/>
                <TextField sx={{ flex:1 }} label="Address" variant="outlined" 
                type="numner"
                required
                 helperText="Enter the Address"
                onChange={(e)=>setAddress(e.target.value)}/>
              
              
      
             
              </div>
              </div>
               </div>
           

            
             
           
               <div className='buttonSubmit'>
               <button>Submit</button>
                 </div>
         
           </div>
             </form>
               
             

          


          </div>
       
           
           
           
          
        </div>
    </div>

   </div>
  
  )
}

export default TeachersForm