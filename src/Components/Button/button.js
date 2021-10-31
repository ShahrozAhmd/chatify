import React from "react";

const Button = ({ click, text, bgColor, font, disable, icon }) => {
  return (
    <>
      <button
        className={`text-gray-500 
         border-gray-400 border
          p-3 
          tbl:w-4/5 
          lpt:w-4/5
          msm:w-4/5
          bg-no-repeat bg-left bg-contain rounded-lg 
          filter drop-shadow-sm hover:shadow
          text-center bg-${icon}`}
        onClick={click}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
