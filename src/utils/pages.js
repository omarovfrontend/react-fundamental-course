export const getPageCount = (totalCount, limit) => {
  return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
  let results = [];

  for (let i = 0; i < totalPages; i++) {
    results.push(i + 1);
  }
  return results;
}
