import React from "react";

const Card = (props) => {
  return (
    <div className="flex justify-center flex-wrap p-2 w-64 m-4 hover:shadow-xl shadow-2xl">
      <div className="flex flex-wrap">
        <img
          src={props.img}
          alt=""
          width={200}
          height={300}
          className="rounded-xl"
        />
        <h1 className="text-xl font-sans font-bold w-full text-sky-900">
          <span className="text-xl text-red-600">Name:</span> {props.title}
        </h1>
        <h2 className="text-md font-mono w-full text-blue-800">
          Birth: {props.year}
        </h2>
        <h2 className="text-md font-mono w-full text-blue-800">
          Nationality: {props.nationality}
        </h2>
        <h2 className="block text-md font-mono w-full text-blue-800">
          known-for: {props.known}
        </h2>
      </div>
    </div>
  );
};

export default Card;
