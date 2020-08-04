import React from "react";
import Link from "next/link";

const NewsCardSmall = ({ data }) => {
  return (
    <>
      <h3 className="category-header">{data.category}</h3>
      {data.data.length === 0 ? (
        <div></div>
      ) : (
        <div className="article-container">
          <div className="card-category">
            {data.data[0].category.map((category, i) => (
              <div key={i} className="category">
                <Link href={"/[pid]"} as={"/"+category}><a>{category.split("-").join(" ")}</a></Link>
              </div>
            ))}
          </div>
          <div className="card-header">
            <Link href="/[...slug]" as={"/"+data.category + "/" + data.data[0].link}>
              <a style={{ fontSize: "20px" }} className="header-text">
                {data.data[0].title}
              </a>
            </Link>
          </div>
          <div
            className="article-img-holder"
            style={{ backgroundImage: "url(" + data.data[0].mainImage + ")" }}
          ></div>
          {console.log(data)}
        </div>
      )}
    </>
  );
};

export default NewsCardSmall;
