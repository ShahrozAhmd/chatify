import React from "react";

const ErrorBar = ({errorMessage}) => {
    console.log(errorMessage)
    return <div
      className=" 
      text-center	
      w-4/5	
        border 
        rounded-sm
        bg-red-600
        text-white"
	
    >
    {errorMessage}
    </div>
  
};

export default ErrorBar;
