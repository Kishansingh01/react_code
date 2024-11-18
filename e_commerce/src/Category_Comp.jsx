import React from 'react'

export default function Category_Comp(finalCategory) {
      let cat=finalCategory.map((v,i)=>{
            return(
                  <li key={i} className="">
                  {v}
                  </li>
      )
            
      })
  return (
        <div className="comp">
             <h2>Product Category</h2>  
             <ul>
                  {cat}
            </ul>         
        </div>
  )
}
