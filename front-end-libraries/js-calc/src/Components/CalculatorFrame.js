import { useState } from "react";
import Button from "./Button";
import ResultField from "./ResultField";
import "./CalculatorFrame.css";

function CalculatorFrame() {
  const [currentExpression, setCurrentExpression] = useState("");
  const [currentOperand, setCurrentOperand] = useState("0");
  const [evaluated, setEvaluated] = useState(false);
  const handleOperandChange = (value) => {
    if (!isNaN(value) || value === ".") {
      if (isNaN(currentOperand) && !evaluated) {
        setCurrentOperand(currentOperand.substr(1).concat(value));
        setCurrentExpression(currentExpression.concat(value));
      } else {
        if (evaluated) {
          setCurrentOperand(value);
          setCurrentExpression(value);
          setEvaluated(false);
        } else {
          if (currentOperand === "0") {
            setCurrentOperand(currentOperand.substr(1).concat(value));
          } else {
            setCurrentOperand(currentOperand.concat(value));
          }
          setCurrentExpression(currentExpression.concat(value));
        }
      }
    } else if (value === "AC") {
      setCurrentOperand("0");
      setCurrentExpression("");
    } else if (value === "=") {
      evaluateExpression(value);
    } else {
      if (isOperand(currentExpression[currentExpression.length - 1])) {
        setCurrentExpression(currentExpression.slice(0, -1).concat(value));
      } else {
        setCurrentExpression(currentExpression.concat(value));
      }
      setCurrentOperand(value);
    }
  };

  const evaluateExpression = (value) => {
    const result = eval(currentExpression);
    setCurrentExpression(currentExpression.concat(`${value} ${result}`));
    setCurrentOperand(result);
    setEvaluated(true);
  };
  const isOperand = (value) => {
    return value === "-" || value === "+" || value === "*" || value === "/";
  };
  return (
    <div id="calcWrapper">
      <div className="CalculatorFrame">
        <div className="ResultFrame">
          <ResultField
            expression={currentExpression}
            operand={currentOperand}
          />
        </div>
        <div className="ButtonFrame">
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"seven"}
            character={7}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"eight"}
            character={8}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"nine"}
            character={9}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"four"}
            character={4}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"five"}
            character={5}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"six"}
            character={6}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"one"}
            character={1}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"two"}
            character={2}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"three"}
            character={3}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"zero"}
            character={0}
          />
          <Button
            setOperand={handleOperandChange}
            className="operator"
            id={"add"}
            character={"+"}
          />
          <Button
            setOperand={handleOperandChange}
            className="operator"
            id={"subtract"}
            character={"-"}
          />
          <Button
            setOperand={handleOperandChange}
            className="operator"
            id={"multiply"}
            character={"*"}
          />
          <Button
            setOperand={handleOperandChange}
            className="operator"
            id={"divide"}
            character={"/"}
          />
          <Button
            setOperand={handleOperandChange}
            id={"clear"}
            character={"AC"}
          />
          <Button
            setOperand={handleOperandChange}
            className="number"
            id={"decimal"}
            character={"."}
          />
          <Button
            setOperand={handleOperandChange}
            id={"equals"}
            character={"="}
          />
        </div>
      </div>
    </div>
  );
}

export default CalculatorFrame;
