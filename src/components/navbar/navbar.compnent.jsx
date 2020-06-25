import React from 'react'
import {Nav,Grid,Container,Card} from 'tabler-react'
import "tabler-react/dist/Tabler.css";
import './navbar.css'
function Navbar() {
 return (
   <Card>
  <Grid.Row>
 <Grid.Col>
 <div className='aside-nav-container'>
 <Nav.Item value='Profile' to='/' icon="user"/>
 <Nav.Item to="/brands" value='Brands'/>
 <Nav.Item to="/categories" value='Categories'/>
 <Nav.Item to="/users" value='Users'/>
 <Nav.Item to="/languages" value='Languages'/>
 </div>
   </Grid.Col>
   </Grid.Row>
   </Card>
 )
}

export default Navbar
