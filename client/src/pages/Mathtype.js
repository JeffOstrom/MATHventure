import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";
import logo from "./assets/images/background.svg"

const Mathtype = () =>
    <div>
        <section className="login-block">
            <div className="container">
                <div className="col-sm-12">
                    <img id="logoMathType" src={logo} alt="mathventure" align="center"></img>
                </div>    
                <div className="row">
                    <div className="col login-sec">
                        <h2 id="textMathType" className="text-center">Choose a MATHventure!</h2>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                        Addition
                                    </button>
                                </div>

                                <div className="col-6">
                                      <button type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                        Subtraction
                                      </button>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-6">
                                    <button type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                        Multiplication 
                                    </button>
                                </div>

                                <div className="col-6">
                                      <button type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                         Division
                                      </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
;

export default Mathtype;