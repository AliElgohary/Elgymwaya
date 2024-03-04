import { useMemo, useState } from "react";
import InputWithIcon from "../../components/common/InputWithIcon";
import styles from "./Register.module.css";
import {
  IoBarbellOutline,
  IoPerson,
  IoLockClosed,
  IoPersonOutline,
} from "react-icons/io5";
import { FaWeightScale, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { CiLineHeight } from "react-icons/ci";
import Joi from "joi";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    weight: undefined,
    height: undefined,
    age: undefined,
    phoneNumber: undefined,
    password: undefined,
    cPassword: undefined,
  });
  const [errors, setErrors] = useState({}); // [key: string] : string[]  {"name": ["name is required", "name must be at least 5 chars"]}
  const validationRules = useMemo(
    () => ({
      name: Joi.string().required().label("name"),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("email"),
      weight: Joi.number().required().label("weight"),
      height: Joi.number().required().label("height"),
      age: Joi.number().required().label("age"),
      phoneNumber: Joi.number().required().label("phoneNumber"),
      password: Joi.string().required().label("password"),
      cPassword: Joi.string().required().label("cPassword"),
    }),
    []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const validatedKeys = Object.keys(validationRules);
    let valid = true;
    for (const key of validatedKeys) {
      const errors = validate(key, data[key]);
      if (errors.length) {
        valid = false;
        setErrors((prev) => ({ ...prev, [key]: errors }));
      }
    }
    if (valid) {
      //TODO: send api
      alert(JSON.stringify(data));
    }
  };

  const validate = (key, value) => {
    const validationRule = validationRules[key];
    const validationResult = validationRule.validate(value);
    if (validationResult.error) {
      return validationResult.error.details.map((d) => d.message);
    }
    return [];
  };
  const handleInputChange = (e, key) => {
    const val = e.target.value;
    const errors = validate(key, val);
    if (errors.length) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [key]: errors,
      }));
    } else {
      setErrors((prev) => ({ ...prev, [key]: [] }));
      setData((prev) => ({ ...prev, [key]: val }));
    }
  };
  return (
    <div className={`container ${styles.loginHolder}`}>
      <div className={styles.custom_form_holder}>
        <form className={styles.custom_form} onSubmit={handleSubmit}>
          <h1 className={`${styles.gym_title} fw-bold`}>
            ELGYMAWEYA
            <IoBarbellOutline size={60} />
          </h1>
          <h3 className="fw-bold">Register</h3>
          <h6 className="text-muted mb-4 ">Create your gym membership now</h6>
          <div className={styles.inputsWrapper}>
            <InputWithIcon
              type="text"
              onChange={(e) => handleInputChange(e, "name")}
              errors={errors["name"]}
              placeholder={"name"}
              Icon={IoPerson}
            />
            <InputWithIcon
              type="email"
              onChange={(e) => handleInputChange(e, "email")}
              placeholder={"email"}
              errors={errors["email"]}
              Icon={MdEmail}
            />
            <InputWithIcon
              type="number"
              onChange={(e) => handleInputChange(e, "weight")}
              placeholder={"weight"}
              errors={errors["weight"]}
              Icon={FaWeightScale}
            />
            <InputWithIcon
              type="number"
              onChange={(e) => handleInputChange(e, "height")}
              placeholder={"height"}
              errors={errors["height"]}
              Icon={CiLineHeight}
            />
            <InputWithIcon
              type="number"
              onChange={(e) => handleInputChange(e, "age")}
              placeholder={"age"}
              errors={errors["age"]}
              Icon={IoPersonOutline}
            />
            <InputWithIcon
              type="number"
              onChange={(e) => handleInputChange(e, "phoneNumber")}
              placeholder={"phone number"}
              errors={errors["phoneNumber"]}
              Icon={FaPhone}
            />
            <InputWithIcon
              type="password"
              onChange={(e) => handleInputChange(e, "password")}
              placeholder={"password"}
              errors={errors["password"]}
              Icon={IoLockClosed}
            />
            <InputWithIcon
              type="password"
              onChange={(e) => handleInputChange(e, "cPassword")}
              placeholder={"confirm password"}
              errors={errors["cPassword"]}
              Icon={IoLockClosed}
            />
          </div>
          <button className={styles.btn} type="submit">
            Register
          </button>
          <h6 className="text-muted ">
            Already have an account ?
            <span className="text-dark mx-2 fw-bold ">Login Now</span>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Register;
