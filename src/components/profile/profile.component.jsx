import React from 'react'
import {Grid,Container,Profile, Card,Form,Site} from 'tabler-react'
import Input from '../form-group/form-group.component'

function ProfileCompnent() {
 return (

           <Card>
             <Card.Header>
               <Card.Title></Card.Title>
             </Card.Header>
             <Card.Body>
               <Grid.Row>
                 <Grid.Col>
                   <form>
                    <Input value='Naib Tahmazli' type='text' ph='fill name' label='Name' name='name' isRequired='isRequired' required='required'/>
                    <Input type='radio'/>
                    <input type='submit' value='Send'/>
                   </form>
                 </Grid.Col>
               </Grid.Row>
             </Card.Body>
           </Card>
 )
}

export default ProfileCompnent
