import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css"

const Mathtype = () =>
    <div>
        <section className="login-block">
            <div className="container">
                <div className="row">
                    <div className="col login-sec">
                        <h2 id="textMathType" className="text-center">Choose a Math Type</h2>
                            <div className="row">
                                <div className="col-6">
                                    <Link type="button" className="btn btn-secondary btn-lg btn-block" to="/addition">
                                        Addition
                                    </Link>
                                </div>

                                <div className="col-6">
                                      <Link type="button" className="btn btn-secondary btn-lg btn-block" to="/subtraction">
                                        Subtraction
                                      </Link>
                                  
                                </div>

                                <div className="col login-sec">
                                    <div className="row">
                                        <div className="col-6">
                                            <button type="button" class="btn btn-secondary btn-lg btn-block">Multiplication</button>
                                        </div>

                                        <div className="col-6">
                                            <button type="button" class="btn btn-secondary btn-lg btn-block">Division</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
;

export default Mathtype;