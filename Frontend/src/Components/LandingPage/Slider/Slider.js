import React from "react";
import { Slideitem } from "../Slideitem/Slideitem";
import { useRef } from "react";
import { useState } from "react";
import "./Slider.css";
import { Slideitemuser } from "../Slideitemuser/Slideitemuser";
export const Slider = (props) => {
  const [isMoved, setIsMoved] = useState(false);
  const [slideNumber, setslideNumber] = useState(0);
  const listRef = useRef();
  const handleClick = (direction) => {
    setIsMoved(true);
    // let distance=listRef.current.getBoundingClientReact()
    let distance = listRef.current.getBoundingClientRect().x - 40;

    if (direction === "left" && slideNumber > 0) {
      setslideNumber(slideNumber - 1);
      listRef.current.style.transform = `translateX(${298 + distance}px)`;
    }
    if (direction === "right" && slideNumber < 9) {
      setslideNumber(slideNumber + 1);
      listRef.current.style.transform = `translateX(${-298 + distance}px)`;
    }
  };
  return (
    <div style={{paddingTop:"30px",position:"relative"}}>
      <div style={{ marginLeft: "50px" }}>
        <p style={{ fontSize: "30px",fontWeight:"bold" }}>{props.text}</p>
      </div>
      <div style={{ position: "relative" }}>
        <div className="outerrow">
          <div className="leftbtn" onClick={() => handleClick("left")}>
            <i className="fas fa-chevron-left"></i>
          </div>

          <div className="slideimages" ref={listRef}>
          {
            props.text==='Popular Places'?
          (
         
            <>
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            <Slideitem />
            </>
          )
          
          :(<>
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          <Slideitemuser />
          </>)
          }
           
          </div>
          <div className="rightbtn" onClick={() => handleClick("right")}>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
