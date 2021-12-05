import { useState } from "react";
import { NavLink } from "react-router-dom";
import classes from "./CreateExperience.module.css";
import Card from "./Card/Card";

const CreateExperience = () => {
  const [data, setData] = useState({
    title: "",
    city: "",
    description: "",
    photo: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const uploadImage = (e) => {
    e.preventDefault();
    setData({ ...data, photo: e.target.files[0] });
    console.log(e.target.files[0]);
  };

  const PostData = async (e) => {
    e.preventDefault();
    const { title, city, description, photo } = data;
    if (!title || !city || !description || !photo) {
      alert("Fill all fields");
    } else {
      try {
        await fetch("/destinations", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            city,
            description,
            photo,
          }),
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    // <div className="background">
    <Card className={classes.background}>
      <div className="row my-3">
        <h1 className={"text-center mb-4 " + classes.heading}>
          Add a new travel experience
        </h1>
        <div className="col-md-9 mx-auto">
          <form method="POST" encType="multipart/form-data">
            <div className="mb-3">
              <label className={"form-label " + classes.labelStyle} for="title">
                Name of Destination
              </label>
              <input
                className="form-control"
                type="text"
                id="title"
                name="title"
                onChange={handleInputs}
                value={data.title}
                required
              />
            </div>
            <div className="mb-3">
              <label className={"form-label " + classes.labelStyle} for="city">
                City
              </label>
              <input
                className="form-control"
                type="text"
                id="city"
                name="city"
                onChange={handleInputs}
                value={data.city}
                required
              />
            </div>

            {/* <div className="mb-3">
                            <label className={"form-label " + classes.labelStyle} for="price">Estimated Cost</label>
                            <div className="input-group">
                                <span className="input-group-text" id="price-label">Rs.</span>
                                <input type="text" className="form-control" id="price" placeholder="0.00" aria-label="price"
                                    aria-describedby="price-label" name="price" />
                            </div>
                        </div> */}

            <div className="mb-3">
              <label
                className={"form-label " + classes.labelStyle}
                for="description"
              >
                Write your experience
              </label>
              <textarea
                className="form-control"
                type="text"
                id="description"
                name="description"
                onChange={handleInputs}
                value={data.description}
                required
              ></textarea>
            </div>
            <div className="mb-3">
              <label
                for="choose-files"
                className={"form-label " + classes.labelStyle}
              >
                Add Images
              </label>
              <input
                className="form-control"
                type="file"
                alt="Picture of a destination"
                name="photo"
                onChange={uploadImage}
                accept="image/*"
                multiple
              />
            </div>
            <div className="mb-3">
              <button className="btn btn-success" onClick={PostData}>
                Share your experience
              </button>
            </div>
          </form>
          <NavLink to="/">Back to Landing</NavLink>
        </div>
      </div>
    </Card>
    // </div>
  );
};

export default CreateExperience;
