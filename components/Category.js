import React from "react";
import Link from "next/link";

const Navbar = (props) => {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        position: "absolute",
        marginTop: "20px",
        top: 0,
      }}
    >
      {props.category.result.map((val, i) => {
        return (
          <div key={i}>
            <Link href={"/" + props.category.result[i].category}>
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

export default Navbar;
