import React, { useState } from "react";
import styles from "./Calculator.module.css";
function Calculator() {
  const [input, setInput] = useState("");
  const [evaluatedValue, setEvaluatedValue] = useState(null);

  const handleInputButtonValues = (e) => {
    const value = e.target.textContent;
    setInput((prevInput) => prevInput + value);
  };

  const clearInputBox = () => {
    setInput("");
  };

  const calculateExpression = () => {
    // Check for incomplete expressions
    if (!input || /[\+\-\*\/]$/.test(input)) {
      // Checks if input is empty or ends with an operator
      setEvaluatedValue("Error");
      return;
    }

    try {
      const res = eval(input); // Using eval for simplicity, but avoid in production
      setEvaluatedValue(res);
    } catch (error) {
      setEvaluatedValue("Error"); // Set to "Error" if evaluation fails
    }
  };

  console.log("EvaluatedValue >>>>", evaluatedValue);
  //   const [operation, setOperation] = useState(null);
  //   const inputRef = useRef(0);

  //   const getButtonDigitValues = (e) => {
  //     const num = Number(e.target.textContent);
  //     console.log("Num >>>>", num);
  //     inputRef.current.value = num;
  //     console.log("inputValue >>>", inputRef.current.value);
  //     setDigit((prevDigit) => Number(prevDigit + "" + num));

  //     // inputRef.current.value = Number(e.target.textContent);
  //     // console.log("InputRef >>>", inputRef);
  //     // console.log("Current >>>", inputRef.current);
  //     // console.log("value >>>", typeof inputRef.current.value);
  //     // console.log(inputRef.current.valueOf);
  //   };
  //   const getButtonOperands = (e) => {
  //     setOperation(e.target.textContent);
  //   };
  console.log("Pressed expression >>>", input);

  return (
    <>
      <h1 className={styles.h1}>React Calculator</h1>
      <input readOnly type="text" value={input} className={styles.input} />
      {evaluatedValue && <h3>{evaluatedValue}</h3>}
      <div className={styles.buttonDiv}>
        <button onClick={handleInputButtonValues}>7</button>
        <button onClick={handleInputButtonValues}>8</button>
        <button onClick={handleInputButtonValues}>9</button>
        <button onClick={handleInputButtonValues}>+</button>

        <button onClick={handleInputButtonValues}>4</button>
        <button onClick={handleInputButtonValues}>5</button>
        <button onClick={handleInputButtonValues}>6</button>
        <button onClick={handleInputButtonValues}>-</button>

        <button onClick={handleInputButtonValues}>1</button>
        <button onClick={handleInputButtonValues}>2</button>
        <button onClick={handleInputButtonValues}>3</button>
        <button onClick={handleInputButtonValues}>*</button>

        <button onClick={clearInputBox}>C</button>
        <button onClick={handleInputButtonValues}>0</button>
        <button onClick={calculateExpression}>=</button>
        <button onClick={handleInputButtonValues}>/</button>
      </div>
    </>
  );
}
export default Calculator;
