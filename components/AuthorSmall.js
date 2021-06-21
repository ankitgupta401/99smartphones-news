import React from "react";
import Link from "next/link";

const AuthorSmall = ({ author }) => {
  return (
    <div
      className="author-small-card"
      // style={{ boxShadow: "0px 0px 5px 5px rgba(227,227,227,.3)" }}
    >

      <img
        src={author?.profilePicture["200x150"]}
        alt="author"
        style={{
          borderRadius: "50%",
          width: "100%",
          marginBottom: "10px",
          height: "100px",
        }}
      />
      <p style={{ fontWeight: "lighter", margin: "0px" }}>{author?.name}</p>
      <hr />
      <p style={{ fontSize: "12px", lineHeight: "16px", wordSpacing: "1px" }}>
        {author?.description}
      </p>

      <div className="icon-div">
        {author.fb_link?  <a target="_blank"  href={author?.fb_link || "#"}>
          <img
            className="social-icon"
            src="/images/icons8-facebook-480.png"
            alt="facebook"
          />
        </a>:"" }
        {author.twitter_link? <a target="_blank" href={author?.twitter_link}>
          <img
            className="social-icon"
            src="/images/icons8-twitter-480.png"
            alt="twitter"
          />
        </a>: ""}
        {author.twitter_link?  <a target="_blank" href={author?.linkedin_link}>
          <img
            className="social-icon"
            src="/images/icons8-linkedin-480.png"
            alt="linkedin"
          />
        </a>:""}
      </div>
    </div>
  );
};

export default AuthorSmall;
