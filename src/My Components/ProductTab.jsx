import React from "react";
import Product from "./Product";
import "./Product.css";
import Price from "./Price";

function ProductTab() {
  let styles = {
    
       display : "flex",
       flexWrap : "wrap",
       justifyContent : "center",
       alignItems : "center",



  };

  return (
    <>
      <div style={styles}>
        <Product title="Laptop" idx={0} />
        <Product title="Phone" idx={1} />
        <Product title="Apple Pencil" idx={2} />
        <Product title="Petronics Toad 23" idx={3} />
        <price />
      </div>
    </>
  );
}
export default ProductTab;
