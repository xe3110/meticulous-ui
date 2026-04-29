const paginate = (data, page, limit) => {
  const total = data.length;
  const totalPages = Math.ceil(total / limit);
  const start = (page - 1) * limit;
  return {
    data: data.slice(start, start + limit),
    total,
    page,
    limit,
    totalPages,
  };
};

export default paginate;
