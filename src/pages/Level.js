import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";

//Game difficulty level easy,medium, hard
class Level extends Component {
      render(){
        return(
              <div class="btn-group-vertical">
      
                <h1> Select Difficulty Level</h1>
                        <br></br>

                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Easy</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Medium</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hard</button>
              </div>
        );
   }
}

export default Level;


