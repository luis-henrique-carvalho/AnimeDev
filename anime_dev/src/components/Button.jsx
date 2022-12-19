import React from "react";

const Button = ({ value, setSearch }) => {
  return (
    <button value={value} onClick={(e) => setSearch(e.target.value)}>
      {value}
    </button>
  );
};

export default Button;
