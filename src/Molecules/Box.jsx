// Box.js
import React from "react";
import Button from "../Atoms/Button";
import TickIcon from "../Atoms/TickIcon";

const Box = ({ title, price, features }) => {
  return (
    <div className="box-wrapper bg-white rounded-l rounded-r p-8 shadow-lg  mb-4 text-color-black">
      <h2 className="text-center">{title}</h2>
      <p className="text-center flex">
        ${price} <p>/ month</p>
      </p>
      <ul className="flex flex-col ">
        {features.map((feature, index) => (
          <li key={index} className="flex ">
            <TickIcon /> {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-4">Set Your Trial</Button>
    </div>
  );
};

export default Box;
