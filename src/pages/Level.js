import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";
import "./addition.css"

//Game difficulty level easy,medium, hard
class Level extends Component {
      render(){
        return(
              <div className="btn-group-vertical">
      
                <h1> Select Difficulty Level</h1>
                        <br></br>
                        <div className="col-8">
                                    <Link type="button" className="btn btn-secondary btn-lg btn-block" to="/Addition">
                                        Easy
                                    </Link>
                         </div>
                         <div className="col-8">
                                    <Link type="button" className="btn btn-secondary btn-lg btn-block" to="/Level">
                                        Medium
                                    </Link>
                         </div>
                         <div className="col-8">
                                    <Link type="button" className="btn btn-secondary btn-lg btn-block" to="/Level">
                                        Hard
                                    </Link>
                         </div>
              </div>
        );
   }
}

export default Level;


