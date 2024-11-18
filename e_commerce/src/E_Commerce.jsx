import React,{useEffect,useState} from "react";
import "./E_Commerce.css";
import Category_Comp from "./Category_Comp";
import axios from "axios";

export default function E_Commerce() {
 let [finalCategory,setFinalCategory]=useState([])

  let getCategory=()=>{
    axios.get('https://dummyjson.com/products/categories')
    .then((res)=>res.data) // respons ke andar data nikal rha hai
    .then((finalRes)=>{
     setFinalCategory(finalRes)
    })
  }

  useEffect(()=>{
    getCategory();
    // console.log(finalCategory)
  },[])

  return (
<div>
    <h1>Our Products</h1>
    <div className="app">
      <div className="head">
        <div>
          {finalCategory.length}
          <Category_Comp />
        </div>
      </div>

     
        <div className="all">
          <div>
            <img src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg" />
            <p class="merge">
              IPHONE
              <br />
              Rs 100000
            </p>
          </div>

          <div>
            <img src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg" />
            <p class="merge">
              IPHONE
              <br />
              Rs 100000
            </p>
          </div>

          <div>
            <img src="https://image.wedmegood.com/resized/300X/uploads/banner_image/1/bridal-wear.jpg" alt=""/>
            <p class="merge">
              IPHONE
              <br/>
            Rs 100000
            </p>
          </div>
          
      </div>
    </div>
</div>
  );
}
