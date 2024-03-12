function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  // Iterate over each entry in the map
  for (const [item, quantity] of map) {
    if (quantity === 1) {
      // If quantity is 1, update it to 100
      map.set(item, 100);
    }
  }
}

export default updateUniqueItems;
