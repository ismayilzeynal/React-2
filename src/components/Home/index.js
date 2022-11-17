import React from "react";
import { useState } from "react";
import Form from "../Form";
import Result from "../ResultForm";
function Home() {
  const [state, setState] = useState();
  const [inputsValue, setInputValue] = useState({
    firstname: "",
    secondname: "",
  });
  const [isShowResult, setIsShownResult] = useState(true);
  return (
    <>
      {isShowResult ? (
        <Form
          inputsValue={inputsValue}
          setInputsValue={setInputValue}
          setIsShowResult={setIsShownResult}
        />
      ) : (
        <>
          <Result
            resultFirstname={inputsValue.firstname}
            resultSecondname={inputsValue.secondname}
            setIsShowResult={setIsShownResult}
          />
        </>
      )}
    </>
  );
}

export default Home;
