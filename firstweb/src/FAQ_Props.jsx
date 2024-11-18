//For Prompt part
import React,{useState} from 'react'
import './FAQ_Props.css'
import { questions } from './Data/FAQ_Questions'

export default function FAQ_Props() {
   let [currentId,setCurrentId]=useState(questions[0].id)
   let items=questions.map((itemsData,i)=>{
    let itemDetails={
      itemsData,
      currentId,
      setCurrentId
    }
    return(
      <FaqItems itemDetails={itemDetails} key={i}/>
    )
  })
  return (
    
    <div>
    <h1>Frequently Asked Questions</h1>
    <div className="faqouter">
      {items}
    </div>
    
    </div>
  )
}

function FaqItems(itemDetails){
   let {itemsData,currentId,setCurrentId}=itemDetails;
  return(
    <div className="FaqItems">
      <h2 onClick={()=>setCurrentId(itemsData.id)}>{itemsData.question}</h2>
      <p className={currentId===itemDetails.itemsData.id ? 'activeAns': ''}>
        {itemDetails.itemsData.answer}</p>
    </div>
  )
}






