const CheckBox = ({
    label
}) => {
  return (
    <label className="checkBox">
      <input type="checkbox" className="checkBox__input" />
      <span className="checkBox__mark">
      </span>
      <span className="checkBox__label">{label}</span>
    </label>
  );
};

export default CheckBox;
