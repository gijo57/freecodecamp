import "./ResultField.css";

function ResultField({ operand }) {
  return (
    <div id="display" className="ResultField">
      <p id="currentCalc">{operand}</p>
      <br />
      <p id="currentOp">{operand}</p>
    </div>
  );
}

export default ResultField;
