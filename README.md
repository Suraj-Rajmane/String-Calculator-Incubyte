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

We have to write the logic for a function which can take a string which contains numbers separated by , or /n and return their sum as the output.

### TDD Approach

This project was developed following the Test-Driven Development (TDD) cycle:

1. Red: Write a test that fails.
2. Green: Write the minimum amount of code required to pass the test.
3. Refactor: Refactor the code while ensuring that all tests still pass. (Remove duplication, Improve naming, Simplify logic, Optimize performance (if needed))

### Basic Functionality

1. should evaluate "" to 0
2. should evaluate "35" to 35
