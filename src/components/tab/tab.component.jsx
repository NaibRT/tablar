import React from 'react'
import './tab.component.css'
import TabLink from './tab-link.component'

function Tab(props) {
 return (
      <div className="card mt-3 tab-card">
        <div className="card-header tab-card-header">
          <ul className="nav nav-tabs card-header-tabs" id="myTab" role="tablist">
           {
             props.links.map(x=>{
               return <TabLink key={x.id} datatarget={`#${x.id}`} id={x.id} name={x.name} areaControl={x.areaControl}/>
             })
            }
          </ul>
        </div>
        <div id="tabsContent" className="tab-content">
        {props.children}
        </div>
        </div>
 )
}

export default Tab
