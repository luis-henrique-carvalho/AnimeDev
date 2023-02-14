import React from "react";
import { useNavigate } from "react-router-dom";

const Button = ({ value, setSearch }) => {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/search?q=" + value);
  }
  
  return (
    <button value={value} onClick={handleSubmit}>
      {value}
    </button>
  );
};

export default Button;
