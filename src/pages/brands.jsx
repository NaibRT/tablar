import React,{useContext,useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import {Card,Table,Button,Grid,Container} from 'tabler-react'
import {profileContext} from '../contexts/profile.context'
import axios from 'axios'


function Brands() {
 const ProfileContext=useContext(profileContext);
 useEffect(()=>{
   console.log('brandget')
    axios.get('http://139.180.144.49/api/v1/az/brands')
    .then((res) => {
      console.log(res.data)
    })
    .catch(err=>console.log(err))
 })
 return (
 <Container>
  <Grid.Row>
  <Grid.Col>
  <Card>
  <Card.Header>
  <NavLink to='/brand/create' color='primary'>
<Button  color='primary'>Create</Button>
</NavLink>
  </Card.Header>
  <Table cards='true'>
  <Table.Header>
    <Table.ColHeader>ID</Table.ColHeader>
    <Table.ColHeader>Name</Table.ColHeader>
    <Table.ColHeader>Action</Table.ColHeader>
  </Table.Header>
  <Table.Body>
    <Table.Row>
      <Table.Col>1</Table.Col>
      <Table.Col>Jon</Table.Col>
      <Table.Col>
        <Button color="primary">Edit</Button>
      </Table.Col>
    </Table.Row>
  </Table.Body>
</Table>
</Card>
  </Grid.Col>
  </Grid.Row>
 </Container>
 )
}

export default Brands
