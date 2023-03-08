export const addNumberSeparator = (num: number): string => {
  const string = num.toString();
  const splittedString = string.split('.');

  splittedString[0] = splittedString[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return splittedString.join('.');
};
