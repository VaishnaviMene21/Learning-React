import React from "react";

function Price({oldPrice , newPrice}) {
    let styles = {
        textDecorationLine: "Line-through",
    }
    let newStyle = {
         fontWeight : "bold",
    }
    let newSt = {
        backgroundColor : "yellow",
        height : "57px"
   }
  return (
    
    <>
    <div style={newSt}>
      <p style={styles}>{oldPrice}</p>
      <p style={newStyle}> {newPrice}</p>
      </div>
    </>

  );
}
export default Price;
