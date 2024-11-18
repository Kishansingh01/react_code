import './FAQ.css'
import { questions } from './Data/FAQ_Questions'
import {useState} from 'react'

 function FAQ() {
  let[showAns,setShowAns]=useState(questions[0].id)
  let n=["Ram","Ram","Sita","Ram"]
  return (
    <div className="App">
        <div>
          <ul>
            {n.map((items,i)=>{
              return(
                <li key={i}>{items}</li>
              )
            })

            }
          </ul>
        <h1 className="font-bold text-3xl m-3 text-center">Frequently Asked Questions(FAQs)</h1>
        <div className="faqOuter">
             {questions.map((faqItems,i)=>{
              return(
                <div className="faqItems"key={faqItems.id}>
                <h2 onClick={()=>setShowAns(faqItems.id)}>{faqItems.question }</h2>
                <p className={showAns==faqItems.id ? 'activeAns':''}>{faqItems.answer} </p>
              </div>
              )
             })}

        </div>
        </div>
    </div>
  )
}
export default FAQ


//Below one is used for prompt

// import "./FAQ.css";
// import { questions } from "./Data/FAQ_Questions";
// import { useState } from "react";
// import FAQ_Props from "./FAQ_Props";

// function FAQ() {
//    let[showAns,setShowAns]=useState(questions[0].id)
//   return (
//     <div className="App">
//      <div>
    
//      </div>
//            <FAQ_Props/>
//     </div>
//   );
// }
// export default FAQ;
