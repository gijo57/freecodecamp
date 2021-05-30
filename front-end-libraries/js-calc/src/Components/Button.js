import "./Button.css";

function Button({ character, id, className, setOperand }) {
  const handleClick = (event) => {
    setOperand(event.target.innerText);
  };
  return (
    <div
      onClick={(event) => handleClick(event)}
      id={id}
      className={`Button ${className}`}
    >
      {character}
    </div>
  );
}

export default Button;
