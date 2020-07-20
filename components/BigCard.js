import React from "react";

const BigCard = () => {
  return (
    <div style={{ padding: "20px" }}>
      <img
        src="https://picsum.photos/800/500"
        alt=""
        style={{ width: "100%", maxWidth: "1000px" }}
      />
      <div style={{ display: "flex", padding: "20px 0px" }}>
        <div className="category">Business</div>
        <div className="category">Business</div>
      </div>
      <h2 style={{ fontSize: "40px", fontWeight: "bolder", color: "#000" }}>
        15 secrets of happy families
      </h2>
      <span>
        <i className=""></i> 2min
      </span>
      <span>
        <i className=""></i>1779
      </span>
      <span>
        <i className=""></i>1
      </span>
      <p style={{fontSize:"16px",fontWeight:"500"}}>
        Capitalize on low hanging fruit to identity a ballpark value added
        activity to beta test. Override the digital divide with click through
      </p>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <div className="share-area">
          <i className="">He</i>
        </div>
        <div>
          <a>Continue Reading</a>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
