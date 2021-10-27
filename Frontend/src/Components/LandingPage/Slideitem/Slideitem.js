import React from "react";
import "./Slideitem.css";
import {NavLink} from "react-router-dom";
export const Slideitem = () => {
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
          <p>Taj Mahal</p>
        </div>
        <div
          style={{
            alignItems: "flex-end",
            textAlign: "end",
            paddingRight: "5px",
          }}
        >
          <i className="fas fa-compass" />
          <span style={{ marginLeft: "4px" }}>Agra,India</span>
        </div>
      </div>
      <div className="viewdetails">
         <span><NavLink to="/SearchPlaces" className="textnone">View Details<i className="fas fa-chevron-right"></i></NavLink>
         </span>
      </div>
    </div>
  );
};
