import React from "react";
import Link from "next/link";

const NewsCardSmall = ({ data }) => {
  return (
    <>
     
      {data.data.length === 0 ? (
        <div></div>
      ) : (
        <div>
        <h3 className="category-header">{data.category} </h3>
        <Link
          href="/[...slug]"
          as={"/" + data.category + "/" + data.data[0].link}
        >
          <a>
          <div className="article-container" style={{ cursor: "pointer" }}>
            <div className="card-category">
              {data.data[0].category.map((category, i) => (
                <div key={i} className="category">
                  <Link href={"/[pid]"} as={"/" + category.category.split("").join("-")}>
                    <a>{category.category.split("-").join(" ")}</a>
                  </Link>
                </div>
              ))}
            </div>
            <div className="card-header">
              <p className="header-date">
                {new Date(data.data[0].date).toDateString()}
              </p>

              <a style={{ fontSize: "20px" }} className="header-text">
                {data.data[0].title}
              </a>
            </div>
            <div
              className="article-img-holder"
              style={{ backgroundImage: "url(" + data.data[0].image + ")" }}
            ></div>
          </div>
          </a>
        </Link>
        </div>
      )}
    </>
  );
};

export default NewsCardSmall;
