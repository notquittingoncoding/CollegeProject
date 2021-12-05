import React, { useState } from "react";
import SearchBar1 from "./SearchBar/SearchBar1";
import SearchBar from "./SearchBar/SearchBar1";
import SearchBar2 from "./SearchBar/SearchBar2";
import SearchBar3 from "./SearchBar/SearchBar3";
import { SearchCards } from "./SearchCards/SearchCards";
import "./SearchPlaces.css";

export const SearchPlaces = () => {
  const [locationInput, setLocationInput] = useState("");
  const [placeInput, setPlaceInput] = useState("");
  const [userInput, setUserInput] = useState("");

  // const data = [
  //   "Taj Mahal",

  //   "Qutub Minar",

  //   "Jama Masjid",

  //   "Lal Qila",

  //   "India Gate",
  // ];
  const res = [
    {
      place: "Taj Mahal",

      location: "Agra",
      user: "Aman",
      rating: "3",
    },
    {
      place: "Qutub Minar",
      location: "Delhi",
      user: "Yuvraj",
      rating: "3",
    },
    {
      place: "Red Fort",
      location: "Pune",
      user: "Sujeet",
      rating: "5",
    },
    {
      place: "India Gate",
      location: "Mumbai",
      user: "Danish",
      rating: "4",
    },
    {
      place: "Rashtra Pati Bhawan",
      location: "Bangalore",
      user: "Cole",
      rating: "3.5",
    },
  ];
  const [filterData, setFilterData] = useState(res);
  const PostData = async(e)=>{


try{
    const res=await fetch("/destinations" +locationInput,placeInput,userInput,{
      method: "GET",
      headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
      },
      credentials: "include"
  })
    const data = await res.json();
    setFilterData(data);
  }
  catch(err)
  {
    console.log(err);
  }

}
//   const filterFunc=()=>{
//     const newFilterData=res.filter((elem)=>{
//      return (locationInput!==""?elem.location===locationInput:elem.location!==locationInput
//      && placeInput!==""?elem.place===placeInput:elem.place!==placeInput 
//      && userInput!==""?elem.user===userInput:elem.user!==userInput)

// // return elem.location===locationInput && elem.place===placeInput && elem.user===userInput;
//     })
//     setFilterData(newFilterData);
//   }

  return (
    <div className="searchplacesouter">
      <div className="searchplaces">
        <div style={{ position: "relative", height: "250px" }}>
          <div className="img-background">
            <img
              src="https://images.pexels.com/photos/459271/pexels-photo-459271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt=""
            />
          </div>
          <div className="image-text">
            <div className="upperheading">Find a Place that fits you </div>
            <div className="belowheading">With Traveller's Scouts</div>
          </div>
        </div>

        <div className="search-boxes">
          <div
            className="row d-md-none d-sm-flex"
            data-toggle="collapse"
            data-target="#multiCollapseExample2"
            aria-expanded="false"
            aria-controls="multiCollapseExample2"
          >
            <i className="fas fa-filter">
              <br />
              <span>Filtration</span>
            </i>
          </div>

          <div className="row mt-4 d-md-flex d-sm-none hideonxsm">
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 col-sm-12 mt-md-0 mt-sm-5   centr">
                  <div className="juscol">
                    <SearchBar1
                      name="location"
                      placeholder="Search by location"
                      data={res}
                      setValue={(val) => setLocationInput(val)}
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-md-0 mt-sm-5   centr">
                  <div className="juscol">
                    <SearchBar2
                      name="place"
                      placeholder="Search by place name"
                      data={res}
                      setValue={(val) => setPlaceInput(val)}
                    />
                  </div>
                </div>
                <div className="col-md-4 col-sm-12 mt-md-0 mt-sm-5   centr">
                  <div className="juscol">
                    <SearchBar3
                      name="user"
                      placeholder="Search by user name"
                      data={res}
                      setValue={(val) => setUserInput(val)}
                    />
                  </div>
                </div>
              </div>
            </div>

                <div className="col-lg-2 col-md-12 mt-lg-0 mt-sm-4 ">
                  <div className="row">
                    <div className="col-12 centr">
                      <button type="button" className="btn btn-dark"
                      onClick={PostData} >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
           
          </div>

          {/* This is for div which we have to show on clciking button */}
          <div
            className="row mt-4 collapse multi-collapse mtonxsm"
            id="multiCollapseExample2"
          >
            <div className="col-md-10">
              <div className="row">
                <div className="col-md-4 col-sm-12 mt-md-0 mt-sm-5 centr">
                  <div className="juscol">
                    <SearchBar1
                      name="location"
                      placeholder="Search by location"
                      data={res}
                      setValue={(val) => setLocationInput(val)}
                    />
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 mt-md-0 mt-sm-5 centr ">
                  <div className="juscol">
                    <SearchBar2
                      name="place"
                      placeholder="Search by place"
                      data={res}
                      setValue={(val) => setPlaceInput(val)}
                    />
                  </div>
                </div>

                <div className="col-md-4 col-sm-12 mt-md-0 mt-sm-5 centr">
                  <div className="juscol">
                    <SearchBar3
                      name="user"
                      placeholder="Search by user name"
                      data={res}
                      setValue={(val) => setUserInput(val)}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-12 mt-lg-0 mt-sm-4 ">
              <div className="row">
                <div className="col-12 centr">
                  <button type="button" className="btn btn-dark"
                   onClick={PostData} >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
      {filterData.map((elem,index)=>{
        return(<div className="col-lg-4 col-md-6 col-sm-12 cardscentre" key={index}>
          <SearchCards data={elem} />
        </div>
        )
      })
        
      }
        {/* <div className="col-lg-4 col-md-6 col-sm-12 cardscentre">
          <SearchCards />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 cardscentre">
          <SearchCards />
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 cardscentre">
          <SearchCards />
        </div> */}
      </div>
    </div>
  );
};
