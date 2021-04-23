const Select = ({
  options = [],
  value,
  onChange,
}) => {
  return (
    <select onChange={onChange} value={value} className="select" name="select" id="cars">
      <option selected="true" disabled="disabled"  value="">choose sort</option>
      {options?.map((value) => <option key={value} value={value}>{value}</option>)}
    </select>
  );
};

export default Select;
