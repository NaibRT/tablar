import React,{createContext,useState,useEffect} from 'react'
const profileContext=createContext();


function Profile(props) {
  const [categories,setCategories]=useState({})
  
  const Authenticated={isAuthenticated:false};
  const [token,setToken]=useState({});

  useEffect(()=>{
    console.log('rendered')
  })

  const getToken=(token)=> {
    setToken({
      ...token,
      isAuthenticated:true
    })
  }
   const checkAuth=()=>{
     let token=sessionStorage.getItem('token');
     if(token!==null){
       return true
     }
     return false
   }
  
    return (
      <profileContext.Provider value={{
                                      token:token,
                                      events:{
                                        getToken:getToken,
                                        checkAuth:checkAuth
                                      }
                                    }}>
        {props.children}
      </profileContext.Provider>
     )
  }

export default Profile
export {profileContext}
