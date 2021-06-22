import '../Styles/Volume.css';

const Volume = ({ setVolume, volume }) => {
  const handleChange = (vol) => {
    setVolume(vol);
  };

  return (
    <div className="Volume">
      <p>Volume: {volume}</p>
      <input
        onChange={(e) => handleChange(e.target.value)}
        id="volume-control"
        type="range"
      />
    </div>
  );
};

export default Volume;
