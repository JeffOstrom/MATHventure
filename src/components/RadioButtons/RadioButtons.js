import React from "react";
import "./RadioButtons.css"

const RadioButtons = props => (
        <label onClick={props.handleClick}
            className={`radio-inline btn btn-warning mx-3`}
        ><input type="radio" name="optradio" {...props}></input>

        {props["data-value"]}
        
        </label>
);

export default RadioButtons