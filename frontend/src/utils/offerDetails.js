export const isOfferActive = (offer, now = Date.now()) => {
  const discount = Number(offer.discount);
  return discount > 0 && discount <= 100 &&
    (!offer.expiry || new Date(offer.expiry).getTime() >= now);
};

export const getOfferDetails = (offer, products) => {
  const eligible = products.filter((product) => offer.targetProduct
    ? String(product._id) === String(offer.targetProduct)
    : Boolean(offer.targetCategory) && product.category?.trim().toLowerCase() === offer.targetCategory.trim().toLowerCase()
  );
  if (!eligible.length) return null;
  const lowest = [...eligible].sort((a, b) => Number(a.price) - Number(b.price))[0];
  const price = Number(lowest.price);
  const discount = Number(offer.discount) || 0;
  return {
    product: lowest,
    count: eligible.length,
    categoryDeal: !offer.targetProduct,
    originalPrice: price,
    discountedPrice: price * (1 - discount / 100),
    saving: price * discount / 100,
    image: offer.image || lowest.image,
    to: offer.targetProduct ? "/product/" + offer.targetProduct : "/category/" + encodeURIComponent(offer.targetCategory),
  };
};
