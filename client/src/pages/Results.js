import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import logo from "./assets/images/background.svg"


//Results page. How many answer correct/incorrect
class Results extends Component {
 handleSubmit = (event) => {
    event.preventDefault();
            this.props.history.push("/mathtype");
 }

    render(){
      return(
 

  <div className="card" >
     <img className="card-img-top" src={logo} alt="MATHventure"/>
          <div className="card-body">
            <h5 className="card-title-center">RESULTS</h5>
                
                   <button id="playagain" className="btn btn-primary" type= "button" onClick={this.handleSubmit}>Play Again</button>
          </div>
  </div>
        
      

        );
        
    }
}



export default Results;
