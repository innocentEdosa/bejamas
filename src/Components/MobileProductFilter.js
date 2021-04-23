import filterIcon from '../Assets/Icons/fliter.svg';
import useModal from '../Hooks/useModal';
import Filter from './Filter';
import closeIcon from '../Assets/Icons/close.svg';
import Button from './Button';

const MobileProductFilter = ({
    filterHandler,
    category,
}) => {
  const { modal, openModal, closeModal } = useModal();


  const FilterModal = ({ closeModal }) => (
    <div className="mobileFilter">
      <div className="mobileFilter__filter">
        <div className="mobileFilter__nav">
          <h6 className="mobileFilter__nav--heading">Filter</h6>
          <button type="button" name="close button" onClick={closeModal}>
            <img src={closeIcon} alt="close icon" />
          </button>
        </div>
        <div className="mobileFilter__filter--filter">
        <Filter category={category} filterHandler={filterHandler} />
        </div>
      </div>
      <div className="mobileFilter__actions">
        <div className="mobileFilter__actions-btn">
          <Button secondary>
            <span className="mobileFiler__actions--cta">CLEAR</span>
          </Button>
        </div>
        <div className="mobileFilter__actions-btn">
          <Button primary>
            <span className="mobileFiler__actions--cta">SAVE</span>
          </Button>
        </div>
      </div>
    </div>
  );

  const openFilterModal = () => {
    openModal(<FilterModal closeModal={closeModal} />);
  };

  return (
    <div>
      {modal}
      <button onClick={openFilterModal} name="filter" type="button">
        <img width="29" height="29" src={filterIcon} alt="filter icon" />
      </button>
    </div>
  );
};

export default MobileProductFilter;
