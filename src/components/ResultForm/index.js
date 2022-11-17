import React from "react";

function Result({ resultFirstname, resultSecondname, setIsShowResult }) {
  const handleGoBack = () => setIsShowResult(true);
  return (
    <>
      <div className="container">
        <div className="form">
          <h4>Welcome to your account: </h4>
          <span>
            {resultFirstname} {resultSecondname}
          </span>{" "}
          <br />
          <button onClick={handleGoBack}>Go back</button>
        </div>
      </div>
    </>
  );
}

export default Result;
