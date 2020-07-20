import React from "react";

const AuthorDetailed = () => {
  return (
    <div style={{ backgroundColor: "rgba(0,0,0,.1)",padding:"30px 50px",display:"flex" }}>
      <div style={{margin:"10px"}}>
        <img
          style={{ borderRadius: "50%",width:"100%" }}
          src="https://picsum.photos/400"
          alt=""
        />
      </div>
      <div style={{margin:"10px"}}>
        <h3 style={{fontSize:"27px",fontWeight:"bolder"}}>Joanna Taylor</h3>
        <p style={{fontSize:"17px",fontWeight:"normal"}}>
          Distinctively exploit optimal alignments for intuitive bandwidth.
          Quickly coordinate e-business applications through revolutionary
          catalysts for change. Seamlessly underwhelm optimal testing procedures
          whereas bricks-and-clicks processes
        </p>
        <div style={{display:"flex"}}>
          <a>VIEW ALL POSTS</a>
          <i className=""></i>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailed;
