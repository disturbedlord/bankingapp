import React from "react";
import "./Common/style.css";
import uiface from "./Assets/images/uiface1.jpg";

export default class Dashboard extends React.Component {
  render() {
    return (
      <div style={{ position: "relative" }}>
        {/* Div to display user Icon , Send Money , Search */}
        <div style={{ margin: "20px 15px" }}>
          <div
            className="userIcon"
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "30px",
            }}
          >
            <img
              src={uiface}
              style={{ borderRadius: "30px" }}
              width="45px"
              height="45px"
            />
          </div>
        </div>
      </div>
    );
  }
}
