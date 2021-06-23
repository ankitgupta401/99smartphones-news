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
         <h4  className="category-header">CATAGORIES</h4>   
      {props.category.map((val, i) => {
        return (
          <div key={i} className="category-list">
            <Link
              
              href="/[pid]"
              as={"/" + props.category[i].category.split(" ").join("-")}
            >
              <a>
            
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
                  {props.category[i].category + " (" + (val.count > 100 ? "100+" : val.count ) +")"}
                </a>
              </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Category;
