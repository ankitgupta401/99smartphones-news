import React from "react";

const NewsCard = ({ news }) => {
  // {console.log("News", news.msg)}
  return (
    <div className="article-container">
      <div className="card-category">
        {/* {news.result[0].category.map((category, i) => (
          <div key={i} className="category">
            {category}
          </div>
        ))} */}
      </div>
      <div className="card-header">
        <h4 className="header-text">
          6 ways to market your small business cheap
        </h4>
        <p className="desc-text">
          Quickly maximize timely deliverables for real-time schemas.
          Dramatically maintain clicks-and-mortar solutions without functional
          solutions.
        </p>
        {console.log(news)}
      </div>
      <div className="article-img-holder"></div>
    </div>
  );
};

export default NewsCard;
