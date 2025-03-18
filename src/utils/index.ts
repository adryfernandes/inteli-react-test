export const generateArray = (quantityItems: number = 10) => {
  const items = [];
  for (let index = 1; index <= quantityItems; index++) {
    items.push(index);
  }

  return items;
};

export const padNumber = (val: number) => {
  return String(val).padStart(2, '0');
};
