import React from "react";
import "./index.scss";
function Form({ inputsValue, setInputsValue, setIsShowResult }) {
  const handleChangeInputValue = (e) => {
    const { name, value } = e.target;
    setInputsValue({ ...inputsValue, [name]: value });
  };

  const handleClickButton = () => {
    if (
      inputsValue.firstname.trim().length &&
      inputsValue.secondname.trim().length
    ) {
      setIsShowResult(false);
    }
  };

  return (
    <>
      <div className="container">
        <div className="form">
          <br />
          <input
            type="text"
            id="firstname"
            placeholder="Firstname"
            defaultValue={inputsValue.firstname}
            name="firstname"
            onChange={handleChangeInputValue}
          ></input>
          <br />
          <input
            type="text"
            id="secondname"
            placeholder="Secondname"
            defaultValue={inputsValue.secondname}
            name="secondname"
            onChange={handleChangeInputValue}
          ></input>
          <button onClick={handleClickButton}>Add User</button>
        </div>
      </div>
    </>
  );
}

export default Form;
