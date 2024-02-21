import React from "react";
import Button from "../Atoms/Button";
import TickIcon from "../Atoms/TickIcon";

const Box = ({ title, price, features, index }) => {
  const handleClick = () => {
    console.log("Button clicked!");
  };

  // Define a function to determine the button color based on its index
  const getButtonColor = (currentIndex) => {
    // Check if the button is the middle one
    if (currentIndex === 1) {
      return "bg-purple-500 text-white"; // Apply purple color
    }
    return "bg-white text-black";
  };

  // Define border style for the middle box
  const borderStyle = index === 1 ? "border border-purple-500" : "";

  return (
    <div className={`box-wrapper bg-white rounded-l rounded-r shadow-lg text-color-black ${borderStyle}`}>
      {/* Add "Most Popular" text in line with the border */}
      {index === 1 && (
        <div className="absolute ml-20 -mt-2 bg-purple-500 rounded-lg">
          <p className="text-white px-3" style={{ fontSize: "10px" }}>
            MOST POPULAR
          </p>
        </div>
      )}
      <div className="pb-10 px-4 flex flex-col items-center">
        <h2 className="text-center pt-5 pb-3 text-lg md:text-xl font-bold ">{title}</h2>
        <p className="text-center flex items-center">
          <span className="mr-1 text-4xl md:text-5xl font-bold">${price}</span>
          <span className="text-sm md:text-base">/ month</span>
        </p>
      </div>

      <div className="bg-gray-100 py-7 px-4 relative">
        <ul className="flex flex-col">
          {features.map((feature, index) => (
            <li key={index} className="flex mt-3 text-sm md:text-base whitespace-nowrap">
              <TickIcon /> <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <Button
          onClick={handleClick}
          className={`py-2 px-4 shadow-xl mt-4 w-full ${getButtonColor(index)}`}
        >
          Start your trial
        </Button>
      </div>
    </div>
  );
};

export default Box;
