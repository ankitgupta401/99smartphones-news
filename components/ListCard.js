import React from "react";

const ListCard = () => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ margin: "5px" }}>
        <img src="https://picsum.photos/200" alt="" style={{ width: "100%" }} />
      </div>
      <div style={{ margin: "5px" }}>
        <h2
          style={{
            fontSize: "18px",
            padding: "0",
            margin: "0",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          Fashion photographers in front of camera
        </h2>
        <p
          style={{
            fontSize: "15px",
            padding: "0",
            margin: "0",
            fontWeight: "lighter",
          }}
        >
          <i className="fas fa-calender"></i> March 17,2020
        </p>
      </div>
    </div>
  );
};

export default ListCard;
