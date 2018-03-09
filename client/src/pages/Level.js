 import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import "./addition.css";
import logo from "./assets/images/background.svg"

//Game difficulty level easy,medium, hard
class Level extends Component {

    state={
         button1: false,
         button2: false,
         button3: false,
         UserState: " "
        };

levelSelect = (event) => {

    //allow user to select diffuclty based on how many points they have in the DB. Unlock only the buttons which are avaliable. Use state of user in DB

    /* if state of user in DB is _____ change state of button1 to true*/
    /* if state of user in DB is _____ change state of buttons 1 and 2 to true*/
    /* if state of user in DB is _____ change state of buttons 1, 2 and 3 to true*/

    // put as onCLick event for each button

    // this.props.history.push("/Addition");
}
      render(){
        return(
             
        <section className="login-block" id="mathLevelLogin">
            <div className="container">
                <div className="col-sm-12">
                    <img id="logoMathLevel" src={logo} alt="mathventure" align="center"></img>
                </div>    
                <div className="row">
                    <div className="col login-sec" align= "center">
                        <h2 id="textMathLevel" className="text-center">Select a difficulty level.</h2>
                            <div className="col-8">
                                    <Link type="button1" id="buttonLevel" className="btn btn btn-lg btn-block" to="/Addition">
                                        Easy
                                    </Link>
                         </div>
                         <div className="col-8">
                                    <Link type="button2" id="buttonLevel" className="btn btn btn-lg btn-block" to="/Level">
                                        Medium
                                    </Link>
                         </div>
                         <div className="col-8">
                                    <Link type="button3" id="buttonLevel" className="btn btn btn-lg btn-block" to="/Level">
                                        Hard
                                    </Link>
                         </div>
                    </div>
                    
                </div>
            </div>
        </section>

              
        );
   }
}

export default Level;


