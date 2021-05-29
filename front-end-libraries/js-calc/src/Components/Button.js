import "./Button.css";

function Button({ character, id, className }) {
  return (
    <div id={id} className={`Button ${className}`}>
      {character}
    </div>
  );
}

export default Button;
