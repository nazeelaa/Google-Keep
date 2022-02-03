import React from 'react'
import TextField from '@mui/material/TextField';
import { Button,  } from '@mui/material';
import { login,logup } from '../../Service/userService';
import { useHistory } from 'react-router-dom';

import './Signup.css'
const emailRegex = /^[a-zA-Z]+[a-zA-Z0-9]*[- . + _]?[a-zA-Z0-9]+[@]{1}[a-z0-9]+[.]{1}[a-z]+[.]?[a-z]+$/
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const firstNameRegex = /[A-Z]{1}[a-z]{2,}/;
const lastNameRegex = /[A-Z]{1}[a-z]{2,}/;

function Signup(){ 

    let history=useHistory()
    const [fnamehelper,setfnamehelper]=React.useState("")
    const [fnameerror,setfnameerror]=React.useState(false)
    const [lnamehelper,setlnamehelper]=React.useState("")
    const [lnameerror,setlnamerror]=React.useState(false)
    const [unamehelper,setunamehelper]=React.useState("")
    const [unameerror,setunamerror]=React.useState(false)
    const [pwdhelper,setpwdhelper]=React.useState("")
    const [pwderror,setpwderror]=React.useState(false)

    const [namepass,setname]=React.useState({firstName:"",lastName:"",email:"",password:"",service:"advance"})
    function takefname(event){
        setname({...namepass,firstName:event.target.value})
        
    }
    function takelname(event){
        setname({...namepass,lastName:event.target.value})

    }
    function takeuname(event){
        setname({...namepass,email:event.target.value})
        
    }
    function takepwd(event){
        setname({...namepass,password:event.target.value})
        
    }
    function pushFunc(){
        history.push("/")
    }

    function onsubmit(){
        if(namepass.firstName==="" && namepass.lastName==="" && namepass.email==="" && namepass.password==="")
        {
            setfnameerror(true)
            setfnamehelper("please enter correct First name")

            setlnamerror(true)
            setlnamehelper("please enter the correct last name")

            setunamerror(true)
            setunamehelper("please enter the correct email")

            setpwderror(true)
            setpwdhelper("please enter the correct Password")
        }
        let firstnameTest=firstNameRegex.test(namepass.firstName)
        let lastnameTest=lastNameRegex.test(namepass.lastName)
        let usernameTest=emailRegex.test(namepass.email)
        let pwdTest=passwordRegex.test(namepass.password)
    
            console.log(firstnameTest)
            console.log(lastnameTest)
            console.log(usernameTest)
            console.log(pwdTest)
        if(firstnameTest)
        { 
            setfnameerror(false)
            setfnamehelper("")
            
        }
        else 
        {
            setfnameerror(true)
            setfnamehelper("please enter the correct First name")
        }
        if(lastnameTest)
        { 
            setlnamerror(false)
            setlnamehelper("")
            
        }
        else 
        {
            setlnamerror(true)
            setlnamehelper("please enter the correct last name")
        }
        if(usernameTest)
        { 
            setunamerror(false)
            setunamehelper("")
            
        }
        else 
        {
            setunamerror(true)
            setunamehelper("please enter the correct last name")
        }

        if(pwdTest)
        { 
            setpwderror(false)
            setpwdhelper("")
            
        }
        else 
        {
            setpwderror(true)
            setpwdhelper("please enter the correct password")
        }
        //if(firstnameTest===true && lastnameTest===true && usernameTest===true && pwdTest===true)
        //{
            logup(namepass).then((response)=>{

            console.log(response)
            localStorage.setItem("token",response.data.id)
            
            

            }).catch((error)=>{
                console.log(error)
            })
        //}
    }

            
        return(
            
          <div className='supercontainer'>
              <div className='signupcontainer'>
              <div className='google'>
                <p className='Title1'>G</p>
                <p className='Title2'>o</p>
                <p className='Title3'>o</p>
                <p className='Title4'>g</p>
                <p className='Title5'>l</p>
                <p className='Title6'>e</p></div>
                <div className='createaccount'><h3>Create your Google Account</h3></div>
                 <div className='fandlbox'>
                 <TextField id="outlined-basic" label="First name" variant="outlined" size="small" error={fnameerror}
                  helperText={fnamehelper} onChange={takefname} />

                 <TextField id="outlined-basic" label="Last name" variant="outlined" size="small" error={lnameerror}
                  helperText={lnamehelper} onChange={takelname}/>
                 </div>
                 <div className='emailbox'>
                 <TextField fullWidth label="Username" id="fullWidth" size="small" error={unameerror}
                  helperText={unamehelper} onChange={takeuname}/></div>
                 <div className='emailtxt'><p>you can use letters,numbers & periods</p></div>

                 <div className='emailtext'></div>
                     <div class="emailblue"> <h5>Use my current email address instead</h5></div>
                 <div className='fandlbox'>
                 <TextField id="outlined-basic" label="Password" variant="outlined" size="small" error={pwderror}
                  helperText={pwdhelper} onChange={takepwd} />
                 <TextField id="outlined-basic" label="Confirm" variant="outlined" size="small" error={pwderror}
                  helperText={pwdhelper} onChange={takepwd} /></div>
                 <div className='text'>use 8 or more characters with a mix of letters, numbers &
                 symbols</div>
                 <div class="lastcontainer">
                     <h5 onClick={pushFunc}>Sign in instead</h5>
                     <Button variant="contained" onClick={onsubmit} size="large">Next</Button>                 
                     </div>  

              </div>
              <div className='containerImg'>
              <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt='' />

               <div className='imgtxt'>One account. All of Google<br></br> working for you</div>
                  
                   
              </div>
              </div>

         
                
                 

             

        )
    }


export default Signup
