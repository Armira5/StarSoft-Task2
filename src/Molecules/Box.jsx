// Box.js
import React from "react";
import Button from "../Atoms/Button";
import TickIcon from "../Atoms/TickIcon";

const Box = ({ title, price, features }) => {
  return (
    <div className="box-wrapper bg-white rounded-xl p-8 shadow-lg mx-4 mb-4 ">
      <h2 className="text-center">{title}</h2>
      <p className="text-center">${price} / month</p>
      <ul className="flex flex-col items-center">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <TickIcon /> {feature}
          </li>
        ))}
      </ul>
      <Button className="mt-4">Set Your Trial</Button>
    </div>
  );
};

export default Box;
