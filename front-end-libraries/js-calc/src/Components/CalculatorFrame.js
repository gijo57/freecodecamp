import { useState } from "react";
import Button from "./Button";
import ResultField from "./ResultField";
import "./CalculatorFrame.css";

function CalculatorFrame() {
  const [currentExpression, setCurrentExpression] = useState("");
  const [currentOperand, setCurrentOperand] = useState("");
  const handleOperandChange = (value) => {
    if (!isNaN(value) || value === ".") {
      if (isNaN(currentOperand)) {
        setCurrentOperand(currentOperand.substr(1).concat(value));
        setCurrentExpression(currentExpression.concat(value));
      } else {
        setCurrentOperand(currentOperand.concat(value));
        setCurrentExpression(currentExpression.concat(value));
      }
    } else if (value === "AC") {
      setCurrentOperand("");
      setCurrentExpression("");
    } else if (value === "=") {
      console.log("hi");
    } else {
      setCurrentOperand(value);
      setCurrentExpression(currentExpression.concat(value));
    }
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
