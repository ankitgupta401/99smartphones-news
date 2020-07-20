import React from "react";

const AuthorSmall = () => {
  return (
    <div style={{textAlign:"center",width:"100px"}}>
      <img
        src="https://picsum.photos/200"
        alt=""
        style={{ borderRadius: "50%", width: "100%",marginBottom:"10px"}}
      />
      <p style={{fontWeight:"lighter",margin:"0px"}}>Author Name</p>
      <hr/>
      <p style={{ fontSize: "12px" }}>16 March 2020</p>
    </div>
  );
};

export default AuthorSmall;
