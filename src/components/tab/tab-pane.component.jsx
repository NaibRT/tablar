import React from 'react'

function TabPane(props) {
 return (
  <div className="tab-pane fade p-3" id={props.id}  role="tabpanel" aria-labelledby={props.arialabel}>
  {props.children}             
  </div>
 )
}

export default TabPane
