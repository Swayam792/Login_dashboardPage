
import Sidebar from "../../components/Sidebar/Sidebar"
import Navbar from "../../components/Navbar/Navbar"
import "./Studentform.scss";
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { useState, useEffect } from 'react';
import Alert from '@mui/material/Alert';

// select medium for the selecti list
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

// select course for the drop down

const Course = [
  {
    value: 'foundation',
    label: 'Foundation',
  },
  {
    value: 'Jee-12',
    label: 'Jee-12',
  },
  {
    value: 'Jee-11',
    label: 'Jee-11',
  },
  {
    value: 'Neet-11',
    label: 'Neet-11',
  },
  {
    value: 'Neet-12',
    label: 'Neet-12',
  },
]

// select board from boardList
const Board = [
  {
    value: 'CBSE',
    label: 'CBSE',
  },
  {
    value: 'ICSE',
    label: 'ICSE',
  },
  {
    value: 'State Board',
    label: 'State Board',
  },
  
]

// choose  a class
const Batch = [

  {
    value: '12',
    label: '12',
  },
  {
    value: '11',
    label: '11',
  },
  {
    value: '10',
    label: '10',
  },
  {
    value: '9',
    label: '9',
  },
  {
    value: '8',
    label: '8',
  },
  {
    value: '7',
    label: '7',
  },
  {
    value: '6',
    label: '6',
  },
  {
    value: '5',
    label: '5',
  },

]

// gender 
const Gender = [
  {
    value: 'Male',
    label: 'Male'
  },
  {
    value: 'Female',
    label: 'Female'
  },
  {
    value: 'Not-disclose',
    label: 'Not-disclose'
  },
  {
    value: 'Binary',
    label: 'Binary'
  },



]
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const StudentForm = () => {
 const [firstInsallMentEta,setFirstInstallMentEta]=useState("");
 const [secondInsallMentEta,setSecondInstallMentEta]=useState("");
 const [thirdInsallMentEta,setThirdInstallMentEta]=useState("");

 const [firstInstallMentStatus,setFirstInstallMentStatus]=useState(0);
 const [secondInstallMentStatus,setSecondInstallMentStatus]=useState(0);
 const [thirdInstallMentStatus,setThirdInstallMentStatus]=useState(0);

 const [firstInstallMentAmount,setFirstInstallMentAmount]=useState("");
 const [secondInstallMentAmount,setSecondInstallMentAmount]=useState("");
 const [thirdInstallMentAmount,setThirdInstallMentAmount]=useState("");


  
  
  const [name, setName] = useState("");
  const [gender,setGender]=useState("");
  const [course,setCourse]=useState("");
  const [medium,setMedium]=useState("");
  const [date,setDate]=useState("");
  const [Class,setClass]=useState("");
  const [email,setEmail]=useState("");
  const [Fathername,setFatherName]=useState("");
  const [MotherName,setMotherName]=useState("");
  const [FatherProfession,setFatherProfession]=useState("");
  const [MotherProfession,setMotherProfession]=useState("");
 
  const [firstInstallment,setfirstInstallment]=useState(false);
  const [PrimaryNumber,setPrimaryNumber]=useState("");
  const [AlternateNumber,setAlternateNumber]=useState("");
  const [AadharNumber,setAadharNumber]=useState("");
  const [Address,setAddress]=useState("");
  const [board,setBoard]=useState("");



  // error handler

  const [nameError,setNameError]=useState(false);
  const [mediumError,setMediumError]=useState(false);
  const [courseError,setCourseError]=useState(false);
  const [boardError,setBoardError]=useState(false);
  const [classError,setClassError]=useState(false);
  const [fatherNameError,setFahterNameError]=useState(false);
  const [motherNameError,setMohterNameError]=useState(false);
  const [fatherProfessionError,setFatherProfessionError]=useState(false);
  const [motherProfessionError,setmotherProfessionError]=useState(false);
  const [altNumberError,setAltNumberError]=useState(false);
  const [emailError,setEmailError]=useState(false);
  const [genderError,setGenderError]=useState(false);
  const [primaryError,setPrimaryError]=useState(false);
  const [dateError,setDateError]=useState(false);
  const [aadhaError,setAadharError]=useState(false);
  const [addressError,setAddressError]=useState(false);
  const [oneError,setOneError]=useState(false);
  const [twoError,setTwoError]=useState(false);
  const [thirdError,setThirdError]=useState(false);
  


  // fee detals
 
 const handleChange1=(e)=>
 {
     setFirstInstallMentEta(format);
     if(e.target.value===false) setFirstInstallMentStatus(0)
     else setFirstInstallMentStatus(1)
 }
 const handleChange2=(e)=>
 {   
  setSecondInstallMentEta(format);
  if(e.target.value===false) setSecondInstallMentStatus(0)
  else setSecondInstallMentStatus(1)
    
 }
 const handleChange3=(e)=>
 {
  setThirdInstallMentEta(format);
  if(e.target.value===false) setThirdInstallMentStatus(0)
  else setThirdInstallMentStatus(1)
 }

  
  

  

  const [alertMessage,setAlertMessage]=useState(false);
  
  const submitHandler = (e) => {
    e.preventDefault();
    setNameError(false);
    setMediumError(false);
    setAltNumberError(false);
    setBoardError(false);
    setClassError(false);
    setCourseError(false);
    setFahterNameError(false);
    setMohterNameError(false);
    setFatherProfessionError(false);
    setmotherProfessionError(false);
    setPrimaryError(false);
    setAltNumberError(false);
    setDateError(false);
    setAddressError(false);
    setOneError(false);
    setTwoError(false);
    setThirdError(false);
    setGenderError(false);
    setEmailError(false);
  
 
  
  
     if(name=='') setNameError(true); 
     if(medium=='') setMediumError(true);
     if(Class=='') setClassError(true);
     if(course=='') setCourseError(true);
     if(gender=='') setGenderError(true);
     if(email=='') setEmailError(true);
     if(Fathername=='') setFahterNameError(true);
     if(MotherName=='') setMohterNameError(true);
     if(FatherProfession=='') setFatherProfessionError(true);
     if(MotherProfession=='') setmotherProfessionError(true);
     if(AlternateNumber=='') setAltNumberError(true);
     if(PrimaryNumber=='') setPrimaryError(true);
     if(date=='') setDateError(true);
     if(Address=='') setAddressError(true);
     if(AadharNumber=='') setAadharError(true);
     if(board=='') setBoardError(true);
     if(firstInstallMentAmount=='') setOneError(true);
     if(secondInstallMentAmount=='') setTwoError(true);
     if(thirdInstallMentAmount=='') setThirdError(true);

     if(name && medium && Class && course && email && Fathername && MotherName && FatherProfession && MotherProfession && AlternateNumber && PrimaryNumber && date && Address && board && firstInstallMentAmount && secondInstallMentAmount && thirdInstallMentAmount )
     {
      alertMessage("Submitted");
         
     }
     
   

  
  

  }
  // second funtion of 
  // first installment button handler funtion
  const firstInstallMentClicked=(e)=>
  {
    e.preventDefault();
    setfirstInstallment(e.target.value)
    console.log("button is clicked");
    console.log(firstInstallment);
  }

  return (
    <div className='studentForm-container '>
      <Sidebar />

      <div className='studentForm'>
        <Navbar />
        <div className='studentForm-page page-container'>
          <div className="studentForm-page-container">
            <div className='student-page-container-heading'>

              {/* header container */}
              <span >Add Student</span>
            </div>
            <form  noValidate onSubmit={submitHandler}>
            <div className='student-info-detail-container'>
           
             <div className='student-info-detail-student-container'>
              <div className='student-info-detail-student-container-subheading'>
                <span>Student Details</span>
              </div>
              <div className='student-info-detail-student-container-textfield'>
               

                {/* row one info */}

              <div className='student-info-section '>
                <TextField  error={nameError}sx={{ flex:1 }} label="Student Name"  required helperText="Enter Student Name" onChange={(e)=>setName(e.targetvalue)}/>
            <TextField sx={{ flex:1 }}  error={genderError}  select label="Gender" required    onChange={(e)=>setGender(e.target.value)}   helperText="Select Gender">
                
              {Gender.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
                 <TextField sx={{ flex:1 }}  error={courseError} select label="Course" required    onChange={(e)=>setCourse(e.target.value)}  helperText="Select Course">
               {Course.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
        
               
             </div>


                <div className='student-info-section '>
                <TextField   sx={{ flex:1 }} error={dateError}variant="outlined"    helperText="Select Date Of Birth"  type="date"  onChange={(e)=>setDate(e.target.value)}/>
                <TextField  sx={{ flex:1 }}  error={classError} select  label="Class"    required    onChange={(e)=>setClass(e.target.value)}  helperText="Select Class">
                {Batch.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
                 <TextField  sx={{ flex:1 }} error={mediumError}  required   select  helperText="Select Medium"  label="Medium"  onChange={(e)=>setMedium(e.target.value)}>
                {Medium.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
        
               
                </div>
                <div className='student-info-section '>
                <TextField sx={{ flex:1 }}   error={addressError}   helperText="Enter Address" label="Address"  type="text"  required  onChange={(e)=>setAddress(e.target.value)}/>
                <TextField sx={{ flex:1 }}  error={aadhaError}  label="Aadhar Number"      type="text"          helperText="Enter Aadhar Number"  required
                onChange={(e)=>setAadharNumber(e.target.value)}/>
                <TextField  sx={{ flex:1 }} error={boardError}  required    select  label="Board"  helperText="Select Board"    onChange={(e)=>setBoard(e.target.value)} >
                {Board.map((option) => (
                <MenuItem key={option.value} value={option.value}>
               {option.label}
               </MenuItem>
               ))}
              </TextField>
                
        
               
                </div>
              </div>
               </div>
             <div className='student-info-detail-parent-container'> 
             <div className='student-info-detail-parent-container-subheading'>
              <span>Parent Details</span>
             </div>
              <div className='student-info-detail-parent-container-textfield'>
              <div className='parent-info-section '>
                <TextField sx={{ flex:1 }} error={fatherNameError} label="Father Name"    required  helperText="Father Name"   onChange={(e)=>setFatherName(e.target.value)}/>
                 <TextField sx={{ flex:1 }}  error={fatherProfessionError} label="Father profession"   helperText="Father Profession"   required  onChange={(e)=>setFatherProfession(e.target.value)}/>
                <TextField sx={{ flex:1 }} error={primaryError}  label="Primary Number"  required helperText="Primary Number"   onChange={(e)=>setPrimaryNumber(e.target.value)}/>
                  
             </div>


                <div className='parent-info-section '>
                <TextField sx={{ flex:1 }}  error={motherNameError}label="Mother Name"   required  helperText="Mohter Name"    onChange={(e)=>setMotherName(e.target.value)}/>
                <TextField sx={{ flex:1 }}  error={motherProfessionError} label="Mother profession"   helperText="Mother Profession"   required onChange={(e)=>setMotherProfession(e.target.value)}/>
                <TextField sx={{ flex:1 }}  error={altNumberError} label="Alternate Number"  required  helperText="Alternate Number"  onChange={(e)=>setAlternateNumber(e.target.value)}/>
                  
                   
              </div>


                <div className='parent-info-section '>
                <TextField sx={{ flex:0.317}}  error={emailError}label="Email"  required  type="email"   helperText="Enter Parent Email"  onChange={(e)=>setEmail(e.target.value)}/>
                   
                </div>

              </div>
             </div>
             <div className='student-info-detail-fee-container'>
             <div className='student-info-detail-fee-container-subheading'>
             <span>Fee Details</span>
             </div>
              <div className='student-info-detail-fee-container-textfield'>
              <div className='fee-info-section section'>
                <div className='fee-info-section-installment'>
                <TextField 
                sx={{
                  height:"7vh"
                }}
                error={oneError}
                required
                onChange={(e)=>setFirstInstallMentAmount(e.target.value)}
                id="outlined-basic" label="1st InstallMent" variant="outlined" />
                <div className="fee-info-section-installment-checkbox-date">
                <Checkbox {...label}
                 checked={firstInstallMentStatus}
                 onChange={()=>handleChange1()}
                 color="success"
                 />
                 {!firstInstallMentStatus &&   
                  <TextField 
                  sx={{
                    height:"5vh"
                  }}
               variant="outlined" 
               type="date"
               required
              
                helperText="Select a Date"
                onChange={(e)=>setFirstInstallMentEta(e.target.value)}/>}
                </div>
                
              
                </div>
                <div className='fee-info-section-installment'>
                <TextField
               error={twoError}
                 sx={{
                  height:"7vh"
                 
                }}
                onChange={(e)=>setSecondInstallMentAmount(e.target.value)}
                 id="outlined-basic" label="2nd 
                
                InstallMent"
               required
                 variant="outlined" />
                 <div className="fee-info-section-installment-checkbox-date">
                 <Checkbox {...label}
                 checked={setSecondInstallMentStatus}
                 required
                 onChange={()=>handleChange2()}
                 color="success"

                 />
                 {!secondInstallMentStatus &&
                 
                 <TextField  
                 sx={{
                  height:"5vh"
                }}
                  variant="outlined" 
               
                  type="date"
                  required
                  helperText="Select a Date"
                  onChange={(e)=>setSecondInstallMentEta(e.target)}/>}
                 </div>
               
              
                </div>
                <div className='fee-info-section-installment'>
                <TextField 
                   error={thirdError}
                sx={{
                  height:"7vh"
                }}
                onChange={(e)=>setThirdInstallMentAmount(e.target.value)}
                required
                id="outlined-basic" label="3rd InstallMent" variant="outlined" />
                <div className="fee-info-section-installment-checkbox-date">
                <Checkbox  
                     checked={thirdInstallMentStatus}
                     onChange={()=>handleChange3()}
                     color="success"
                  
               
                {...label} 
                 inputProps={{ 'aria-label': 'controlled' }}
                 />
                 {!thirdInstallMentStatus &&
                 
                 <TextField  variant="outlined" 
             
                  type="date"
                  helperText="Select a Date"
                  onChange={(e)=>setThirdInstallMentEta(e.target.value)}/>}
                </div>
               
              
                </div>
            
            
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

export default StudentForm