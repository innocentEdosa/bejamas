import { useState} from "react";
import sortIcon from "../Assets/Icons/sort.svg";
import Select from "./Select";
// import { debounce } from "lodash";
import PropTypes from 'prop-types';

const Sort = ({ options, sortHandler }) => {
  const [sortState, setSortState] = useState({
    sortBy: "",
    direction: true,
  });

  // const returnSortValues = useRef(
  //   debounce(
  //     (sortState) => {
  //       sortHandler(sortState);
  //     },
  //     500,
  //     {
  //       leading: true,
  //     }
  //   )
  // );

  const sortDirectionChangeHandler = () => {
    setSortState((prev) => ({
      ...prev,
      direction: !prev.direction,
    }));
  };

  const onSortChangeHandler = (e) => {
    e.preventDefault();
    const { value } = e.target;
    setSortState((prev) => ({
      ...prev,
      sortBy: value,
    }));
  };

  // useEffect(() => {
  //   returnSortValues.current(sortState);
  // }, [sortState]);

  return (
    <div className="sort">
      <button
        onClick={sortDirectionChangeHandler}
        className="sort__direction"
        name="sort"
        type="button"
      >
        <img src={sortIcon} alt="sort" width="15" height="15" />
      </button>
      <h6 className="sort__type"> Sort By</h6>
      <div className="sort__select">
        <Select
          name="sortBy"
          value={sortState?.sortBy}
          onChange={onSortChangeHandler}
          options={options}
        />
      </div>
    </div>
  );
};


Sort.prototype = {
  options: PropTypes.shape([]),
  sortHandler: PropTypes.func,
};
export default Sort;
