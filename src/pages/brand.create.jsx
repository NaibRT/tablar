import React,{useState,useContext} from 'react'
import FromGroup from '../components/form-group/form-group.component'
import SelectBox from '../components/selectbox/selectbox.component'
import {FormCard,Table,Button,Grid,Container,Card} from 'tabler-react'
import UrlGenerator from '../services/url-generater';
import TabPane from '../components/tab/tab-pane.component'
import Tab from '../components/tab/tab.component'
import {profileContext} from '../contexts/profile.context'
import axios from 'axios'
import { Link } from 'react-router-dom';



function BandCreate() {
  const ProfileContext=useContext(profileContext);
 const [brand,setBrand]=useState({
  status:1
 });

 function checkboxEvent(e){
   let value=e.target.value;
   let lang=e.target.closest('.tab-pane').getAttribute('id');
   let newBrand={...brand};
   newBrand[`${lang}`]={'brand_name':value};
   setBrand(newBrand);
 }
let submit=(e)=>{
   e.preventDefault();
   let token=JSON.parse(ProfileContext.events.getToken());
   console.log(token)
   let url=UrlGenerator('az','brands');
    fetch(url,{
    method:'POST',
    body:brand,
    headers:{
      Authorization:`${token.token_type} ${token.access_token}`,
      'Content-Type': 'application/json;charset=utf-8'
    }
   }).then( (res)=>{
      res.json()
      .then(r=>console.log(r))
      .catch(e=>console.log(e))
   })
   .catch(err=>console.log(err))
 }

  console.log(brand)
 return (
  
  <Card>
       <Tab links={[
         {id:'en',name:'English',areaControl:'en-area'},
         {id:'az',name:'Azerbaijan',areaControl:'aze-area'},
         {id:'ru',name:'Russia',areaControl:'ru-area'}
       ]}
       >
        <TabPane id='en' arialabel='en'>
        <FromGroup event={checkboxEvent} lang='en' isRequired='isRequired' name='brand_name' required='required' placeholder='brand name' type='text'  />
        </TabPane>
        <TabPane id='az' arialabel='aze'>
        <FromGroup event={checkboxEvent} lang='az' isRequired='isRequired' name='brand_name' required='required' placeholder='brand name' type='text'  />
        </TabPane>
       </Tab>
       <Card.Footer>
        <Link>
        <Button color='primary' onClick={submit}>Submit</Button>
        </Link>
       </Card.Footer>
  </Card>

 )
}

export default BandCreate
