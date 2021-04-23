import sortIcon from '../Assets/Icons/sort.svg';
import Select from './Select';

const Sort = () => {
  return (
    <div className="sort">
      <button className="sort__direction" name="sort" type="button">
        <img src={sortIcon} alt="sort" width="15" height="15" />
      </button>
      <h6 className="sort__type"> Sort By</h6>
      <div className="sort__select">
          <Select />
      </div>
    </div>
  );
};

export default Sort;