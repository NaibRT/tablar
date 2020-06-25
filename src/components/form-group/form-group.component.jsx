import React from 'react'
import {Form} from 'tabler-react'

function FormGroup(props) {
 return (
  <Form.Group isRequired={props.isRequired} label={props.label}>
  <Form.Input data-lang={props.lang} required={props.required} name={props.name} onChange={(e)=>{props.event(e)}} type={props.type} placeholder={props.ph} value={props.value} />
 </Form.Group>
 )
}

export default FormGroup
