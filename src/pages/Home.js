import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css"
import logo from "./assets/images/background.jpg"


const Home = () =>
<div>
<br/>
<br/>
<br/>
<br/>
<br/>
    <div className="container">
           <div class = "row">
                <div className="col-6 offset-sm-1">
                    <br/>
                    <img id="logo" src={logo} alt="mathventure"/>
                </div>	
                <div id="playerButtons" className="col-3 offset-sm-1">
                        <Link id="button" className="btn btn-primary btn-lg btn-block" to="/newplayer">
                            New Player
                        </Link>
                        
                         <Link id="button" className="btn btn-primary btn-lg btn-block" to="/returningplayer">
                            Returning Player
                        </Link>
                </div>		
            </div>
    </div>
</div>

export default Home;