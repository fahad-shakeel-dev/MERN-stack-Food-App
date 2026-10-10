export const getSimilarProducts = (products, product, limit = 4) => {
  const category = product?.category?.trim().toLowerCase();
  if (!category) return [];
  return products
    .filter((item) =>
      String(item._id) !== String(product._id) &&
      item.category?.trim().toLowerCase() === category
    )
    .slice(0, limit);
};
