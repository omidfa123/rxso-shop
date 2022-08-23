export const persianPrice = (price: number) => {
  return price.toLocaleString('fa-IR').replace(/٬/g, '٫');
};
