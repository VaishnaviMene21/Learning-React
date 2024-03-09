import React from "react";
import "./Product.css";
import Price from "./Price";


function Product({title ,idx}) 
{
   let oldPrice = ["1000","2000" ,"3000" , "4000"];
   let newPrice = ["500" , "1000" , "1500" , "2000"];
   let description = ["Smart" ,"Flexible" ,"Durable" ,"Fast"];
  return (
    
    <>
      
      <div className="Product" >
        <p>{title}</p>
        <p>{description[idx]}</p>
        <Price  oldPrice = {oldPrice[idx]}  newPrice = {newPrice[idx]}/>
      </div>
    </>
  );
}
export default Product;
