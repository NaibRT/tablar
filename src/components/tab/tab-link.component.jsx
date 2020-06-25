import React from 'react'

function TabLink(props) {
// function tabLinkEvent(e){  
//       e.target.classList.toggle('active')
//       e.target.classList.toggle('show')
//       document.querySelectorAll('.nav-link').forEach(x=>{

//       })
// }

 return (
//  <li className="nav-item">
//   <a  className="nav-link" href='//' id={props.id} data-target={props.datatarget} data-toggle="tab" role="tab" aria-controls={props.areaControl} aria-selected={props.selected}>{props.name}</a>
// </li>

<li className="nav-item"><a href="" data-target={props.datatarget} data-toggle="tab" className="nav-link small text-uppercase">{props.name}</a></li>

 )
}

export default TabLink
