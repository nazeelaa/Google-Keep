import React, { Component } from 'react'
import TextField from '@mui/material/TextField';
import { Button, Checkbox, getModalUtilityClass } from '@mui/material';
import { login } from '../../Service/userService';
import { useHistory } from 'react-router-dom';

import './Signin.css'

const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
//const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
// const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;

function Signin() { 
        let history=useHistory()
        const [pwdhelper,setpwdhelper]=React.useState("")
        const [pwderror,setpwderror]=React.useState(false)
        const [emailhelper,setemailhelper]=React.useState("")
        const [emailerror,setemailerror]=React.useState(false)
        const [emailpass,setemail]=React.useState({email:"",password:""})
    console.log(emailpass.email)
        function takemailid(event){
            setemail({...emailpass,email:event.target.value})
            
        }
        function takepwd(event){
            setemail({...emailpass,password:event.target.value})

        }
        function pushFunc(){
            history.push("/signup")

        }

        function onsubmit(){

            if(emailpass.email==="" && emailpass.password==="")
            {
                setemailerror(true)
                setemailhelper("please enter the correct email")
    
                setpwderror(true)
                setpwdhelper("please enter correct password")
    
            }
    
            let emailTest=emailRegex.test(emailpass.email)
            let pwdTest=passwordRegex.test(emailpass.password)
            console.log(emailTest)
            console.log(pwdTest)
            if(emailTest)
            {
                setemailerror(false)
                setemailhelper("")
                
            }
            else
             {
                setemailerror(true)
                setemailhelper("please enter the correct email")
            }
        
            if(pwdTest)
            {
                setpwderror(false)
                setpwdhelper("")
            }
            else
            {
                setpwderror(true)
                setpwdhelper("please enter correct password")
            }
            if(emailTest===true && pwdTest===true)
            {
                login(emailpass).then((response)=>{
                    console.log(response)
                    localStorage.setItem("token",response.data.id)
                    history.push("/dashboard")
                    
                }).catch((error)=>{
                    console.log(error)
                    
                })
            }
            }
       
        return (                      
            <div className='maincontainer'>
                <div class="google">
                    <p class="title1">G</p>
                    <p class="title2">o</p>
                    <p class="title3">o</p>
                    <p class="title4">g</p>
                    <p class="title5">l</p>
                    <p class="title6">e</p>
                </div>
                <div class='signfont'><h3>Sign in</h3></div>
                <div class="googletxt">
                    <h5>Use your Google Account </h5>
                </div>
                <div className='emailbox'>
                <TextField
          error={emailerror}
          helperText={emailhelper}
          id="outlined-error"
          label="Email"
          
          onChange={takemailid}
        />
        <TextField
          error={pwderror}
          helperText={pwdhelper}
          id="outlined-error"
          label="password"
          
          onChange={takepwd}
        /></div>
                 <div className='emailtxt'><p>Forget email?</p></div>
                 <div className='text1'><h6>Not your computer? Use Guest mode to sign in privately</h6></div>
                 <div className='bluetext'><h5>Learn more</h5></div>
                 <div className='createacc'>
                     <div className='ca'><h5 onClick={pushFunc}>Create account</h5></div>
                     <div className='btn'><Button variant="contained" onClick={onsubmit}  size="large">Next</Button></div>
                 </div>
            </div>
        )
        }

        
export default Signin
