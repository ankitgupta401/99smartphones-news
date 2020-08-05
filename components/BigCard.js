import React from "react";
import Link from "next/link";

const BigCard = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <img
        src={props.news.mainImage}
        alt={props.news.alt_image}
        style={{ width: "100%", maxWidth: "1000px" }}
      />
      {/* {console.log(props)} */}
      <div style={{ display: "flex", padding: "20px 0px" }}>
        {props.news.category.map((val, i) => {
          return (
            <a key={i} href={"/" + val}>
              {" "}
              <div className="category">{val}</div>
            </a>
          );
        })}
      </div>
      <Link  href="../[...slug]" as={"../" + props.pid + "/" + props.news.link}>
      <a style={{ fontSize: "32px", fontWeight: "bolder", color: "#000" }}>
        {props.news.title}
      </a>
      
      </Link>
      <br/>

      <span>
        <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;{" "}
        {new Date(props.news.date).toDateString()}
      </span>

      <p style={{ fontSize: "16px", fontWeight: "500" }}>
        {props.news.description}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="share-area">
          <i aria-hidden className="fab fa-facebook-square"></i>
        </div>
        <div
          style={{
            padding: "7px 20px",
            backgroundColor: "#52343499",
            boxShadow: "0px 0px 4px 1px rgba(0,0,0,0.35)",
          }}
        >
          <Link  href="../[...slug]" as={"../" + props.pid + "/" + props.news.link}>
            <a className="continue-reading" style={{ display: "flex" }}>
              Continue Reading{" "}
              <div
                className="line-div"
                style={{
                  width: "0px",
                  lineHeight: "30px",
                  backgroundColor: "white",
                  margin: "0px 5px",
                }}
              ></div>
              <i
                style={{ lineHeight: "25px" }}
                className="fa fa-arrow-right"
                aria-hidden="true"
              ></i>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
