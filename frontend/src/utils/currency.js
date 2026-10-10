const rupeeFormatter = new Intl.NumberFormat("en-PK", {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
});

export const formatPrice = (amount) =>
  "Rs. " + rupeeFormatter.format(Number(amount || 0));
