import styles from "./SubscriptionMonths.module.css";
import { FaCreditCard } from "react-icons/fa";
import InputWithIcon from "./../../components/common/InputWithIcon";
import { useState } from "react";
import { useMemo } from "react";
import Joi from "joi";

const SubscriptionMonths = () => {
  const [data, setData] = useState({
    subscription: "",
  });
  const [errors, setErrors] = useState({}); // [key: string] : string[]  {"name": ["name is required", "name must be at least 5 chars"]}
  const validationRules = useMemo(
    () => ({
      subscription: Joi.number()
        .min(1)
        .max(12)
        .messages({
          "number.min": "Please enter a valid number",
          "number.max": "The maximum of subscriptions is 12 months",
        })
        .required()
        .label("subscription"),
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
          <h3 className={`${styles.gym_title} fw-bold`}>
            Welcome To Elgymaweya Gold Plan
          </h3>
          <h4 className="text-muted mb-4 mt-2">
            Enter Your Subscription Months
          </h4>
          <div className={styles.inputsWrapper}>
            <InputWithIcon
              type="number"
              onChange={(e) => handleInputChange(e, "subscription")}
              placeholder={"subscription"}
              errors={errors["subscription"]}
              Icon={FaCreditCard}
            />
          </div>
          <button className={styles.btn} type="submit">
            Subscrip Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscriptionMonths;
