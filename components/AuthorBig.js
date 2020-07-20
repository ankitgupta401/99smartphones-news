import React from "react";

const AuthorBig = () => {
  return (
    <div style={{ textAlign: "center", width: "100px" }}>
      <img
        src="https://picsum.photos/200"
        alt=""
        style={{ borderRadius: "50%", width: "100%", marginBottom: "10px" }}
      />
      <p style={{ fontWeight: "lighter", margin: "0px" }}>Author Name</p>
      <hr />
      <p style={{ fontSize: "12px" }}>16 March 2020</p>
      <hr />
      <span>
        <i className=""></i> 2min
      </span>
      <span>
        <i className=""></i>1779
      </span>
      <span>
        <i className=""></i>1
      </span>
      <hr/>
      <div style={{ display: "flex", padding: "20px 0px" }}>
        <div className="category">Business</div>
        <div className="category">Business</div>
        <div className="category">Business</div>
      </div>
    </div>
  );
};

export default AuthorBig;
