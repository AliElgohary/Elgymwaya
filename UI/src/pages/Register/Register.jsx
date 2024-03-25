import { useMemo, useState, useEffect } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../thunks/registerUser";
import axios from "axios";
import { toast } from "react-toastify";
import { loginSuccess } from "../../store/action/authActions";
import { fetchCurrentUser } from "./../../thunks/me";
const Register = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    full_name: "",
    email: "",
    weight: undefined,
    height: undefined,
    birth_date: undefined,
    phone_number: "",
    password: undefined,
    Cpassword: undefined,
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const navigate = useNavigate();

  const validationRules = useMemo(
    () => ({
      full_name: Joi.string()
        .min(3)
        .max(50)
        .pattern(/^[A-Za-z]+(?:\s[A-Za-z]+)*$/)
        .message(
          "Name must only contain letters and single spaces between words"
        )
        .required()
        .label("full_name"),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .label("email"),
      weight: Joi.number().required().max(400).label("weight"),
      height: Joi.number().required().max(400).label("height"),
      birth_date: Joi.date().required().label("birth_date"),
      phone_number: Joi.string()
        .required()
        .pattern(/^(01)[0-9]{9}$/)
        .messages({
          "string.pattern.base": "Please enter a valid Egyptian phone number.",
        })
        .label("phone_number"),
      password: Joi.string()
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,20}$/)
        .message(
          "invalid password :Password must be(one digit-one uppercase letter-one lowercase letter"
        ),
      Cpassword: Joi.string().required().label("Cpassword"),
    }),
    []
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validatedKeys = Object.keys(validationRules);
    let valid = true;
    let confirmPasswordError = "";
    for (const key of validatedKeys) {
      if (key !== "Cpassword") {
        const errors = validate(key, data[key]);
        if (errors.length) {
          valid = false;
          setErrors((prev) => ({ ...prev, [key]: errors }));
        }
      }
    }

    // Validate confirmPassword
    if (data.password !== data.Cpassword) {
      valid = false;
      confirmPasswordError = "Passwords do not match";
      setErrors((prev) => ({ ...prev, Cpassword: [confirmPasswordError] }));
    } else {
      setErrors((prev) => ({ ...prev, Cpassword: [] }));
    }
    if (valid) {
      setLoading(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/client/signup",
          data
        );
        console.log("Registration successful:", response.data);
        const token = response.data.token;
        localStorage.setItem("token", token); // Save token to local storage
        dispatch(loginSuccess(token)); // Dispatch loginSuccess action to update authentication state
        dispatch(fetchCurrentUser()); // Call fetchCurrentUser to get current user data
        navigate("/plans");
      } catch (error) {
        console.error("Error registering user:", error);
        setErrors("Registration failed. Please try again later.");
        const msg = error.response?.data;
        if (msg && typeof msg == "string") {
          toast.error(msg);
        }
      } finally {
        setLoading(false);
      }
      // =======
      await dispatch(
        register(
          data.full_name,
          data.email,
          data.weight,
          data.height,
          data.birth_date,
          data.phone_number,
          data.password,
          data.Cpassword
        )
      );
    }
  };

  useEffect(() => {
    console.log("isAuthenticated changed:", isAuthenticated);
    if (isAuthenticated) {
      navigate("/plans");
    }
  }, [isAuthenticated, navigate]);
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
              onChange={(e) => handleInputChange(e, "full_name")}
              errors={errors["full_name"]}
              placeholder={"Full Name"}
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
              type="date"
              className="text-secondary"
              onChange={(e) => handleInputChange(e, "birth_date")}
              placeholder={"date"}
              errors={errors["birth_date"]}
              Icon={IoPersonOutline}
            />
            <InputWithIcon
              type="number"
              onChange={(e) => handleInputChange(e, "phone_number")}
              placeholder={"phone number"}
              errors={errors["phone_number"]}
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
              onChange={(e) => handleInputChange(e, "Cpassword")}
              placeholder={"confirm password"}
              errors={errors["Cpassword"]}
              Icon={IoLockClosed}
            />
          </div>
          <button className={styles.btn} type="submit" disabled={loading}>
            Register
          </button>
          <h6 className="text-muted ">
            Already have an account ?
            <Link to="/login" className="text-decoration-none">
              <span className="text-dark mx-2 fw-bold ">Login Now</span>
            </Link>
          </h6>
        </form>
      </div>
    </div>
  );
};

export default Register;
