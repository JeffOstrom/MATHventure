import React from "react";
import "./RadioButtons.css"

const RadioButtons = props => (
        <label onClick={props.handleClick}
            className={`radio-inline btn btn-warning mx-3 color`}
        ><input type="radio" name="optradio" className="buttonNumber" {...props}></input>

        {props["data-value"]}
        
        </label>
);

export default RadioButtons