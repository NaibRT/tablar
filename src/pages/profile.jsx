import React,{useEffect,useContext} from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Profile from '../components/profile/profile.component'
import UrlGenerator from '../services/url-generater'
import {profileContext} from '../contexts/profile.context'
import LoginPage from '../pages/login'
import BrandPage from '../pages/brands'

function ProfilePage() {
  const ProfileContext=useContext(profileContext)
  // useEffect(()=>{
  //   let url=UrlGenerator('az','auth/me');
  //   fetch(url,{
  //     method:'Post',
  //     headers:{
  //     'Authorization':`${ProfileContext.token.token_type} ${ProfileContext.token.access_token}`
  //     }})
  //   .then(res=>{
  //     res.json()
  //     .then(r=>console.log(r))
  //     .catch(e=>{
  //      console.log(e)
  //     })
  //   })
  //   .catch(err=>{
  //     console.log(err)
  //   })
  // },[])
  console.log(ProfileContext)
  
 return (
   <Profile/>
 )
}

export default ProfilePage
