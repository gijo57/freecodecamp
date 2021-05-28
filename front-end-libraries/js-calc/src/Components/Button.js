import "./Button.css";

function Button({ character, id }) {
  return (
    <div id={id} className="Button">
      {character}
    </div>
  );
}

export default Button;
