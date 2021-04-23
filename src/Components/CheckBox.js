const CheckBox = ({
    label,
    onChange,
    checked,
}) => {
  return (
    <label className="checkBox">
      <input onChange={onChange} checked={checked} type="checkbox" className="checkBox__input" />
      <span className="checkBox__mark">
      </span>
      <span className="checkBox__label">{label}</span>
    </label>
  );
};

export default CheckBox;
