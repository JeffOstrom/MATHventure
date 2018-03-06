import React, {Component} from "react";
import { Link } from "react-router-dom";
import ReactDOM from 'react-dom';
import "./assets/css/style.css";


//Results page. How many answer correct/incorrect
class Results extends Component {
    render(){
      return(
        <div class="jumbotron jumbotron-fluid">
            <div class="text-center">
             <h1 class="display-4">MATHventure</h1>
             <p class="lead">Results listed below</p>
            </div>
        </div>
        );
        
    }
}



export default Results;
