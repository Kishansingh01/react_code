import React,{useState} from 'react'

import './Tabbing.css';
import { tabs } from './Data/Tabbing_Data';
 function Tabbing() {
  let [activeTabs,setactiveTabs]=useState(0)
  let [activeContent,setActiveContent]=useState(tabs[0])
  let changeData=(index)=>{
       setactiveTabs(index)
       setActiveContent(tabs[index])
  }
  return (
    <div className="App">
      <div className="tabsOuter">
      <h1 style={{textAlign:'center'}} >Law Prep Vision Mission and Values</h1>
      <ul>
        {tabs.map((tabsItems,index)=>{
          return(
            <li>
            <button onClick={()=>changeData(index)}className={activeTabs==index ? 'activeButton' :''}>{tabsItems.title}</button>
            </li>
          )
        })}
      </ul>
      {activeContent!==undefined ? //Sometrimes it shows the error thats why we use the condition.
      <p>{activeContent.description}</p>
      :
      ''
 }
      </div>
    </div>
  )
}
export default Tabbing
