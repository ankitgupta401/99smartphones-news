import React from "react";
import Link from "next/link";

const BigCard = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <img
        src={props.news.image}
        alt={props.news.alt_image}
        style={{ width: "100%", maxWidth: "1000px"}}
      />

      <div style={{ display: "flex", padding: "20px 0px" }}>
        {props.news.category.map((val, i) => {
          return (
            <a key={i} href={"/" + val.category.split(" ").join("-")}>
              {" "}
              <div className="category">{val.category}</div>
            </a>
          );
        })}
      </div>
      <Link  href="../[...slug]" as={"../" + props.pid + "/" + props.news.link}>
      <a className="big-card-link" style={{ fontSize: "32px", fontWeight: "bolder", color: "#000" }}>
        {props.news.title}
      </a>
      
      </Link>
      <br/>

      <label style={{margin:"10px 0px"}}>
        <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;{" "}
        {new Date(props.news.date).toDateString()}
      </label>

      <p style={{ fontSize: "16px", fontWeight: "500",fontWeight:"23px" }}>
        {props.news.description.slice(0,200)+" ..."}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="share-area">
          <i aria-hidden className="fab fa-facebook-square"></i>
        </div>
        <div
          style={{
            padding: "4px 8px",
            backgroundColor: "rgb(255 0 0)",
            boxShadow: "rgb(236 45 45 / 35%) 0px 0px 4px 1px",
          }}
        >
          <Link  href="../[...slug]" as={"../" + props.pid + "/" + props.news.link}>
            <a className="continue-reading" style={{ display: "flex",color:"#fff" }}>
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
