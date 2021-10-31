import React from "react";

const Title = ({ content, tagline }) => {
  return (
    <>
      <h1 className="font-sans text-3xl font-bold ">{content}</h1>
      <p className="text-gray-400">{tagline}</p>
    </>
  );
};

export default Title;
