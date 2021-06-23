import React from "react";
import Link from "next/link";
const AuthorDetailed = (props) => {
  return (
    <div className="author-detail-div" style={{ borderRadius: "5px" }}>
      <div style={{ margin: "10px", width: "200px" }}>

        <img
          style={{ borderRadius: "48%", width: "inherit", height: "inherit" }}
          src={props.profilePicture["200x150"]}
          alt=""
          className="img-fluid"
        />
      </div>
      <div style={{ margin: "20px" }}>
        <h3 style={{ fontSize: "27px", fontWeight: "bolder" }}>{props?.name}</h3>
        <p style={{ fontSize: "17px", fontWeight: "normal" }}>
          {props.description}
        </p>

      <div className="icon-div">
        {props?.facebook ? <a target="_blank"  href={props?.facebook || "#"}>
          <img
            className="social-icon"
            src="/images/icons8-facebook-480.png"
            alt="facebook"
          />
        </a>:"" }
        {props?.instagram?  <a target="_blank" href={props?.instagram}>
          <img
             style={{width: "25px"}}
            className="social-icon"
            src="/images/icons8-insta-480.png"
            alt="instagram"
          />
        </a>:""}
        {props?.twitter ? <a target="_blank" href={props?.twitter}>
          <img
            className="social-icon"
            src="/images/icons8-twitter-480.png"
            alt="twitter"
          />
        </a>: ""}
        {props?.linkedIn?  <a target="_blank" href={props?.linkedIn}>
          <img
            className="social-icon"
            src="/images/icons8-linkedin-480.png"
            alt="linkedin"
          />
        </a>:""}
        {props?.github?  <a target="_blank" href={props?.github}>
          <img
            className="social-icon"
            src="/images/icons8-github-480.png"
            alt="github"
          />
        </a>:""}
 
      </div>
        <div style={{ display: "flex" }}>
          <a
            href={"../author?userId=" +  props?._id}
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
