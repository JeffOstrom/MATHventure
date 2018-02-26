import React from "react";

const SubmitBtn = props =>
    <button 
        className={`btn btn-success btn-lg text-center`} 
        onSubmit={props.onSubmit}
        type={`submit`}
        {...props}
    >
        Submit
    </button>
;

export default SubmitBtn;