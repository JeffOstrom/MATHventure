import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css"

const Newplayer = () =>
    <div>
        <section className="login-block">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 login-sec">
                        <h2 className="text-center">New Player</h2>
                        <form class="newplayer-form">
                            <div className="form-group">
                                <label for="userName" className="text">Username</label>
                                <input type="text" className="form-control" id="userName" placeholder="" required=""></input>
                            </div>
                            
                            <div className="form-group">
                                <label for="password" className="text">Password</label>
                                <input type="password" className="form-control" id="newPassword" placeholder="" required=""></input>
                            </div>

                            <div>
                                <label for="confirmPassword" className="text">Confirm Password</label>
                                <input type="password" className="form-control" id="confirmPassword" placeholder="" required="" onkeyup="checkPass(); return false;"></input>
                            </div>

                            <div>
                                <label for="dob" className="date">Birthday</label>
                                <input type="date" className="form-control" id="birthdate" placeholder="" required=""></input>
                            </div>

                            <div>
                                <label for="dob" className="text">Parents Email address</label>
                                <input type="email" className="form-control" id="email" placeholder=""></input>
                            </div>

                            <div className="form-check">
                                <br></br>
                                <Link className="btn btn-login float-right" id="btnSubmit" value="Submit" type="submit" to="/mathtype">
                                    Submit
                                </Link>
                                
                            </div>
                        </form>
                    </div>

                    <div className="col-md-8 banner-sec">
                        <img id="logo" src="./assets/images/mv.png" alt="mathventure"></img>
                    </div>
                </div>
            </div>
        </section>
    </div>
;

export default Newplayer;