const stringCalculator = (input: string) => {
  const isCustomDelimiter = input.startsWith("//");

  // For single number or empty string split operation will return an array with single element hence we don't need to worry.
  let numbers = input.split(/[,|\n]/);

  if (isCustomDelimiter) {
    // numbers = ["//;", "1;2;3;4"]
    const customDelimiter = numbers[0].substring(2);
    const numbersWithDelimiter = numbers[1];
    numbers = numbersWithDelimiter.split(customDelimiter);
  }

  const result = numbers.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );

  return result;
};

export default stringCalculator;
