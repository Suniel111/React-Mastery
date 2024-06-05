import React from "react";

const Students = (props) => {
  return (
    <div className="text-2xl font-bold w-full text-center p-4 bg-slate-400">
      Hi there, my name's {props.name} and my age is {props.age}
    </div>
  );
};

export default Students;
