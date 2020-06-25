import React,{useContext} from 'react'
import {profileContext} from '../contexts/profile.context'
import {BrowserRouter as Router,Route,Switch,Redirect} from 'react-router-dom'
import {Card,Grid,Profile} from 'tabler-react'
import NavBar from '../components/navbar/navbar.compnent'
import ProfilePage from './profile'
import LoginPage from './login'
import BrandPage from './brands'
import BrandCreatePage from './brand.create'

function MainPage() {
  const ProfileContext=useContext(profileContext);
  let auth=ProfileContext.events.checkAuth();
  console.log(auth)

  // <Site.Header href='/profile' imageURL={require('../logo.svg')} accountDropdown={{avatarURL:`${require('../samirk.jpg')}`, name:'Samir Kerimov', descroption:'Administrator',options:[
  //   {icon: "user", value: "Profile"},
  //   {icon: "settings", value: "Settings"},
  //   {badge: "6", icon: "mail", value: "Inbox"},
  //   {icon: "send", value: "Message"},
  //   {icon: "log-out", value: "Sign out"}
  // ]}}/>
   return (
    <main>
    <Card>
      <Grid.Row>
       <Grid.Col lg={3}>
       <Profile
       name='Samir Kerimov'
       backgroundURL={require("../bg.jpeg")}
       avatarURL={require("../samirk.jpg")}
       bio='Big belly rude boy, million dollar hustler. Unemployed.'
      >
      </Profile>
        <NavBar/>
       </Grid.Col>
       <Grid.Col lg={9}>
       <Router>
       <Switch>
       <Route path='/'exact  render={()=>(
         auth===true?(<ProfilePage/>):
         (<Redirect to='/login'/>)
       )}/>
       <Route path='/brands'exact component={BrandPage} />
       <Route path='/login'exact component={LoginPage} />
       <Route path='/brand/create' exact  component={BrandCreatePage}/>
       </Switch>
    </Router>
       </Grid.Col>
      </Grid.Row>
      </Card>
   </main>

   )
  
  
}

export default MainPage
// render={()=>(
//   ProfileContext.token.isAuthenticated ?
//   (<ProfilePage/>):
//   (<Redirect to='/login'/>)
// )} 