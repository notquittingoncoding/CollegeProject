import React from "react";
import "./Slideitemuser.css";
import { NavLink } from "react-router-dom";
export const Slideitemuser = () => {
  return (
    <div className="outerbox">
      <div>
        <img
          src="https://images.pexels.com/photos/5848766/pexels-photo-5848766.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="..."
        />
      </div>
      <div className="box">
        <div style={{ paddingLeft: "5px" }}>
          <p>Michael</p>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            textAlign: "end",
            paddingRight: "5px",
          }}
        >
          <span>
            Ratings: 3{" "}
            <i className="far fa-star" style={{ color: "orange" }}></i>
          </span>
        </div>
      </div>
      <div className="viewdet">
        <span>
          <NavLink to="/SearchPlaces" className="textnone">
            View Experience<i className="fas fa-chevron-right"></i>
          </NavLink>
        </span>
      </div>
    </div>
  );
};
