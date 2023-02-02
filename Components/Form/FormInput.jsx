import { Input } from "antd";
import React from "react";

const FormInput = ({ label, type = "text", style = {}, ...props }) => {
  return (
    <div >
      <label htmlFor={label}>{label}</label>
      <Input type={type} name={label} id={label} {...props} style={style} />
    </div>
  );
};

export { FormInput };
