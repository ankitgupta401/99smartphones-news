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
 return (<a key={i}  href={"/"+ val}> <div  className="category">{val}</div></a>);
        })}
      
        
      </div>
      <h2 style={{ fontSize: "40px", fontWeight: "bolder", color: "#000" }}>
       {props.news.title}
      </h2>
      {/* <span>
        <i className=""></i>{new Date(props.news.date).toLocaleDateString()}
      </span> */}
      <span>
        <i className=""></i> &nbsp; {new Date(props.news.date).toDateString()}
      </span>
      {/* <span>
        <i className=""></i>1
      </span> */}
      <p style={{ fontSize: "16px", fontWeight: "500" }}>
        {props.news.description}
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div className="share-area">
        <i  aria-hidden className="fab fa-facebook-square"></i>
        </div>
        <div style={{padding:"7px",backgroundColor:"red"}}>
          <Link href={"./" + props.pid +"/"+ props.news.link}>
            <a  className="continue-reading">Continue Reading<i aria-hidden className="fas"></i></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
