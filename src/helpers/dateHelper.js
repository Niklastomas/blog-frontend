export const ConvertDateToString = (date) => {
  const newDate = date.split('T', 2);
  const year = newDate[0];
  const time = newDate[1].split('.', 1);
  return `${year} ${time}`;
};
