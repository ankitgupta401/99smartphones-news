import React from "react";
import Link from "next/link";

const BigCard = (props) => {
  return (
    <div style={{ padding: "20px" }}>
      <img
        src={props.blog?.image || ""}
        alt={props.blog?.alt_image || ""}
        style={{ width: "100%", maxWidth: "1000px"}}
      />

      <div style={{ display: "flex", padding: "0px 0px" }}>
        {props.blog.category.map((val, i) => {
          return (
            <a key={i} href={"/" + val.category.split(" ").join("-")}>
              {" "}
              <div className="category">{val.category}</div>
            </a>
          );
        })}
      </div>
      <Link  href="../[...slug]" as={"../" + props.blog.category[0].category + "/" + props.blog.link}>
      <a className="big-card-link" style={{ fontSize: "32px", fontWeight: "bolder", color: "#000" }}>
        {props.blog.title}
      </a>
      
      </Link>
      <br/>

      <label style={{margin:"10px 0px"}}>
        <i className="fa fa-calendar" aria-hidden="true"></i> &nbsp;{" "}
        {new Date(props.blog.date).toDateString()}
      </label>

      <p style={{ fontSize: "16px", fontWeight: "500",fontWeight:"23px" }}>
        {props.blog.description.slice(0,200)+" ..."}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="share-area">
        <h5 class="card-title"> <i class="fa fa-eye" style={{ fontSize: "15px"}} aria-hidden="true"></i>
  {" " +props.blog.views} Views</h5>
        </div>
        <div
          style={{
            padding: "4px 8px",
            backgroundColor: "rgb(255 0 0)",
            boxShadow: "rgb(236 45 45 / 35%) 0px 0px 4px 1px",
          }}
        >
          <Link  href="../[...slug]" as={"../" + props.pid + "/" + props.blog.link}>
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
