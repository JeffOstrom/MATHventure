import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./assets/css/style.css";
import logo from "./assets/images/background.svg"

class Mathtype extends Component {

     state={
            name: '',
        };

        

handleSubmit = (event) => {
    const {name,value} = event.target;
    event.preventDefault();
    if (name === "Addition"){
            this.props.history.push("/LevelAddition");
            }

    if (name === "Subtraction"){
            this.props.history.push ("/LevelSubtraction");
            }

    if (name === "Multiplication"){
            this.props.history.push ("/LevelMultiplication");
            }
    else if (name === "Division"){
            this.props.history.push ("/level");
            }
    }

 render(){
      return(
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
                                    <button onClick={this.handleSubmit}  name = "Addition" type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                        Addition
                                    </button>
                                </div>

                                <div className="col-6">
                                      <button onClick={this.handleSubmit}  name = "Subtraction" type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                        Subtraction
                                      </button>
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-6">
                                    <button onClick={this.handleSubmit}  name = "Multiplication" type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                        Multiplication 
                                    </button>
                                </div>

                                <div className="col-6">
                                      <button onClick={this.handleSubmit}  name = "Division" type="button" className="btn btn-secondary btn-lg btn-block" id="buttonMathType">
                                         Division
                                      </button>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
);
}
}


export default Mathtype;