import React from "react";
import Link from "next/link";

const NewsCard = ({ data }) => {
 
  return (
    <>

      <h3 className="category-header">{data.category.split("-").join(" ")}</h3>
      <Link
        href="/[...slug]"
        as={"/" + data.category + "/" + data.data[0].link}
       
      >
       
        <div className="article-container" style={{cursor:"pointer"}}>
          <div className="card-category">
            {data.data[0].category.map((category, i) => (
              <Link key={i}  href={"/[pid]"} as={"/" + category}>
              <div  className="category">
                
                  <a>{category.split("-").join(" ")}</a>
                
              </div>
              </Link>
            ))}
          </div>
          <div className="card-header">
            <p className="header-date">
              {new Date(data.data[0].date).toDateString()}
            </p>
            {/* <Link
            href="/[...slug]"
            as={"/" + data.category + "/" + data.data[0].link}
          > */}
            <a className="header-text">{data.data[0].title}</a>
            {/* </Link> */}
            <p className="desc-text">{data.data[0].description}</p>
          </div>
          <div
            className="article-img-holder"
            style={{
              backgroundImage: "url(" + data.data[0].mainImage + ")",
              width: "100%",
            }}
          ></div>
        </div>
      </Link>
    </>
  );
};

export default NewsCard;
