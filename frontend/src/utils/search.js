export const normalizeSearch = (query = "") => String(query).trim().replace(/\s+/g, " ");
export const buildSearchUrl = (query) => {
  const value = normalizeSearch(query);
  return value ? "/menu?query=" + encodeURIComponent(value) : "/menu";
};
export const filterProducts = (products, query) => {
  const terms = normalizeSearch(query).toLowerCase().split(" ").filter(Boolean);
  return products.filter((product) => {
    const text = [product.name, product.description, product.category].filter(Boolean).join(" ").toLowerCase();
    return terms.every((term) => text.includes(term));
  });
};
