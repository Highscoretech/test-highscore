export const testQuestions = [
  {
    id: 1,
    question: "What is the result of: let x = [1,2,3]; x[10] = 99; x.length?",
    options: [
      "3",
      "11",
      "10",
      "99"
    ],
    correctAnswer: "11"
  },
  {
    id: 2,
    question: "Which of the following will NOT clone an object in JavaScript?",
    options: [
      "Object.assign({}, obj)",
      "JSON.parse(JSON.stringify(obj))",
      "let clone = {...obj}",
      "let clone = obj"
    ],
    correctAnswer: "let clone = obj"
  },
  {
    id: 3,
    question: "What is the output of: typeof null?",
    options: [
      "'null'",
      "'object'",
      "'undefined'",
      "'number'"
    ],
    correctAnswer: "'object'"
  },
  {
    id: 4,
    question: "Which method can be used to deeply compare two objects for equality?",
    options: [
      "Object.is(obj1, obj2)",
      "JSON.stringify(obj1) === JSON.stringify(obj2)",
      "obj1 == obj2",
      "obj1 === obj2"
    ],
    correctAnswer: "JSON.stringify(obj1) === JSON.stringify(obj2)"
  },
  {
    id: 5,
    question: "What is the output of: [1,2,3].map(parseInt)?",
    options: [
      "[1, NaN, NaN]",
      "[1, 2, 3]",
      "[NaN, NaN, NaN]",
      "[1, 2, NaN]"
    ],
    correctAnswer: "[1, NaN, NaN]"
  },
  {
    id: 6,
    question: "How do you create a private field in a JavaScript class?",
    options: [
      "this._field",
      "#field",
      "private field",
      "field: private"
    ],
    correctAnswer: "#field"
  },
  {
    id: 7,
    question: "Which of the following is NOT a valid way to declare a variable in ES6?",
    options: [
      "let x = 1;",
      "const x = 1;",
      "var x = 1;",
      "int x = 1;"
    ],
    correctAnswer: "int x = 1;"
  },
  {
    id: 8,
    question: "What is the output of: (() => { let a = 5; return typeof a; })();",
    options: [
      "'number'",
      "'undefined'",
      "'object'",
      "'string'"
    ],
    correctAnswer: "'number'"
  },
  {
    id: 9,
    question: "Which statement about JavaScript closures is TRUE?",
    options: [
      "Closures can only access global variables.",
      "Closures cannot access variables from their parent scope.",
      "Closures retain access to the scope in which they were created.",
      "Closures are only available in ES6."
    ],
    correctAnswer: "Closures retain access to the scope in which they were created."
  },
  {
    id: 10,
    question: "What is the output of: [1,2,3].forEach((x, i, arr) => arr[i] = x * 2);",
    options: [
      "[2,4,6]",
      "[1,2,3]",
      "undefined",
      "[2,2,2]"
    ],
    correctAnswer: "[2,4,6]"
  },
  {
    id: 11,
    question: "Which of the following will NOT create a new array?",
    options: [
      "arr.slice()",
      "[...arr]",
      "arr.map(x => x)",
      "arr"
    ],
    correctAnswer: "arr"
  },
  {
    id: 12,
    question: "What is the output of: let a = {}; let b = a; a.x = 1; b.x?",
    options: [
      "undefined",
      "1",
      "null",
      "Error"
    ],
    correctAnswer: "1"
  },
  {
    id: 13,
    question: "Which of the following is NOT a valid way to define a function in JavaScript?",
    options: [
      "function foo() {}",
      "const foo = function() {}",
      "const foo = () => {}",
      "def foo() {}"
    ],
    correctAnswer: "def foo() {}"
  },
  {
    id: 14,
    question: "What is the output of: class A { static x = 1; }; A.x;",
    options: [
      "undefined",
      "1",
      "Error",
      "null"
    ],
    correctAnswer: "1"
  },
  {
    id: 15,
    question: "Which of the following will NOT throw an error?",
    options: [
      "const a = 1; a = 2;",
      "let a = 1; a = 2;",
      "Object.freeze({a:1}).a = 2;",
      "const obj = Object.freeze({a:1}); obj.a = 2;"
    ],
    correctAnswer: "let a = 1; a = 2;"
  },
  {
    id: 16,
    question: "How do you check if a property exists in an object?",
    options: [
      "'prop' in obj",
      "obj.hasOwnProperty('prop')",
      "obj.prop !== undefined",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 17,
    question: "What is the output of: [1,2,3].reduce((a,b) => a+b, 0);",
    options: [
      "6",
      "0",
      "1",
      "Error"
    ],
    correctAnswer: "6"
  },
  {
    id: 18,
    question: "Which of the following is NOT a valid array method?",
    options: [
      "map",
      "reduce",
      "filter",
      "collect"
    ],
    correctAnswer: "collect"
  },
  {
    id: 19,
    question: "What is the output of: [1,2,3].concat([4,5])?",
    options: [
      "[1,2,3,4,5]",
      "[1,2,3].concat([4,5])",
      "[1,2,3].append([4,5])",
      "Error"
    ],
    correctAnswer: "[1,2,3,4,5]"
  },
  {
    id: 20,
    question: "How do you remove the first element from an array in JavaScript?",
    options: [
      "shift()",
      "unshift()",
      "pop()",
      "deleteFirst()"
    ],
    correctAnswer: "shift()"
  },
  {
    id: 21,
    question: "What is the output of: '5' + 3 - 1?",
    options: [
      "53",
      "57",
      "Invalid operation",
      "8"
    ],
    correctAnswer: "8"
  },
  {
    id: 22,
    question: "Which of the following is a JavaScript primitive data type?",
    options: [
      "String",
      "Boolean",
      "Number",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 23,
    question: "What is the output of: Boolean('')?",
    options: [
      "true",
      "false",
      "null",
      "undefined"
    ],
    correctAnswer: "false"
  },
  {
    id: 24,
    question: "How do you create a new instance of an object in JavaScript?",
    options: [
      "let obj = new Object();",
      "let obj = Object.create();",
      "let obj = {};",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 25,
    question: "What is the output of: (function() { return typeof arguments; })();",
    options: [
      "'object'",
      "'undefined'",
      "'array'",
      "'arguments'"
    ],
    correctAnswer: "'object'"
  },
  {
    id: 26,
    question: "Which of the following methods can be used to convert an object to a JSON string?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "Object.toJSON()",
      "Object.stringify()"
    ],
    correctAnswer: "JSON.stringify()"
  },
  {
    id: 27,
    question: "What is the output of: Math.max() + Math.min()?",
    options: [
      "NaN",
      "undefined",
      "Infinity",
      "Error"
    ],
    correctAnswer: "NaN"
  },
  {
    id: 28,
    question: "How do you declare a constant in JavaScript?",
    options: [
      "const x = 1;",
      "let x = 1;",
      "var x = 1;",
      "constant x = 1;"
    ],
    correctAnswer: "const x = 1;"
  },
  {
    id: 29,
    question: "What is the output of: [1,2,3].slice(1,2)?",
    options: [
      "[2]",
      "[1,2]",
      "[2,3]",
      "Error"
    ],
    correctAnswer: "[2]"
  },
  {
    id: 30,
    question: "Which of the following is a correct way to write a ternary operator in JavaScript?",
    options: [
      "condition ? expr1 : expr2",
      "condition ? expr1 ; expr2",
      "condition : expr1 ? expr2",
      "if (condition) expr1 else expr2"
    ],
    correctAnswer: "condition ? expr1 : expr2"
  },
  {
    id: 31,
    question: "What is the output of: 'Hello' + +'World'?",
    options: [
      "'HelloWorld'",
      "'Hello NaN'",
      "'Hello '",
      "Error"
    ],
    correctAnswer: "'Hello World'"
  },
  {
    id: 32,
    question: "How do you create a new array with elements 1 through 5 in JavaScript?",
    options: [
      "Array(1,2,3,4,5)",
      "new Array(1,2,3,4,5)",
      "Array.of(1,2,3,4,5)",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 33,
    question: "What is the output of: (1, 2, 3).reduce((a, b) => a + b)?",
    options: [
      "6",
      "undefined",
      "Error",
      "NaN"
    ],
    correctAnswer: "Error"
  },
  {
    id: 34,
    question: "Which of the following is NOT a valid way to iterate over an array in JavaScript?",
    options: [
      "forEach()",
      "map()",
      "filter()",
      "each()"
    ],
    correctAnswer: "each()"
  },
  {
    id: 35,
    question: "What is the output of: [1,2,3].join('-')?",
    options: [
      "'1-2-3'",
      "'123'",
      "'1,2,3'",
      "Error"
    ],
    correctAnswer: "'1-2-3'"
  },
  {
    id: 36,
    question: "How do you find the index of an element in an array in JavaScript?",
    options: [
      "array.indexOf(element)",
      "array.findIndex(element)",
      "array.search(element)",
      "All of the above"
    ],
    correctAnswer: "array.indexOf(element)"
  },
  {
    id: 37,
    question: "What is the output of: '2' * '3'?",
    options: [
      "6",
      "'6'",
      "Error",
      "NaN"
    ],
    correctAnswer: "6"
  },
  {
    id: 38,
    question: "Which of the following is a correct way to handle exceptions in JavaScript?",
    options: [
      "try {} catch (e) {}",
      "try {} catch (error) {}",
      "try {} finally {}",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 39,
    question: "What is the output of: (function(x) { return x * x; })(3)?",
    options: [
      "9",
      "6",
      "Error",
      "NaN"
    ],
    correctAnswer: "9"
  },
  {
    id: 40,
    question: "How do you create a shallow copy of an array in JavaScript?",
    options: [
      "array.slice()",
      "array.concat()",
      "array.map(x => x)",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 41,
    question: "What is the output of: Math.round(4.7)?",
    options: [
      "4",
      "5",
      "Error",
      "NaN"
    ],
    correctAnswer: "5"
  },
  {
    id: 42,
    question: "Which of the following is NOT a valid way to define a class in JavaScript?",
    options: [
      "class MyClass {}",
      "function MyClass() {}",
      "const MyClass = class {}",
      "All of the above are valid"
    ],
    correctAnswer: "All of the above are valid"
  },
  {
    id: 43,
    question: "What is the output of: [1,2,3].push(4,5)?",
    options: [
      "[1,2,3,4,5]",
      "[4,5]",
      "[1,2,3]",
      "Error"
    ],
    correctAnswer: "[1,2,3,4,5]"
  },
  {
    id: 44,
    question: "How do you remove an element from an array by its value in JavaScript?",
    options: [
      "array.remove(value)",
      "array.delete(value)",
      "array.filter(x => x !== value)",
      "All of the above"
    ],
    correctAnswer: "array.filter(x => x !== value)"
  },
  {
    id: 45,
    question: "What is the output of: 'Hello'.charAt(0)?",
    options: [
      "'H'",
      "'e'",
      "'Hello'",
      "Error"
    ],
    correctAnswer: "'H'"
  },
  {
    id: 46,
    question: "Which of the following is a correct way to define a default parameter in a function?",
    options: [
      "function foo(x = 1) {}",
      "function foo(x : 1) {}",
      "function foo(int x = 1) {}",
      "All of the above"
    ],
    correctAnswer: "function foo(x = 1) {}"
  },
  {
    id: 47,
    question: "What is the output of: (1, 2, 3).map(x => x * 2)?",
    options: [
      "[2, 4, 6]",
      "[1, 2, 3]",
      "Error",
      "NaN"
    ],
    correctAnswer: "[2, 4, 6]"
  },
  {
    id: 48,
    question: "How do you check if a string contains a substring in JavaScript?",
    options: [
      "'substring' in string",
      "string.includes('substring')",
      "string.indexOf('substring') !== -1",
      "All of the above"
    ],
    correctAnswer: "All of the above"
  },
  {
    id: 49,
    question: "What is the output of: Math.sqrt(16)?",
    options: [
      "4",
      "8",
      "16",
      "Error"
    ],
    correctAnswer: "4"
  },
  {
    id: 50,
    question: "How do you create a new Set in JavaScript?",
    options: [
      "let s = new Set();",
      "let s = Set();",
      "let s = new Set({});",
      "All of the above"
    ],
    correctAnswer: "let s = new Set();"
  }
];
