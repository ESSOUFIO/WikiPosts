import "./InputFiltre.css";

import React from "react";
import { Post_Context } from "../../Context/PostContext";

const InputFiltre = () => {
  const { getFiltreInput } = Post_Context();
  return (
    <input
      type="text"
      className="InputFiltre form-control"
      placeholder="Filter by title.."
      onChange={(e) => getFiltreInput(e.target.value)}
    />
  );
};

export default InputFiltre;
