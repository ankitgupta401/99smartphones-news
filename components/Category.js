import React from "react";
import Link from "next/link";

const Category = (props) => {
  return (
    <div
      className="category-section"
      style={{
        // boxShadow: "0px 0px 5px 5px rgba(227,227,227,.3)",
        padding: "10px 25px",
        position: "absolute",
        marginTop: "20px",
        top: 0,
      }}
    >
          
      {props.category.result.map((val, i) => {
        return (
          <div key={i} className="category-list">
            <Link
              
              href="/[pid]"
              as={"/" + props.category.result[i].category}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "150px",
                  cursor: "pointer",
                }}
              >
                <a
                  className="category-list"
                  style={{
                    padding: "5px",
                    fontSize: "18px",
                    lineHeight: "30px",
                  }}
                >
                  {props.category.result[i].category.split("-").join(" ")}
                </a>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
