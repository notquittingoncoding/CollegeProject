import React from "react";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import "./Review.css";
import Card from "../CreateExperience/Card/Card"
import Rating from "./Ratings";

const Review = () => {
  return (
    <>
    <Card className='px-1'>
      <div className="review">
        <div className="reviewHeading">
          <div>
            <div>
              <span
                style={{
                  fontSize: "40px",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  wordSpacing: "5px",
                  color: "#00478f"
                }}
              >
                {" "}
                Taj Mahal Experience
              </span>
            </div>

            <div style={{ textAlign: "end" }}>
              <span style={{ fontSize: "18px" }} className="text-muted">author:</span>{" "}
              <span
                style={{
                  fontSize: "20px",
                  fontStyle: "italic",
                  fontFamily: "cursive"
                }}
              >
                Cole{" "}
              </span>
            </div>
          </div>
        </div>
        <div style={{ width: "80%", marginLeft: "10%", display: "flex", marginTop: "20px" }}>
          {/* <span  style={{fontSize:"35px",fontWeight:"500"}}>Gallery Images</span> */}

        </div>

        {/* Images--------------------------------------- */}

        <ImageGallery />

        <div
          className="reviewdescription mx-5"
          style={{

            display: "flex",

            flexDirection: "column",
          }}
        >
          {/* <div>
          <span style={{ fontSize:"30px",fontWeight:"500", fontFamily: "sans-serif"}}>
            Description
          </span>
        </div> */}

          <div className='mx-4 my-3'>
            <span style={{ fontSize: "19px" }}>
              The Taj Mahal (/ˌtɑːdʒ məˈhɑːl, ˌtɑːʒ-/;[4] lit. 'Crown of the
              Palace', [taːdʒ ˈmɛːɦ(ə)l]),[5] is an ivory-white marble mausoleum
              on the right bank of the river Yamuna in the Indian city of Agra. It
              was commissioned in 1632 by the Mughal emperor Shah Jahan (reigned
              from 1628 to 1658) to house the tomb of his favourite wife, Mumtaz
              Mahal; it also houses the tomb of Shah Jahan himself. The tomb is
              the centrepiece of a 17-hectare (42-acre) complex, which includes a
              mosque and a guest house, and is set in formal gardens bounded on
              three sides by a crenellated wall. Construction of the mausoleum was
              essentially completed in 1643, but work continued on other phases of
              the project for another 10 years. The Taj Mahal complex is believed
              to have been completed in its entirety in 1653 at a cost estimated
              at the time to be around 32 million rupees, which in 2020 would be
              approximately 70 billion rupees (about U.S. $956 million). The
              construction project employed some 20,000 artisans under the
              guidance of a board of architects led by the court architect to the
              emperor, Ustad Ahmad Lahauri. The Taj Mahal was designated as a
              UNESCO World Heritage Site in 1983 for being "the jewel of Muslim
              art in India and one of the universally admired masterpieces of the
              world's heritage". It is regarded by many as the best example of
              Mughal architecture and a symbol of India's rich history. The Taj
              Mahal attracts 7–8 million visitors a year and in 2007, it was
              declared a winner of the New 7 Wonders of the World (2000–2007)
              initiative.
            </span>
          </div>
        </div>
      </div>
    </Card>
    <div>
    <div className="mb-5 mt-5">
        <Rating />
      </div>
    </div>
    </>
  );
};

export default Review;
