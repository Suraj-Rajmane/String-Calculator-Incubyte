export const isCustomDelimiter = (input: string) => input.startsWith("//");

export const getNumbersArray = (input: string) => {
  // For single number or empty string split operation will return an array with single element hence we don't need to worry.
  let numbers = input.split(/[,|\n]/);

  if (isCustomDelimiter(input)) {
    // numbers = ["//;", "1;2;3;4"]
    const customDelimiter = numbers[0].substring(2);
    const numbersWithDelimiter = numbers[1];
    numbers = numbersWithDelimiter.split(customDelimiter);
  }

  return numbers;
};

export const calculateSum = (numbers: string[]) =>
  numbers.reduce(
    (accumulator, currentValue) => accumulator + Number(currentValue),
    0
  );
