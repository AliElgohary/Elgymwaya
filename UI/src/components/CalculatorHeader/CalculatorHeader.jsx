/* eslint-disable react/prop-types */
import logoSrc from "../../assets/main_icon/logo_light.png";
import style from "./CalculatorHeader.module.css";

function CalculatorHeader({headerTitle}) {
  return (
    <>
      <div className="text-center mt-5 mb-3">
            <img src={logoSrc} className={style.logo} alt="" />
            <h1 className={`${style.textHeader} text-light fs-3`} >{headerTitle}</h1>
      </div>
    </>
  );
}

export default CalculatorHeader;
