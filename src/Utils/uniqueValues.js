const onlyUnique = (value, index, self) => {
  return self.indexOf(value) === index;
};

const getUniqueValues = (arr = []) => {
  const unique = arr.filter(onlyUnique);
  return unique;
};

export default getUniqueValues;
