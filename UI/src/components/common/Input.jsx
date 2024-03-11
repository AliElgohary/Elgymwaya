import clsx from "clsx";
import PropTypes from "prop-types";
import InputStyles from "./styles/inputs.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  const { type, value, onChange, className, ...rest } = props;
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      className={clsx(InputStyles.input, className)}
      ref={ref}
      {...rest}
    />
  );
});

Input.displayName = "Input";
Input.propTypes = {
  type: PropTypes.oneOf(["text", "password", "email", "date", "number"])
    .isRequired,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};
export default Input;
