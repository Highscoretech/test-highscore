export const testQuestions = [
  // HTML Questions
  {
    id: 1,
    question: "Which HTML tag is used to create a heading?",
    options: [
      "<head>",
      "<h1>",
      "<title>",
      "<header>"
    ],
    correctAnswer: "<h1>"
  },
  {
    id: 2,
    question: "What is the correct HTML tag to create a paragraph?",
    options: [
      "<para>",
      "<p>",
      "<text>",
      "<paragraph>"
    ],
    correctAnswer: "<p>"
  },
  {
    id: 3,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: [
      "<link>",
      "<href>",
      "<a>",
      "<url>"
    ],
    correctAnswer: "<a>"
  },
  {
    id: 4,
    question: "What attribute is used to specify the URL in an HTML link?",
    options: [
      "src",
      "href",
      "link",
      "url"
    ],
    correctAnswer: "href"
  },
  {
    id: 5,
    question: "Which tag is used to insert an image in HTML?",
    options: [
      "<image>",
      "<pic>",
      "<img>",
      "<photo>"
    ],
    correctAnswer: "<img>"
  },
  {
    id: 6,
    question: "What is the correct HTML tag for creating an unordered list?",
    options: [
      "<ul>",
      "<ol>",
      "<list>",
      "<ulist>"
    ],
    correctAnswer: "<ul>"
  },
  {
    id: 7,
    question: "Which tag is used for a line break in HTML?",
    options: [
      "<break>",
      "<br>",
      "<lb>",
      "<newline>"
    ],
    correctAnswer: "<br>"
  },
  {
    id: 8,
    question: "What tag is used to create a table in HTML?",
    options: [
      "<table>",
      "<tab>",
      "<tbl>",
      "<grid>"
    ],
    correctAnswer: "<table>"
  },

  // CSS Questions
  {
    id: 9,
    question: "Which CSS property is used to change text color?",
    options: [
      "font-color",
      "text-color",
      "color",
      "background-color"
    ],
    correctAnswer: "color"
  },
  {
    id: 10,
    question: "How do you apply CSS to change the background color?",
    options: [
      "color",
      "bg-color",
      "background-color",
      "background"
    ],
    correctAnswer: "background-color"
  },
  {
    id: 11,
    question: "Which CSS property is used to change the font size?",
    options: [
      "text-size",
      "font-size",
      "size",
      "text-style"
    ],
    correctAnswer: "font-size"
  },
  {
    id: 12,
    question: "How do you center text using CSS?",
    options: [
      "text-align: center",
      "align: center",
      "center: text",
      "text: center"
    ],
    correctAnswer: "text-align: center"
  },
  {
    id: 13,
    question: "Which property is used to add space inside an element's border?",
    options: [
      "margin",
      "padding",
      "spacing",
      "border-spacing"
    ],
    correctAnswer: "padding"
  },
  {
    id: 14,
    question: "What CSS property is used to add space outside an element's border?",
    options: [
      "padding",
      "margin",
      "border-space",
      "outside-space"
    ],
    correctAnswer: "margin"
  },
  {
    id: 15,
    question: "How do you select an element with id 'header' in CSS?",
    options: [
      ".header",
      "#header",
      "header",
      "*header"
    ],
    correctAnswer: "#header"
  },
  {
    id: 16,
    question: "How do you select elements with class 'button' in CSS?",
    options: [
      "#button",
      ".button",
      "button",
      "*button"
    ],
    correctAnswer: ".button"
  },

  // JavaScript Variables
  {
    id: 17,
    question: "How do you declare a variable in JavaScript?",
    options: [
      "var x",
      "variable x",
      "v x",
      "declare x"
    ],
    correctAnswer: "var x"
  },
  {
    id: 18,
    question: "Which keyword is used to declare a constant in JavaScript?",
    options: [
      "const",
      "constant",
      "var",
      "let"
    ],
    correctAnswer: "const"
  },
  {
    id: 19,
    question: "What is the result of: let x = 5; x = 10; console.log(x);?",
    options: [
      "5",
      "10",
      "Error",
      "undefined"
    ],
    correctAnswer: "10"
  },
  {
    id: 20,
    question: "Which of these is a valid variable name in JavaScript?",
    options: [
      "2name",
      "my-name",
      "myName",
      "my name"
    ],
    correctAnswer: "myName"
  },

  // JavaScript Functions
  {
    id: 21,
    question: "How do you define a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "def myFunction() {}",
      "create function myFunction() {}",
      "function: myFunction() {}"
    ],
    correctAnswer: "function myFunction() {}"
  },
  {
    id: 22,
    question: "How do you call a function named 'sayHello'?",
    options: [
      "call sayHello()",
      "sayHello()",
      "run sayHello()",
      "execute sayHello()"
    ],
    correctAnswer: "sayHello()"
  },
  {
    id: 23,
    question: "What keyword is used to return a value from a function?",
    options: [
      "give",
      "return",
      "send",
      "output"
    ],
    correctAnswer: "return"
  },
  {
    id: 24,
    question: "What will this function return: function add(a, b) { return a + b; }?",
    options: [
      "The sum of a and b",
      "Nothing",
      "Error",
      "undefined"
    ],
    correctAnswer: "The sum of a and b"
  },

  // JavaScript If/Else
  {
    id: 25,
    question: "What is the correct syntax for an if statement in JavaScript?",
    options: [
      "if x = 5 then",
      "if (x == 5)",
      "if x == 5:",
      "if [x == 5]"
    ],
    correctAnswer: "if (x == 5)"
  },
  {
    id: 26,
    question: "How do you write an if-else statement in JavaScript?",
    options: [
      "if (condition) {} else {}",
      "if condition {} else {}",
      "if (condition): else:",
      "if condition then else"
    ],
    correctAnswer: "if (condition) {} else {}"
  },
  {
    id: 27,
    question: "What will happen if the condition is false: if (false) { console.log('Hello'); }?",
    options: [
      "It prints 'Hello'",
      "It does nothing",
      "It throws an error",
      "It prints 'false'"
    ],
    correctAnswer: "It does nothing"
  },
  {
    id: 28,
    question: "Which operator is used for 'not equal' in JavaScript?",
    options: [
      "<>",
      "!=",
      "!==",
      "Both != and !=="
    ],
    correctAnswer: "Both != and !=="
  },

  // JavaScript DOM
  {
    id: 29,
    question: "How do you select an element by its ID in JavaScript?",
    options: [
      "document.getElementById('id')",
      "document.selectById('id')",
      "document.getElement('id')",
      "document.findById('id')"
    ],
    correctAnswer: "document.getElementById('id')"
  },
  {
    id: 30,
    question: "How do you change the text content of an element?",
    options: [
      "element.text = 'new text'",
      "element.innerHTML = 'new text'",
      "element.textContent = 'new text'",
      "Both innerHTML and textContent"
    ],
    correctAnswer: "Both innerHTML and textContent"
  },
  {
    id: 31,
    question: "How do you add an event listener for a click in JavaScript?",
    options: [
      "element.onClick = function() {}",
      "element.addEventListener('click', function() {})",
      "element.addClick(function() {})",
      "element.click(function() {})"
    ],
    correctAnswer: "element.addEventListener('click', function() {})"
  },
  {
    id: 32,
    question: "How do you change the background color of an element using JavaScript?",
    options: [
      "element.backgroundColor = 'red'",
      "element.style.backgroundColor = 'red'",
      "element.css.backgroundColor = 'red'",
      "element.color.background = 'red'"
    ],
    correctAnswer: "element.style.backgroundColor = 'red'"
  },

  // Mixed Simple Questions
  {
    id: 33,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks Text Mark Language",
      "Hyper Text Making Language"
    ],
    correctAnswer: "Hyper Text Markup Language"
  },
  {
    id: 34,
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets"
    ],
    correctAnswer: "Cascading Style Sheets"
  },
  {
    id: 35,
    question: "What will this code output: console.log(5 + 3);?",
    options: [
      "5 + 3",
      "8",
      "53",
      "Error"
    ],
    correctAnswer: "8"
  },
  {
    id: 36,
    question: "Which is the correct way to write a JavaScript comment?",
    options: [
      "<!-- This is a comment -->",
      "// This is a comment",
      "/* This is a comment */",
      "Both // and /* */ are correct"
    ],
    correctAnswer: "Both // and /* */ are correct"
  },
  {
    id: 37,
    question: "What is the result of: let age = 18; if (age >= 18) { console.log('Adult'); } else { console.log('Child'); }?",
    options: [
      "Adult",
      "Child",
      "18",
      "Error"
    ],
    correctAnswer: "Adult"
  },
  {
    id: 38,
    question: "How do you create a button in HTML?",
    options: [
      "<btn>Click me</btn>",
      "<button>Click me</button>",
      "<input type='button'>",
      "Both <button> and <input type='button'>"
    ],
    correctAnswer: "Both <button> and <input type='button'>"
  },
  {
    id: 39,
    question: "What CSS property controls the text font?",
    options: [
      "font-family",
      "text-font",
      "font-type",
      "text-family"
    ],
    correctAnswer: "font-family"
  },
  {
    id: 40,
    question: "What is the purpose of the <head> tag in HTML?",
    options: [
      "To create a heading",
      "To contain metadata about the document",
      "To start the document",
      "To create a header section"
    ],
    correctAnswer: "To contain metadata about the document"
  }
];
