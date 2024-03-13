function cleanSet(set, startString) {
  // Filter values in the set that start with the specified string
  const filteredValues = Array.from(set).filter((value) => value.startsWith(startString));

  // If startString is empty, return an empty string
  if (startString === '') {
    return '';
  }

  // Otherwise, append the rest of the string after startString
  return filteredValues.map((value) => value.slice(startString.length)).join('-');
}

export default cleanSet;
