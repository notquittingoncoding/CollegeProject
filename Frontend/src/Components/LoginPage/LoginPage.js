import React from 'react'
import './LoginPage.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import loginSideImage from './Images/loginImage.png'
import { NavLink } from "react-router-dom";
import Card from '../CreateExperience/Card/Card';

export const LoginPage = () => {
    return (
        
            <Card>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 col-sm-12 d-flex align-items-center justify-content-center">
                                    <img src={loginSideImage} alt="login form" className="img-style img-fluid" />
                                </div>
                                <div className="col-md-6 col-lg-7 col-sm-12 d-flex align-items-center">
                                    <div className="card-body p-3 p-lg-4 text-black">

                                        <form>

                                            <div className="d-flex align-items-center mb-2 pb-1">
                                                <i className="fas fa-car fa-2x me-3" style={{color: '#ff6219'}}></i>
                                                <span className="h1 fw-bold mb-0 brand-name">Traveller's Scout</span>
                                            </div>

                                            <div className="align-items-center mb-3 pb-1">
                                                <span className="h3 fw-bold mb-0 greet-hello">Hello,</span><br /> <span className="h1 fw-bold mb-0 greet-wlcm">Welcome!</span>
                                            </div>

                                            <h5 className="fw-normal mb-2 pb-3 signin-text">Sign into your account</h5>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="email" id="email-id" className="form-control form-control-md" placeholder='Enter Email'/>

                                            </div>

                                            <div className="form-outline mb-2">
                                                
                                                <input type="password" id="password" className="form-control form-control-md" placeholder="Password"/>

                                            </div>

                                            <div className="pt-1 mb-4">
                                                <button className="btn btn-dark btn-md" type="button">Login</button>
                                            </div>

                                            <NavLink to="#" className="small text-muted" href="#!">Forgot password?</NavLink>
                                            <p className="mb-3 pb-lg-2" style={{color: '#393f81'}}>Don't have an account? <NavLink to="/SignUp" style={{color: "#393f81;"}}>Sign Up</NavLink></p>
                                            {/* <NavLink to="#" href="#!" className="small text-muted">Terms of use</NavLink to="#">&nbsp;&nbsp;
                                            <NavLink to="#" href="#!" className="small text-muted">Privacy policy</NavLink to="#"> */}
                                        </form>

                                    </div>
                                </div>
                            </div>
                        
                   </Card>
        
    )
}

export default LoginPage
