import CheckBox from "./CheckBox";
const filterData = [
  {
    title: "Category",
    datatype: "list",
    list: [{ title: "People" }, { title: "Premium" }, { title: "Pets" }
    , { title: "Food" }
    , { title: "Landmark" }
    , { title: "Cities" }
    , { title: "nature" }
],
  },
  {
    title: "Pricing",
    datatype: "range",
    list: [{ title: "People" }, { title: "Premium" }],
  },
];

const Filter = () => {
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
                      <li
                        key={type?.title}
                        className="filter__category--listItems"
                      >
                        <span>
                          <CheckBox label={type?.title} />
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
