import React, { useState } from "react";
import classes from "./SignupPage.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUpImage from "./Images/SignupImage.png";
import { NavLink } from "react-router-dom";
import Card from "../CreateExperience/Card/Card";
import {useHistory} from "react-router-dom";


export const SignupPage = () => {
  const history=useHistory();
  const [user, setUser] = useState({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmpassword: "",
      photo:""

  })
  let name, value;
  const handleInputs = (e) => {
      name = e.target.name;
      value = e.target.value;
      setUser({ ...user, [name]: value });
  }
  const uploadImage = (e) => {
    e.preventDefault();
    setUser({ ...user, photo: e.target.files[0] });
    console.log(e.target.files[0]);

}
  const PostData = async(e)=>{
    e.preventDefault();
    const {name,username,email,password,confirmpassword,photo}=user;
    if(!name || !username || !email || !password || !confirmpassword || !photo)
    {
      alert("Fill all fields");
    }
    else if(confirmpassword!==password){
    alert("password mismatch");

    }
    else{

try{
    await fetch("/auth/register",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name,username,email,password,confirmpassword,photo
        })
    });
  }
  catch(err)
  {
    console.log(err);
  }
}
}
  return (

    <Card>
      <div className="row g-0">
        <div className="col-md-6 col-lg-5 col-sm-12 d-none d-md-flex align-items-center justify-content-center">
          <img
            src={SignUpImage}
            alt="login form"
            className={"img-fluid " + classes.imgStyle}
          />
        </div>

        <div className="col-md-6 col-lg-7 col-sm-12 d-flex align-items-center">
          <div className="card-body p-3 p-lg-4 text-black">
            <form>
              <div className="d-flex align-items-center mb-2 pb-1">
                <span className={"h1 fw-bold mb-0 "+ classes.brandName}>
                  Welcome to Traveller's Scout
                </span>
              </div>

              <h5 className={"fw-normal mb-2 pb-3 " + classes.signinText}>
                Create a new account
              </h5>

              <div className="form-outline mb-2">
                <input
                  type="text"
                  name="name"
                  value={user.name}
                  className="form-control form-control-md"
                  placeholder="enter your name*"
                  onChange={handleInputs}
                  required 

                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="text"
                  name="username"
                  value={user.username}
                  className="form-control form-control-md"
                  placeholder="enter username*"
                  onChange={handleInputs}
                  required 

                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  className="form-control form-control-md"
                  placeholder="email*"
                  onChange={handleInputs}
                  required 

                />
              </div>

              <div className="form-outline mb-2">
                <input
                  type="password"
       
                  name="password"
                  value={user.password}
                  className="form-control form-control-md"
                  placeholder="password*"
                  onChange={handleInputs}
                  required 

                />
              </div>
              <div className="form-outline mb-4">
                <input
                  type="password"
               
                  name="confirmpassword"
                  value={user.confirmpassword}
                  className="form-control form-control-md"
                  placeholder="verify password*"
                  onChange={handleInputs}
                  required 

                />
              </div>

              <div className="mb-2">
                <label htmlFor="choose-files" className={"form-label mb-0 "+classes.labelStyle}>Add a profile picture</label>
                <input
                  className="form-control"
                  type="file"
                  alt='Picture of a destination'
                  name="photo" 
                  onChange={uploadImage}
                  accept="image/*"
                  placeholder="Add a profile picture"
                />
              </div>

              <div className="pt-1 mb-4">
                <button className="btn btn-dark btn-md" type="button"
                onClick={PostData} >
                  Sign Up
                </button>
                <br />
                <span className="small text-danger">fields marked * are required 
                </span>
              </div>
            </form>
            <a className="small text-muted" href="#!">
              Forgot password?
            </a>
            <p className="mb-3 pb-lg-2" style={{ color: "#393f81" }}>
              Already have an account?{" "}
              <NavLink to="/Login" style={{ color: "#393f81" }}>
                Log In
              </NavLink>
            </p>
            <a href="#!" className="small text-muted">
              Terms of use
            </a>
            &nbsp;&nbsp;
            <a href="#!" className="small text-muted">
              Privacy policy
            </a>
          </div>
        </div>
      </div>
    </Card>

  );
};

export default SignupPage;
