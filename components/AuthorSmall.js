import React from "react";
import Link from "next/link";

const AuthorSmall = ({ author }) => {
  return (
    <div style={{ textAlign: "center", boxShadow: "0px 0px 10px 10px rgba(227,227,227,.3)",padding:"10px 50px" }}>
      <img
        src={author.image1}
        alt="author"
        style={{
          borderRadius: "50%",
          width: "100%",
          marginBottom: "10px",
          height: "100px",
          
        }}
      />
      <p style={{ fontWeight: "lighter", margin: "0px" }}>{author.name}</p>
      <hr />
      <p style={{ fontSize: "12px" }}>{author.designation}</p>

      <div className="icon-div">
        <i className="fa fa-facebook-official" aria-hidden="true"></i>

        <i className="fa fa-twitter" aria-hidden="true"></i>
        <i className="fa fa-instagram" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default AuthorSmall;
