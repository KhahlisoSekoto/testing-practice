# Testing Practice - The Odin Project

A hands-on implementation of automated software testing and **Test-Driven Development (TDD)** using **Jest** and **Babel**, built as part of The Odin Project's JavaScript curriculum.

The primary focus of this project is practicing the **Red-Green-Refactor** development cycle: writing robust, modular unit tests for specific features and edge cases before writing the actual production code.

---

## 🔄 The TDD Workflow Applied
1. **Red:** Wrote isolated unit tests mapping out the expected inputs and outputs for each target function.
2. **Green:** Ran the test suite, observed the expected failures, and wrote the minimum production code required to turn the tests green.
3. **Refactor:** Cleaned up implementation code and edge-case handling with the confidence of an automated testing safety net.

---

## 🛠️ Project Tasks Implemented

### 1. Capitalize
* **File:** `capitalize.js` | **Test:** `capitalize.test.js`
* Takes a string and returns it with the first character capitalized while leaving the rest of the string intact. Safe against empty strings.

### 2. Reverse String
* **File:** `reverseString.js` | **Test:** `reverseString.test.js`
* Takes a string and returns it completely reversed. Fully supports strings containing spaces, numbers, and complex punctuation.

### 3. Calculator Object
* **File:** `calculator.js` | **Test:** `calculator.test.js`
* A structured object containing four primary arithmetic methods: `add`, `subtract`, `divide`, and `multiply`. 

### 4. Caesar Cipher
* **File:** `caesarCipher.js` | **Test:** `caesarCipher.test.js`
* Encrypts a string by shifting each character down the alphabet by a specific factor. 
* **Key Features:** Handles alphabet wrapping (e.g., `z` wraps seamlessly to `a`), maintains case preservation for mixed uppercase and lowercase strings, and completely ignores spaces or punctuation.

### 5. Analyze Array
* **File:** `analyzeArray.js` | **Test:** `analyzeArray.test.js`
* A function that takes an array of numbers and returns an object containing four calculated metrics: `average`, `min`, `max`, and `length`.
* *Note: Tested using Jest's `.toEqual()` matcher to evaluate deep object value equality rather than memory reference.*

---

## ⚙️ Environment Configuration

### The Babel Toolchain
Because Jest executes within a native Node.js runtime environment, it natively expects older CommonJS module structures (`require`/`module.exports`). 

To write modern, standard ES6 modular syntax (`import`/`export`) across this codebase, **Babel** was integrated into the development environment as an in-memory compiler. This bridges the syntax gap automatically whenever the test runner is executed.

---

## 🚀 How to Install and Run Locally

### 1. Clone the repository
```bash
git clone https://github.com/KhahlisoSekoto/testing-practice.git
cd testing-practice
```

### 2. Install development dependencies
```bash
npm install
```

### 3. Execute the Jest test suite
```bash
npm test
```

### 4. Run tests in Watch Mode (Optional)
To keep Jest running actively in the background and auto-re-execute tests whenever you save a file:
```bash
npx jest --watchAll
```