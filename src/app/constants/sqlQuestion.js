export const testQuestions = [
  // HTML Questions
  {
    id: 1,
    question: "Which tag would you use to underline text, but in a way that is no longer recommended for styling?",
    options: [
      "<u>",
      "<ins>",
      "<style>text-decoration: underline;</style>",
      "<em>"
    ],
    correctAnswer: "<u>"
  },
  {
    id: 2,
    question: "If you have a `<p>` tag inside a `<div>` tag, which is the parent element?",
    options: [
      "<p>",
      "<div>",
      "Both",
      "Neither"
    ],
    correctAnswer: "<div>"
  },
  {
    id: 3,
    question: "Which of these input types is NOT a new input type in HTML5?",
    options: [
      "date",
      "color",
      "text",
      "range"
    ],
    correctAnswer: "text"
  },
  {
    id: 4,
    question: "What is the most common use for the `<hr>` tag?",
    options: [
      "To create a horizontal rule or thematic break.",
      "To create a header.",
      "To highlight text.",
      "To create a hyperlink."
    ],
    correctAnswer: "To create a horizontal rule or thematic break."
  },
  {
    id: 5,
    question: "Which attribute is used to provide an image's URL?",
    options: [
      "href",
      "src",
      "link",
      "url"
    ],
    correctAnswer: "src"
  },

  // CSS Questions
  {
    id: 6,
    question: "If you have a CSS rule `p { color: red; }` and another rule `body { color: blue; }`, what color will a paragraph's text be?",
    options: [
      "Red",
      "Blue",
      "A mix of red and blue",
      "The default color"
    ],
    correctAnswer: "Red"
  },
  {
    id: 7,
    question: "What does `position: fixed;` do to an element?",
    options: [
      "It positions the element relative to the viewport, so it always stays in the same place even if the page is scrolled.",
      "It fixes the element's size.",
      "It positions the element relative to its parent.",
      "It cannot be moved."
    ],
    correctAnswer: "It positions the element relative to the viewport, so it always stays in the same place even if the page is scrolled."
  },
  {
    id: 8,
    question: "If you set `flex-direction: column;` on a flex container, how will the flex items be arranged?",
    options: [
      "In a single column, from top to bottom.",
      "In a single row, from left to right.",
      "It will not change the layout.",
      "It will cause an error."
    ],
    correctAnswer: "In a single column, from top to bottom."
  },
  {
    id: 9,
    question: "What is the difference between `margin` and `padding`?",
    options: [
      "`margin` is the space outside the border, `padding` is the space inside the border.",
      "`padding` is the space outside the border, `margin` is the space inside the border.",
      "They are the same.",
      "`margin` is for horizontal spacing, `padding` is for vertical spacing."
    ],
    correctAnswer: "`margin` is the space outside the border, `padding` is the space inside the border."
  },
  {
    id: 10,
    question: "How would you select all `<a>` tags with a `target` attribute in CSS?",
    options: [
      "a[target]",
      "a.target",
      "a#target",
      "a:target"
    ],
    correctAnswer: "a[target]"
  },
  {
    id: 11,
    question: "What does `display: inline-block;` allow you to do?",
    options: [
      "It allows you to set a width and height on the element, but it still flows with the text.",
      "It makes the element a block-level element.",
      "It hides the element.",
      "It is not a valid CSS property."
    ],
    correctAnswer: "It allows you to set a width and height on the element, but it still flows with the text."
  },
  {
    id: 12,
    question: "Which property would you use to make text italic?",
    options: [
      "font-style",
      "font-weight",
      "text-decoration",
      "text-transform"
    ],
    correctAnswer: "font-style"
  },
  {
    id: 13,
    question: "What is the default value of the `position` property?",
    options: [
      "static",
      "relative",
      "absolute",
      "fixed"
    ],
    correctAnswer: "static"
  },
  {
    id: 14,
    question: "If you have `justify-content: space-between;` on a flex container, what will happen?",
    options: [
      "Items are evenly distributed in the line; first item is on the start line, last item on the end line.",
      "Items are positioned in the center of the container.",
      "Items are positioned at the start of the container.",
      "Items are positioned at the end of the container."
    ],
    correctAnswer: "Items are evenly distributed in the line; first item is on the start line, last item on the end line."
  },
  {
    id: 15,
    question: "What does the `!important` rule do in CSS?",
    options: [
      "It makes a CSS property override any other declarations.",
      "It imports another stylesheet.",
      "It marks a property as important for the browser.",
      "It is not a valid rule."
    ],
    correctAnswer: "It makes a CSS property override any other declarations."
  },

  // JavaScript Questions
  {
    id: 16,
    question: "What is the result of `console.log(3 > 2 > 1)`?",
    options: [
      "false",
      "true",
      "undefined",
      "Error"
    ],
    correctAnswer: "false"
  },
  {
    id: 17,
    question: "What is a function parameter?",
    options: [
      "A variable listed in the function's definition.",
      "The value passed to the function when it is called.",
      "The function's name.",
      "The function's return value."
    ],
    correctAnswer: "A variable listed in the function's definition."
  },
  {
    id: 18,
    question: "What does a `return` statement do in a function?",
    options: [
      "It stops the execution of a function and returns a value.",
      "It prints a value to the console.",
      "It declares a new variable.",
      "It is not a valid statement."
    ],
    correctAnswer: "It stops the execution of a function and returns a value."
  },
  {
    id: 19,
    question: "How many times will the message 'hello' be logged in this loop: `for (let i = 0; i < 3; i++) { console.log('hello'); }`?",
    options: [
      "3",
      "2",
      "4",
      "0"
    ],
    correctAnswer: "3"
  },
  {
    id: 20,
    question: "What is the main difference between a `while` loop and a `do...while` loop?",
    options: [
      "A `do...while` loop will always execute at least once.",
      "A `while` loop will always execute at least once.",
      "They are the same.",
      "A `do...while` loop is faster."
    ],
    correctAnswer: "A `do...while` loop will always execute at least once."
  },
  {
    id: 21,
    question: "How do you access the `name` property of an object called `person`?",
    options: [
      "person.name",
      "person['name']",
      "Both of the above",
      "person(name)"
    ],
    correctAnswer: "Both of the above"
  },
  {
    id: 22,
    question: "What is the purpose of object destructuring?",
    options: [
      "To extract properties from an object into distinct variables.",
      "To combine multiple objects into one.",
      "To delete properties from an object.",
      "It is not a valid feature."
    ],
    correctAnswer: "To extract properties from an object into distinct variables."
  },
  {
    id: 23,
    question: "How do you find the number of items in an array called `myArray`?",
    options: [
      "myArray.length",
      "myArray.size",
      "myArray.count",
      "length(myArray)"
    ],
    correctAnswer: "myArray.length"
  },
  {
    id: 24,
    question: "What does `document.getElementById('my-element')` do?",
    options: [
      "It returns the element with the ID 'my-element'.",
      "It creates a new element with the ID 'my-element'.",
      "It deletes the element with the ID 'my-element'.",
      "It is not a valid method."
    ],
    correctAnswer: "It returns the element with the ID 'my-element'."
  },
  {
    id: 25,
    question: "What is the output of `console.log('5' + 3)`?",
    options: [
      "'53'",
      "8",
      "'8'",
      "Error"
    ],
    correctAnswer: "'53'"
  },
  {
    id: 26,
    question: "What is the correct way to write a single-line comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "' This is a comment"
    ],
    correctAnswer: "// This is a comment"
  },
  {
    id: 27,
    question: "What does the `===` operator do?",
    options: [
      "It checks for strict equality (both value and type).",
      "It checks for loose equality (value only).",
      "It assigns a value to a variable.",
      "It is not a valid operator."
    ],
    correctAnswer: "It checks for strict equality (both value and type)."
  },
  {
    id: 28,
    question: "What is the output of `console.log(Boolean(''))`?",
    options: [
      "false",
      "true",
      "undefined",
      "Error"
    ],
    correctAnswer: "false"
  },
  {
    id: 29,
    question: "What is the purpose of the `addEventListener` method?",
    options: [
      "To attach an event handler to an element.",
      "To create a new event.",
      "To remove an event handler from an element.",
      "It is not a valid method."
    ],
    correctAnswer: "To attach an event handler to an element."
  },
  {
    id: 30,
    question: "What is the output of `console.log(typeof 42)`?",
    options: [
      "'number'",
      "'integer'",
      "'float'",
      "'string'"
    ],
    correctAnswer: "'number'"
  },
  {
    id: 31,
    question: "What is the `innerHTML` property used for?",
    options: [
      "To get or set the HTML content of an element.",
      "To get or set the text content of an element.",
      "To change the element's tag name.",
      "It is not a valid property."
    ],
    correctAnswer: "To get or set the HTML content of an element."
  },
  {
    id: 32,
    question: "What is the output of `console.log(1 == '1')`?",
    options: [
      "true",
      "false",
      "undefined",
      "Error"
    ],
    correctAnswer: "true"
  },
  {
    id: 33,
    question: "What is the correct syntax for an `if` statement?",
    options: [
      "if (condition) { ... }",
      "if condition { ... }",
      "if [condition] { ... }",
      "if { ... } (condition)"
    ],
    correctAnswer: "if (condition) { ... }"
  },
  {
    id: 34,
    question: "How do you create a new array?",
    options: [
      "let myArray = [];",
      "let myArray = new Array();",
      "Both of the above",
      "let myArray = {};"
    ],
    correctAnswer: "Both of the above"
  },
  {
    id: 35,
    question: "What is the output of `console.log(myFunction())` if `myFunction` does not have a `return` statement?",
    options: [
      "undefined",
      "null",
      "0",
      "Error"
    ],
    correctAnswer: "undefined"
  },
  {
    id: 36,
    question: "What is the purpose of the `querySelector` method?",
    options: [
      "To return the first element that matches a specified CSS selector(s) in the document.",
      "To return all elements that match a specified CSS selector(s) in the document.",
      "To select a random element.",
      "It is not a valid method."
    ],
    correctAnswer: "To return the first element that matches a specified CSS selector(s) in the document."
  },
  {
    id: 37,
    question: "What is the output of `console.log('hello'[1])`?",
    options: [
      "'e'",
      "'h'",
      "'l'",
      "undefined"
    ],
    correctAnswer: "'e'"
  },
  {
    id: 38,
    question: "What does the `pop` method do to an array?",
    options: [
      "It removes the last element from an array and returns that element.",
      "It adds a new element to the end of an array.",
      "It removes the first element from an array.",
      "It returns the last element of an array without modifying it."
    ],
    correctAnswer: "It removes the last element from an array and returns that element."
  },
  {
    id: 39,
    question: "What is the output of `console.log(!!0)`?",
    options: [
      "false",
      "true",
      "0",
      "undefined"
    ],
    correctAnswer: "false"
  },
  {
    id: 40,
    question: "What is the correct way to call a function named `myFunction`?",
    options: [
      "myFunction()",
      "call myFunction()",
      "myFunction",
      "run myFunction()"
    ],
    correctAnswer: "myFunction()"
  },
  {
    id: 41,
    question: "What is the output of `console.log(2 + 3 * 4)`?",
    options: [
      "14",
      "20",
      "24",
      "Error"
    ],
    correctAnswer: "14"
  },
  {
    id: 42,
    question: "What is the `...` operator called when used in a function's parameters?",
    options: [
      "Rest parameter",
      "Spread operator",
      "Destructuring operator",
      "It is not a valid operator."
    ],
    correctAnswer: "Rest parameter"
  },
  {
    id: 43,
    question: "What is the output of `console.log(typeof true)`?",
    options: [
      "'boolean'",
      "'string'",
      "'number'",
      "'undefined'"
    ],
    correctAnswer: "'boolean'"
  },
  {
    id: 44,
    question: "What is the purpose of the `Math.random()` function?",
    options: [
      "To return a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1).",
      "To return a random integer.",
      "To return a random number between 1 and 10.",
      "It is not a valid function."
    ],
    correctAnswer: "To return a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1)."
  },
  {
    id: 45,
    question: "What is the output of `console.log('hello'.toUpperCase())`?",
    options: [
      "'HELLO'",
      "'hello'",
      "'Hello'",
      "Error"
    ],
    correctAnswer: "'HELLO'"
  },
  {
    id: 46,
    question: "What is the correct way to create an object in JavaScript?",
    options: [
      "let myObj = {};",
      "let myObj = [];",
      "let myObj = new Object();",
      "Both a and c"
    ],
    correctAnswer: "Both a and c"
  },
  {
    id: 47,
    question: "What is the output of `console.log(10 % 3)`?",
    options: [
      "1",
      "3",
      "0",
      "Error"
    ],
    correctAnswer: "1"
  },
  {
    id: 48,
    question: "What is the `NaN` value in JavaScript?",
    options: [
      "'Not a Number'",
      "A special value representing a computational error.",
      "Both of the above",
      "None of the above"
    ],
    correctAnswer: "Both of the above"
  },
  {
    id: 49,
    question: "What is the output of `console.log(typeof(function(){}))`?",
    options: [
      "'function'",
      "'object'",
      "'undefined'",
      "'string'"
    ],
    correctAnswer: "'function'"
  },
  {
    id: 50,
    question: "What is the purpose of a `break` statement in a loop?",
    options: [
      "To terminate the current loop.",
      "To skip the current iteration and continue with the next one.",
      "To cause an error.",
      "It is not a valid statement."
    ],
    correctAnswer: "To terminate the current loop."
  }
];
