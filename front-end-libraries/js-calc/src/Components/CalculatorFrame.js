import Button from "./Button";
import ResultField from "./ResultField";
import "./CalculatorFrame.css";

function CalculatorFrame() {
  return (
    <div id="calcWrapper">
      <div className="CalculatorFrame">
        <div className="ResultFrame">
          <ResultField />
        </div>
        <div className="ButtonFrame">
          <Button className="number" id={"seven"} character={7} />
          <Button className="number" id={"eight"} character={8} />
          <Button className="number" id={"nine"} character={9} />
          <Button className="number" id={"four"} character={4} />
          <Button className="number" id={"five"} character={5} />
          <Button className="number" id={"six"} character={6} />
          <Button className="number" id={"one"} character={1} />
          <Button className="number" id={"two"} character={2} />
          <Button className="number" id={"three"} character={3} />
          <Button className="number" id={"zero"} character={0} />
          <Button className="operator" id={"add"} character={"+"} />
          <Button className="operator" id={"subtract"} character={"-"} />
          <Button className="operator" id={"multiply"} character={"*"} />
          <Button className="operator" id={"divide"} character={"/"} />
          <Button id={"clear"} character={"AC"} />
          <Button className="number" id={"decimal"} character={"."} />
          <Button id={"equals"} character={"="} />
        </div>
      </div>
    </div>
  );
}

export default CalculatorFrame;
