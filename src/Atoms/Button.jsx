import React from 'react';

const Button = ({ onClick, children }) => {
  return (
    <button onClick={onClick} className="btn bg-blue-500 text-white">
    {children}
  </button>
  );
};

export default Button;
