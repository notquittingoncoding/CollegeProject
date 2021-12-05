import React from "react";
import "./ImageGallery.css";
// import img1 from "../images/img1.jpg";
// import img2 from "../images/img2.jpg";
// import img3 from "../images/img3.jpg";
// import img4 from "../images/img4.jpg";
import image from "./data";

// Import Simple React Lightbox
import SimpleReactLightbox from "simple-react-lightbox";

import { SRLWrapper } from "simple-react-lightbox";

function ImgCard() {
  return(
  <div
  className="row img-gallery"
  style={{
    justifyContent: "center",
    alignItems: "center",
    width:"90%",
    alignSelf:"center",
    display:"flex",
    marginLeft:"5%"
   
  }}
>
  { image.map((image, index) => {
    return (
      
        <div
          className="col-md-6 col-lg-4 col-12"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
          key={index}
        >
          <div className="imgcard">
            <div style={{ height: "250px", width: "100%" }}>
              <img src={`/images/${image.imageName}`}  alt="" />
            </div>
            <div
              style={{
                gridTemplateColumns: "50% 50%",
                gridTemplateRows: "100%",
                display: "grid",
                marginTop: "8px",
                marginBottom: "8px",
              }}
            >
              <div style={{ paddingLeft: "5px", paddingTop: "5px" }}>
                <span style={{ marginRight: "3px", color: "#636e72" }}>
                  {" "}
                  Like{" "}
                </span>
                <i className="far fa-heart"></i>
              </div>
              <div
                style={{
                  alignItems: "flex-end",
                  textAlign: "end",
                  paddingRight: "5px",
                  paddingTop: "5px",
                }}
              >
                <span style={{ marginRight: "3px", color: "#636e72" }}>
                  {" "}
                  Comment{" "}
                </span>
                <i className="far fa-comments"></i>
              </div>
            </div>
          </div>
        </div>
      
    );
   })
   }
  </div>
  )
}

function MyComponent() {
  const num = 0;

  //   <div
  //     className="row img-gallery"
  //     style={{
  //       justifyContent: "center",
  //       alignItems: "center",
  //     }}
  // >
  
    /* <div
          className="col-md-4"
          style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <div className="imgcard">
            <div style={{ height: "250px", width: "100%" }}>
              <img src={img1} alt="Umbrella" />
            </div>
            <div
              style={{
               
                gridTemplateColumns: "50% 50%",
                gridTemplateRows:"100%",
                display: "grid",
                marginTop:"8px",
                marginBottom:"8px",
              }}
            >
              <div style={{ paddingLeft: "5px", paddingTop: "5px" }}>
              <span style={{marginRight:"3px",color: "#636e72"}}> Like </span>
              <i className="far fa-heart"></i>
              </div>
              <div
                style={{
                  alignItems: "flex-end",
                  textAlign: "end",
                  paddingRight: "5px",
                  paddingTop: "5px",
                }}
              >
              <span style={{marginRight:"3px",color:"#636e72"}}> Comment </span>
               <i className="far fa-comments"></i>
              </div>
            </div>
          </div>
        </div> */
  
  return (
    <SRLWrapper>
      <ImgCard />
    </SRLWrapper>
  );

  // </div>
}

export const ImageGallery = () => {
  return (
    // Wrap your app with the component
    <SimpleReactLightbox>
      <MyComponent />
    </SimpleReactLightbox>
  );
};
