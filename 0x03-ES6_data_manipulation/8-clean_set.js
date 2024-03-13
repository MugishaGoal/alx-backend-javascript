function cleanSet(set, startString) {
  // Filter values in the set that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // Join the filtered values and separate them with '-'
  return filteredValues.join('-');
}

export default cleanSet;
