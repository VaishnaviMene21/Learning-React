import React from "react";

function MssgBox({ username, textColor}) {
   
  return (
    <>
      <h1 style={{color:textColor}}>Hello ,{username}</h1>
    </>
  );
}
export default MssgBox;
