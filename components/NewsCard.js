import React from "react";
import Link from "next/link";

const NewsCard = ({ data }) => {
 
  return (
    <>
 
 {data.data.length === 0 ? (
        <div></div>
      ) : (
        <div>
      <h3 className="category-header">{data.category.split("-").join(" ")}</h3>
      <Link
        href="/[...slug]"
        as={"/" + data.category + "/" + data.data[0].link}
       
      >
        <a> 
     
        <div className="article-container" style={{cursor:"pointer"}}>
          <div className="card-category">
            {data.data[0].category.map((category, i) => (
              <Link key={i}  href={"/[pid]"} as={"/" + category}>
                      <a> 
              <div  className="category">
                
                  <a>{category.split("-").join(" ")}</a>
                
              </div>
              </a>
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
            {/* <p className="desc-text">{data.data[0].description.substring(0,100)}</p> */}
          </div>
          <div
            className="article-img-holder"
            style={{
              backgroundImage: "url(" + data.data[0].mainImage + ")",
              width: "100%",
            }}
          ></div>
        </div>
        </a>
      </Link>
</div>
      )}
    </>
  );
};

export default NewsCard;
