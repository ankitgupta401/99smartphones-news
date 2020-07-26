import React from "react";
import Link from "next/link";

const NewsCard = ({ data }) => {
  // {console.log("News", news.msg)}
  return (
    <>
      <h3 className="category-header">{data.category}</h3>
      <div className="article-container">
        <div className="card-category">
          {data.data[0].category.map((category, i) => (
            <div key={i} className="category">
              <Link href={category}>
                <a>{category}</a>
              </Link>
            </div>
          ))}
        </div>
        <div className="card-header">
          <p className="header-date">
            {new Date(data.data[0].date).toDateString}
          </p>
          <Link href={data.category + "/" + data.data[0].link}>
            <a className="header-text">{data.data[0].title}</a>
          </Link>
          <p className="desc-text">{data.data[0].description}</p>
        </div>
        {/* <div className="overlay"> */}
        <div
          className="article-img-holder"
          style={{ backgroundImage: "url(" + data.data[0].mainImage + ")",width:"100%" }}
        ></div>
        {/* </div> */}
      </div>
    </>
  );
};

export default NewsCard;
