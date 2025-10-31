const stringCalculator = (input: string) => {
  // For single number or empty string split operation will return an array with single element hence we don't need to worry.
  const numbers = input.split(/[,|\n]/);

  const result = numbers.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );

  return result;
};

export default stringCalculator;
