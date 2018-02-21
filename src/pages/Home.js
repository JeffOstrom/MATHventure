import React from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";
import mv from  './assets/images/mv.png'



const Home = () =>
    <div id="jumbotron" className="container-fluid">
        <div id="jumbotron" className="jumbotron jumbotron-fluid">
            <div className="row">
                <div className="col-6 offset-sm-1">
                    <img src={mv} className="mv" alt="logo" />
                </div>	

                <div id="playerButtons" className="col-3 offset-sm-1">
                        <Link id="button" className="btn btn-primary btn-lg btn-block" to="/newplayer">
                            New Player
                        </Link>
                        
                        <button id="button" href="formReturningPlayer.html" className="btn btn-primary btn-lg btn-block">Returning Player</button>
                </div>		
            </div>
 	    </div>
    </div>
;

export default Home;