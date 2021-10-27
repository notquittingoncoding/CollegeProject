import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <div className="boxfooter">
      <div className="outer">
        <div className="row">
          <div className="col-md-3 col-sm-6 sm-mt-sm-2">
           
              <span>Disclaimer</span>
            
          </div>
          <div className="col-md-3 col-sm-6 ">
           
              <span>Privacy Policy</span>
            
          </div>
          <div className="col-md-3 col-sm-6 sm-mt-sm-2">
           
              <span>© All Right Reserved</span>
            
          </div>
          <div className="col-md-3 col-sm-6 sm-mt-sm-2">
           
              <span className="icons">
                <i class="fab fa-facebook"></i>
                <i className="fab fa-google"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter"></i>
               
              </span>
            
          </div>
        </div>
      </div>
    </div>
  );
};
