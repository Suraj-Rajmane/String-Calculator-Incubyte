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

export const calculateSum = (numbers: string[]) => {
  const negatives: number[] = [];

  // Convert all strings to numbers and collect negatives
  const numbersArray = numbers.map((element) => {
    const num = Number(element);
    if (num < 0) {
      negatives.push(num);
    }
    return num;
  });

  // If there are negatives, throw an error
  if (negatives.length > 0) {
    throw new Error(`negatives not allowed => ${negatives.join(",")}`);
  }

  // Otherwise, return the sum
  return numbersArray.reduce((accumulator, currentValue) => {
    if (currentValue > 1000) {
      return accumulator;
    }
    return accumulator + currentValue;
  }, 0);
};
