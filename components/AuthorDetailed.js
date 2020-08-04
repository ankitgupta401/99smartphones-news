import React from "react";
import Link from "next/link";
const AuthorDetailed = (props) => {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,.1)",padding:"30px 50px",display:"flex" }}>
      <div style={{margin:"10px"}}>
        <img
          style={{ borderRadius: "50%",width:"100%" ,maxWidth:"100px"}}
          src={props.image2}
          alt=""
        />
        {/* {console.log(props)} */}
      </div>
      <div style={{margin:"10px"}}>
  <h3 style={{fontSize:"27px",fontWeight:"bolder"}}>{props.name}</h3>
        <p style={{fontSize:"17px",fontWeight:"normal"}}>
         {props.designation}
        </p>
        <div style={{display:"flex"}}>
          <a href={ "../author/" + props.username }>VIEW ALL POSTS</a>
          <i className=""></i>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailed;
