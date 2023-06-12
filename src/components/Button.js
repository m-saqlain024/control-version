function Button({ color, label, onClick }) {
  return (

      <button
        style={{ backgroundColor: color }}
        className="btn"
        onClick={onClick}
      >
        {label}
      </button>
      
 
  );
}

// Button.prototype = {
//   color: PropTypes.string,
//   label: PropTypes.string,
//   onClick: PropTypes.func,
// };
export default Button

