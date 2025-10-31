import {
  calculateSum,
  getNumbersArray,
} from "./helpers/stringCalculator.helper";

const stringCalculator = (input: string) => {
  const numbers = getNumbersArray(input);

  const result = calculateSum(numbers);

  return result;
};

export default stringCalculator;
