import React from "react";
import Input from "./Input";
import InputStyles from "./styles/inputs.module.css";
import PropTypes from "prop-types";

const InputWithIcon = (props) => {
  const { Icon, iconSize = 20, errors, ...rest } = props;
  const inputRef = React.createRef();
  const handleFocusInput = () => {
    if (!inputRef.current) return;
    inputRef.current.focus();
  };
  return (
    <div className={InputStyles.inputWrapper}>
      <div className={InputStyles.inputGroup}>
        {Icon && (
          <div className={InputStyles.iconWrapper} onClick={handleFocusInput}>
            <Icon size={iconSize} />
          </div>
        )}
        <div className={InputStyles.inputWrapper}>
          <Input
            ref={inputRef}
            className={errors?.length > 0 ? InputStyles.inputDanger : ""}
            {...rest}
          />
          {rest.type === "date" && (
            <label className={`${InputStyles.placeholderLabel}`}>
              {rest.placeholder}
            </label>
          )}
        </div>
      </div>

      <div className={InputStyles.errors}>
        {errors?.map((e) => (
          <span key={e} className={InputStyles.errorField}>
            {e}
          </span>
        ))}
      </div>
    </div>
  );
};

InputWithIcon.propTypes = {
  Icon: PropTypes.func,
  iconSize: PropTypes.number,
  errors: PropTypes.array,
};
export default InputWithIcon;
