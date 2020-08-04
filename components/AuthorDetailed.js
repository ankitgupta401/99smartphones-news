import React from "react";

const AuthorDetailed = (props) => {
  return (
    <div className="author-detail-div" style={{ borderRadius: "5px" }}>
      <div style={{ margin: "10px auto", width: "100px", height: "100px" }}>
        <img
          style={{ borderRadius: "50%", width: "inherit", height: "inherit" }}
          src={props.image2}
          alt=""
          className="img-fluid"
        />
        {/* {console.log(props)} */}
      </div>
      <div style={{ margin: "10px" }}>
        <h3 style={{ fontSize: "27px", fontWeight: "bolder" }}>{props.name}</h3>
        <p style={{ fontSize: "17px", fontWeight: "normal" }}>
          {props.designation}
        </p>
        <div style={{ display: "flex" }}>
          <a
            href={"../author/" + props.username}
            className="view-all-author"
          >
            VIEW ALL POSTS
          </a>
          <i className=""></i>
        </div>
      </div>
    </div>
  );
};

export default AuthorDetailed;
