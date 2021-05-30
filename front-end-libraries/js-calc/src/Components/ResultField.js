import "./ResultField.css";

function ResultField({ operand, expression }) {
  return (
    <div id="display" className="ResultField">
      <p id="currentCalc">{expression}</p>
      <br />
      <p id="currentOp">{operand}</p>
    </div>
  );
}

export default ResultField;
