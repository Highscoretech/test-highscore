export const testQuestions = [
  // HTML Questions
  {
    id: 1,
    question: "What is the semantic meaning of the `<aside>` tag in HTML5?",
    options: [
      "It defines content that is tangentially related to the content around it.",
      "It is used for the main content of the page.",
      "It defines a header for a document or section.",
      "It is used for navigation links."
    ],
    correctAnswer: "It defines content that is tangentially related to the content around it."
  },
  {
    id: 2,
    question: "What is the difference between `<strong>` and `<b>` tags?",
    options: [
      "They are visually the same, but `<strong>` has semantic importance.",
      "They are semantically the same, but `<strong>` is a newer tag.",
      "`<b>` is for bold text, and `<strong>` is for important text.",
      "There is no difference."
    ],
    correctAnswer: "They are visually the same, but `<strong>` has semantic importance."
  },
  {
    id: 3,
    question: "Which attribute is required for the `<img>` tag to be valid?",
    options: [
      "src",
      "alt",
      "Both src and alt",
      "Neither"
    ],
    correctAnswer: "Both src and alt"
  },
  {
    id: 4,
    question: "What does the `defer` attribute in a `<script>` tag do?",
    options: [
      "It executes the script after the HTML document has been parsed.",
      "It executes the script asynchronously.",
      "It defers the loading of the script until it is needed.",
      "It is not a valid attribute."
    ],
    correctAnswer: "It executes the script after the HTML document has been parsed."
  },
  {
    id: 5,
    question: "Which of the following is NOT a valid HTML5 semantic tag?",
    options: [
      "<article>",
      "<section>",
      "<header>",
      "<container>"
    ],
    correctAnswer: "<container>"
  },

  // CSS Questions
  {
    id: 6,
    question: "In CSS, what is the specificity of an ID selector?",
    options: [
      "1,0,0",
      "0,1,0",
      "0,0,1",
      "10,0,0"
    ],
    correctAnswer: "1,0,0"
  },
  {
    id: 7,
    question: "What is the difference between `position: relative` and `position: absolute`?",
    options: [
      "`relative` positions an element relative to its normal position, while `absolute` positions it relative to its nearest positioned ancestor.",
      "`absolute` positions an element relative to its normal position, while `relative` positions it relative to the viewport.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`relative` positions an element relative to its normal position, while `absolute` positions it relative to its nearest positioned ancestor."
  },
  {
    id: 8,
    question: "What does `flex-grow: 1` do in a flex container?",
    options: [
      "It makes the flex item grow to take up all available space.",
      "It sets the initial size of the flex item to 1px.",
      "It makes the flex item shrink if necessary.",
      "It is not a valid CSS property."
    ],
    correctAnswer: "It makes the flex item grow to take up all available space."
  },
  {
    id: 9,
    question: "How can you create a responsive design that adapts to different screen sizes?",
    options: [
      "Using media queries",
      "Using fixed-width layouts",
      "Using only absolute positioning",
      "By not using CSS"
    ],
    correctAnswer: "Using media queries"
  },
  {
    id: 10,
    question: "What is the `box-sizing` property used for?",
    options: [
      "To include padding and border in the element's total width and height.",
      "To control the size of the content box.",
      "To set the margin of an element.",
      "To define the shape of an element."
    ],
    correctAnswer: "To include padding and border in the element's total width and height."
  },
  {
    id: 11,
    question: "What is the difference between `display: none` and `visibility: hidden`?",
    options: [
      "`display: none` removes the element from the document flow, while `visibility: hidden` only hides it.",
      "`visibility: hidden` removes the element from the document flow, while `display: none` only hides it.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`display: none` removes the element from the document flow, while `visibility: hidden` only hides it."
  },
  {
    id: 12,
    question: "Which CSS property is used to create a stacking context?",
    options: [
      "z-index",
      "position",
      "opacity",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 13,
    question: "What is the purpose of the `::before` and `::after` pseudo-elements?",
    options: [
      "To add content before and after an element's content.",
      "To select the first and last child of an element.",
      "To style the first letter and first line of an element.",
      "They are not valid pseudo-elements."
    ],
    correctAnswer: "To add content before and after an element's content."
  },
  {
    id: 14,
    question: "How do you center a block-level element horizontally?",
    options: [
      "margin: 0 auto;",
      "text-align: center;",
      "align-items: center;",
      "justify-content: center;"
    ],
    correctAnswer: "margin: 0 auto;"
  },
  {
    id: 15,
    question: "What is the difference between `em` and `rem` units?",
    options: [
      "`em` is relative to the font-size of the parent element, while `rem` is relative to the font-size of the root element.",
      "`rem` is relative to the font-size of the parent element, while `em` is relative to the font-size of the root element.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`em` is relative to the font-size of the parent element, while `rem` is relative to the font-size of the root element."
  },

  // JavaScript Questions
  {
    id: 16,
    question: "What is the output of `typeof null`?",
    options: [
      "object",
      "null",
      "undefined",
      "string"
    ],
    correctAnswer: "object"
  },
  {
    id: 17,
    question: "What is a closure in JavaScript?",
    options: [
      "A function that has access to its outer function's scope, even after the outer function has returned.",
      "A function that is passed as an argument to another function.",
      "A function that returns another function.",
      "All of the above."
    ],
    correctAnswer: "A function that has access to its outer function's scope, even after the outer function has returned."
  },
  {
    id: 18,
    question: "What is the difference between `==` and `===`?",
    options: [
      "`==` performs type coercion, while `===` does not.",
      "`===` performs type coercion, while `==` does not.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`==` performs type coercion, while `===` does not."
  },
  {
    id: 19,
    question: "What is the event loop in JavaScript?",
    options: [
      "A mechanism that allows JavaScript to perform non-blocking operations.",
      "A loop that iterates over the properties of an object.",
      "A loop that is used to create animations.",
      "None of the above."
    ],
    correctAnswer: "A mechanism that allows JavaScript to perform non-blocking operations."
  },
  {
    id: 20,
    question: "What is the `this` keyword in JavaScript?",
    options: [
      "It refers to the object that the function is a method of.",
      "It refers to the global object.",
      "It refers to the function itself.",
      "It depends on how the function is called."
    ],
    correctAnswer: "It depends on how the function is called."
  },
  {
    id: 21,
    question: "What is the output of `console.log(1 + '2' + 3)`?",
    options: [
      "123",
      "6",
      "15",
      "Error"
    ],
    correctAnswer: "123"
  },
  {
    id: 22,
    question: "What is the purpose of the `map` method in JavaScript?",
    options: [
      "To create a new array with the results of calling a provided function on every element in the calling array.",
      "To iterate over the properties of an object.",
      "To filter the elements of an array.",
      "To reduce the elements of an array to a single value."
    ],
    correctAnswer: "To create a new array with the results of calling a provided function on every element in the calling array."
  },
  {
    id: 23,
    question: "What is the difference between `let` and `const`?",
    options: [
      "`let` allows you to reassign the variable, while `const` does not.",
      "`const` allows you to reassign the variable, while `let` does not.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`let` allows you to reassign the variable, while `const` does not."
  },
  {
    id: 24,
    question: "What is hoisting in JavaScript?",
    options: [
      "A mechanism where variable and function declarations are moved to the top of their containing scope before code execution.",
      "A way to lift heavy objects.",
      "A design pattern.",
      "None of the above."
    ],
    correctAnswer: "A mechanism where variable and function declarations are moved to the top of their containing scope before code execution."
  },
  {
    id: 25,
    question: "What is the output of `console.log(0.1 + 0.2 === 0.3)`?",
    options: [
      "false",
      "true",
      "undefined",
      "Error"
    ],
    correctAnswer: "false"
  },
  {
    id: 26,
    question: "What is the purpose of the `bind` method?",
    options: [
      "To create a new function that, when called, has its `this` keyword set to the provided value.",
      "To bind an event listener to an element.",
      "To bind a function to a specific scope.",
      "All of the above."
    ],
    correctAnswer: "To create a new function that, when called, has its `this` keyword set to the provided value."
  },
  {
    id: 27,
    question: "What is a pure function?",
    options: [
      "A function that, given the same input, will always return the same output and has no side effects.",
      "A function that has no parameters.",
      "A function that only returns a boolean value.",
      "A function that is not a method of an object."
    ],
    correctAnswer: "A function that, given the same input, will always return the same output and has no side effects."
  },
  {
    id: 28,
    question: "What is the difference between `slice` and `splice`?",
    options: [
      "`slice` returns a new array, while `splice` modifies the original array.",
      "`splice` returns a new array, while `slice` modifies the original array.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`slice` returns a new array, while `splice` modifies the original array."
  },
  {
    id: 29,
    question: "What is the purpose of the `reduce` method?",
    options: [
      "To execute a reducer function on each element of the array, resulting in a single output value.",
      "To reduce the number of elements in an array.",
      "To reduce the complexity of a function.",
      "None of the above."
    ],
    correctAnswer: "To execute a reducer function on each element of the array, resulting in a single output value."
  },
  {
    id: 30,
    question: "What is event delegation?",
    options: [
      "A technique where you add a single event listener to a parent element to handle events for all of its children.",
      "A way to delegate events to other functions.",
      "A design pattern for handling custom events.",
      "None of the above."
    ],
    correctAnswer: "A technique where you add a single event listener to a parent element to handle events for all of its children."
  },
  {
    id: 31,
    question: "What is the output of `console.log(!!'hello')`?",
    options: [
      "true",
      "false",
      "hello",
      "undefined"
    ],
    correctAnswer: "true"
  },
  {
    id: 32,
    question: "What is a higher-order function?",
    options: [
      "A function that takes another function as an argument, or returns a function.",
      "A function that is at the top of the call stack.",
      "A function that has a high level of complexity.",
      "None of the above."
    ],
    correctAnswer: "A function that takes another function as an argument, or returns a function."
  },
  {
    id: 33,
    question: "What is the difference between `null` and `undefined`?",
    options: [
      "`null` is an assignment value, while `undefined` means a variable has been declared but not defined.",
      "`undefined` is an assignment value, while `null` means a variable has been declared but not defined.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`null` is an assignment value, while `undefined` means a variable has been declared but not defined."
  },
  {
    id: 34,
    question: "What is the DOM?",
    options: [
      "A programming interface for web documents.",
      "A type of JavaScript framework.",
      "A data storage system.",
      "None of the above."
    ],
    correctAnswer: "A programming interface for web documents."
  },
  {
    id: 35,
    question: "What is the purpose of `JSON.stringify()`?",
    options: [
      "To convert a JavaScript object to a JSON string.",
      "To parse a JSON string.",
      "To create a new JSON object.",
      "None of the above."
    ],
    correctAnswer: "To convert a JavaScript object to a JSON string."
  },
  {
    id: 36,
    question: "What is the output of `[1, 2, 3].map(parseInt)`?",
    options: [
      "[1, NaN, NaN]",
      "[1, 2, 3]",
      "[1, 2, 2]",
      "Error"
    ],
    correctAnswer: "[1, NaN, NaN]"
  },
  {
    id: 37,
    question: "What is the `arguments` object in JavaScript?",
    options: [
      "An array-like object accessible inside functions that contains the values of the arguments passed to that function.",
      "An object that contains all the global variables.",
      "An object that contains all the local variables.",
      "None of the above."
    ],
    correctAnswer: "An array-like object accessible inside functions that contains the values of the arguments passed to that function."
  },
  {
    id: 38,
    question: "What is the purpose of the `Promise` object?",
    options: [
      "To represent the eventual completion (or failure) of an asynchronous operation and its resulting value.",
      "To make a promise to the user.",
      "To create a new thread.",
      "None of the above."
    ],
    correctAnswer: "To represent the eventual completion (or failure) of an asynchronous operation and its resulting value."
  },
  {
    id: 39,
    question: "What is the difference between `var`, `let`, and `const`?",
    options: [
      "`var` is function-scoped, while `let` and `const` are block-scoped.",
      "`let` is function-scoped, while `var` and `const` are block-scoped.",
      "`const` is function-scoped, while `var` and `let` are block-scoped.",
      "There is no difference."
    ],
    correctAnswer: "`var` is function-scoped, while `let` and `const` are block-scoped."
  },
  {
    id: 40,
    question: "What is the output of `console.log(typeof NaN)`?",
    options: [
      "number",
      "NaN",
      "undefined",
      "string"
    ],
    correctAnswer: "number"
  },
  {
    id: 41,
    question: "What is the purpose of the `async/await` syntax?",
    options: [
      "To make asynchronous code look and behave more like synchronous code.",
      "To create a new thread.",
      "To define a new type of function.",
      "None of the above."
    ],
    correctAnswer: "To make asynchronous code look and behave more like synchronous code."
  },
  {
    id: 42,
    question: "What is object destructuring?",
    options: [
      "A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.",
      "A way to destroy an object.",
      "A method for creating new objects.",
      "None of the above."
    ],
    correctAnswer: "A JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables."
  },
  {
    id: 43,
    question: "What is the output of `console.log('hello'.length)`?",
    options: [
      "5",
      "6",
      "undefined",
      "Error"
    ],
    correctAnswer: "5"
  },
  {
    id: 44,
    question: "What is the `...` operator in JavaScript?",
    options: [
      "The spread operator, which allows an iterable to be expanded in places where zero or more arguments or elements are expected.",
      "The rest parameter, which allows a function to accept an indefinite number of arguments as an array.",
      "Both of the above.",
      "None of the above."
    ],
    correctAnswer: "Both of the above."
  },
  {
    id: 45,
    question: "What is a template literal?",
    options: [
      "A string literal that allows embedded expressions.",
      "A template for creating objects.",
      "A literal value that is a template.",
      "None of the above."
    ],
    correctAnswer: "A string literal that allows embedded expressions."
  },
  {
    id: 46,
    question: "What is the output of `console.log(2 in [1, 2, 3])`?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: "true"
  },
  {
    id: 47,
    question: "What is the `Set` object in JavaScript?",
    options: [
      "A collection of unique values.",
      "A collection of key-value pairs.",
      "A collection of ordered values.",
      "None of the above."
    ],
    correctAnswer: "A collection of unique values."
  },
  {
    id: 48,
    question: "What is the `Map` object in JavaScript?",
    options: [
      "A collection of key-value pairs.",
      "A collection of unique values.",
      "A collection of ordered values.",
      "None of the above."
    ],
    correctAnswer: "A collection of key-value pairs."
  },
  {
    id: 49,
    question: "What is the difference between `for...in` and `for...of`?",
    options: [
      "`for...in` iterates over the enumerable properties of an object, while `for...of` iterates over the values of an iterable object.",
      "`for...of` iterates over the enumerable properties of an object, while `for...in` iterates over the values of an iterable object.",
      "They are the same.",
      "None of the above."
    ],
    correctAnswer: "`for...in` iterates over the enumerable properties of an object, while `for...of` iterates over the values of an iterable object."
  },
  {
    id: 50,
    question: "What is the output of `console.log(typeof [])`?",
    options: [
      "object",
      "array",
      "list",
      "undefined"
    ],
    correctAnswer: "object"
  }
];