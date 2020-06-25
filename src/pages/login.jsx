import React,{useContext} from 'react'
import {Card,Form,LoginPage} from 'tabler-react'
import {profileContext} from '../contexts/profile.context'
import {useHistory} from 'react-router-dom'

function Login() {
  const proContext=useContext(profileContext);
  const History=useHistory();
 function loginSubmit(e) {
  e.preventDefault();
   fetch('http://139.180.144.49/api/v1/az/auth/login',{
    method:'Post',
    body:new FormData(e.target)
   })
   .then(res=>{
     res.json()
     .then(r=>{
       console.log(r)
       proContext.events.getToken(r);
       sessionStorage.setItem('token',JSON.stringify(r))
       History.push('/')
     })
     .catch(e=>console.log(e))
   })
   .catch(err=>console.log(err))
 }
 return (
  <LoginPage onSubmit={(e)=>{loginSubmit(e)}}/>
 )
}

export default Login
