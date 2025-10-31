# Incubyte String Calculator Template

## Overview

This project contains a **String Calculator template** built using React. The primary goal is for candidates to implement the functionality and improve accessibility in the provided UI component.

## Project Structure

- **src/**
  - `App.tsx`: The React component with accessibility issues.
  - `stringCalculator.ts`: Implementation of the String Calculator logic (to be developed).
- **tests/**
  - `stringCalculator.test.ts`: Suite of tests for the String Calculator functionality (to be developed).

## Getting Started

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/string-calculator.git
   cd string-calculator
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

4. **Run Tests**

   ```bash
   npm test
   ```

## Task for Candidates

- Implement the functionality of the String Calculator following TDD best practices.
- Resolve accessibility issues in the `App.tsx`.

## My Solution

### String Calculator TDD kata

We have to write the logic for a function which can take a string which contains numbers separated by , or \n and return their sum as the output.

### TDD Approach

This project was developed following the Test-Driven Development (TDD) cycle:

1. Red: Write a test that fails.
2. Green: Write the minimum amount of code required to pass the test.
3. Refactor: Refactor the code while ensuring that all tests still pass. (Remove duplication, Improve naming, Simplify logic, Optimize performance (if needed))

### Basic Functionality

1. should evaluate `""` to `0` (Empty String)
2. should evaluate `"35"` to `35` (Single Number)

### Comma Separator

1. should evaluate `"1,2"` to `3` (Two Numbers)
2. should evaluate `"1,2,3,4,5'` to `15` (Multiple Numbers)

### Newline Separator

1. should evaluate `"1\n2\n3"` to `6`

### Mixed Separator (, and \n)

1. should evaluate `"1\n2,3\n4"` to `10`

### Custom Separator

To change a delimiter, the beginning of the string will contain a separate line that looks like this:
`"//[delimiter]\n[numbers…]"`

1. should evaluate `"//;\n1;2;3;4"` to `10`

### Negative numbers are not allowed

Passing a negative number to stringCalculator will throw an exception “negatives not allowed” => and the negative numbers that were passed.

1. `"-1,-2"` should throw an exception `"negatives not allowed => -1"`
2. `"1,-2,3,-4"` should throw an exception `"negatives not allowed => -2,-4"`

### Numbers bigger than 1000 should be ignored

1. should evaluate `"2,1001"` to `2`

### Delimiters can be of any length

1. should evaluate `"//***\n1***2***3"` to `6`
