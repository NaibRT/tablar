import React from 'react'
import {Form} from 'tabler-react'

function SelectBox(props) {
  let optionList=''; 
  if(props.options!==undefined){
    optionList= props.options.map((x,i)=>{
      return <option key={i} value={x.value}>{x.name}</option>
     })
  }
 return (
  <Form.Group isRequired={props.isRequired} placeholder={props.placeholder} label={props.label}>
  <Form.Select onChange={props.event} name={props.name}>
    {
      optionList
    }
  </Form.Select>
 </Form.Group>
 )
}

export default SelectBox
