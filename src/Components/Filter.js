import CheckBox from "./CheckBox";
import { useState, useEffect, useRef } from "react";
import { includes, debounce } from "lodash";

const Filter = ({ category = [], filterHandler }) => {
  const [filterState, setFilterState] = useState({
    list: [],
  });

  const onSelect = (e, type) => {
    const { checked } = e.target;
    if (checked) {
      setFilterState((prev) => ({
        ...prev,
        list: [type, ...prev?.list],
      }));
    } else {
      setFilterState((prev) => {
        const newList = prev?.list?.filter((item) => item !== type);
        return {
          ...prev,
          list: newList,
        };
      });
    }
  };

  const returnFilterValues = useRef(
    debounce(
      (list) => {
        filterHandler(list);
      },
      500,
      {
        leading: true,
      }
    )
  );

  useEffect(() => {
    returnFilterValues.current(filterState?.list);
  }, [filterState?.list]);

  const filterData = [
    {
      title: "Category",
      datatype: "list",
      list: category,
    },
  ];

  return (
    <div className="filter">
      <ul>
        {filterData?.map((filter) => {
          return (
            <li key={filter?.title} className="filter__category">
              <span className="filter__category--title">{filter?.title}</span>
              <ul className="filter__category--list">
                {filter?.list?.map((type) => {
                  if (filter?.datatype === "list") {
                    return (
                      <li key={type} className="filter__category--listItems">
                        <span>
                          <CheckBox
                            checked={includes(filterState?.list, type)}
                            onChange={(e) => onSelect(e, type)}
                            label={type}
                          />
                        </span>
                      </li>
                    );
                  }

                  return null;
                })}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
