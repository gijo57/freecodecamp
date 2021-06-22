import '../Styles/Display.css';

const Display = ({ instrument }) => {
  return (
    <div id="display" className="Display">
      {instrument}
    </div>
  );
};

export default Display;
