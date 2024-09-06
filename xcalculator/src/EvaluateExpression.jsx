// import React from "react";
// function EvaluateExpression({ expression }) {
//   console.log("Expression >>>", expression);
//   const expressionArr = expression.split("");
//   console.log("Arr >>>", expressionArr, typeof expressionArr);
//   for (let i = 0; i < expressionArr.length; i++) {
//     if (expressionArr[i] === "+") {
//       const firstHalf = expressionArr.slice(0, i);
//       console.log("FirstHalf >>>", firstHalf);
//       const secondHalf = expressionArr.slice(i + 1, expressionArr.length);
//       console.log("SecondHalf >>>", secondHalf);
//       const res = Number(firstHalf.join("")) + Number(secondHalf.join(""));
//       console.log("Result >>>", res, typeof res);
//     }
//   }
//   return <></>;
// }
// export default EvaluateExpression;
