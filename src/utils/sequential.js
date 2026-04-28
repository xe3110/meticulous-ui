const sequential = async (tasks) => {
  const results = [];
  for (const task of tasks) {
    results.push(await task());
  }
  return results;
};

export default sequential;
