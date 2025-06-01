const questionsBank = {
  "JavaScript": [
    {
      question: "What is 'use strict' in JavaScript?",
      options: ["A directive for strict mode", "A variable", "A function", "An API"],
      answer: "A directive for strict mode"
    },
    {
      question: "Which keyword is used to declare a constant in JavaScript?",
      options: ["let", "const", "var", "static"],
      answer: "const"
    },
    {
      question: "Which company developed JavaScript?",
      options: ["Netscape", "Microsoft", "Google", "Apple"],
      answer: "Netscape"
    },
    {
      question: "What type does `typeof null` return in JavaScript?",
      options: ["object", "null", "undefined", "string"],
      answer: "object"
    },
    {
      question: "Which method converts JSON data to a JavaScript object?",
      options: ["JSON.stringify()", "JSON.parse()", "JSON.object()", "JSON.convert()"],
      answer: "JSON.parse()"
    },
    {
      question: "What is a closure in JavaScript?",
      options: ["A function within a function", "A variable", "An API", "A loop"],
      answer: "A function within a function"
    },
    {
      question: "Which one is a falsy value in JavaScript?",
      options: ["0", "'0'", "[]", "{}"],
      answer: "0"
    },
    {
      question: "What is the result of `2 + '2'` in JavaScript?",
      options: ["4", "22", "NaN", "Error"],
      answer: "22"
    },
    {
      question: "Which operator is used to check both value and type?",
      options: ["==", "=", "===", "!="],
      answer: "==="
    },
    {
      question: "What does NaN stand for?",
      options: ["Not a Number", "Name and Number", "Null and None", "New and Next"],
      answer: "Not a Number"
    },
    {
      question: "Which array method removes the last element?",
      options: ["shift()", "pop()", "push()", "unshift()"],
      answer: "pop()"
    },
    {
      question: "How do you define an arrow function?",
      options: ["function() {}", "() => {}", "-> {}", "define() => {}"],
      answer: "() => {}"
    },
    {
      question: "Which of these is a JavaScript framework?",
      options: ["React", "Laravel", "Django", "Flask"],
      answer: "React"
    },
    {
      question: "Which symbol is used for comments in JavaScript?",
      options: ["//", "/*", "#", "--"],
      answer: "//"
    },
    {
      question: "How do you create a new object in JavaScript?",
      options: ["var obj = {}", "var obj = new Object()", "both", "none"],
      answer: "both"
    }
  ],

  "Java": [
    {
      question: "Who developed Java?",
      options: ["James Gosling", "Dennis Ritchie", "Guido van Rossum", "Bjarne Stroustrup"],
      answer: "James Gosling"
    },
    {
      question: "Which keyword is used to inherit a class in Java?",
      options: ["implements", "extends", "inherits", "instanceof"],
      answer: "extends"
    },
    {
      question: "Which method is the entry point in a Java program?",
      options: ["start()", "run()", "main()", "init()"],
      answer: "main()"
    },
    {
      question: "Which of these is not a Java feature?",
      options: ["Object-oriented", "Use of pointers", "Platform-independent", "Secure"],
      answer: "Use of pointers"
    },
    {
      question: "Which exception is thrown when a divide by zero occurs?",
      options: ["ArithmeticException", "NumberFormatException", "NullPointerException", "IOException"],
      answer: "ArithmeticException"
    },
    {
      question: "Which of these is a reserved keyword in Java?",
      options: ["object", "strictfp", "main", "className"],
      answer: "strictfp"
    },
    {
      question: "What is the size of an int variable in Java?",
      options: ["4 bytes", "2 bytes", "8 bytes", "16 bytes"],
      answer: "4 bytes"
    },
    {
      question: "Which package contains Scanner class?",
      options: ["java.io", "java.util", "java.net", "java.lang"],
      answer: "java.util"
    },
    {
      question: "What is Java Virtual Machine (JVM)?",
      options: ["Compiler", "Interpreter", "Runtime Environment", "Debugger"],
      answer: "Runtime Environment"
    },
    {
      question: "Which access modifier makes a member visible everywhere?",
      options: ["public", "protected", "private", "default"],
      answer: "public"
    },
    {
      question: "Which keyword is used to prevent inheritance?",
      options: ["final", "static", "const", "abstract"],
      answer: "final"
    },
    {
      question: "Which loop checks the condition after executing the loop body?",
      options: ["for", "while", "do-while", "nested for"],
      answer: "do-while"
    },
    {
      question: "What is the superclass of every class in Java?",
      options: ["Object", "Class", "Main", "System"],
      answer: "Object"
    },
    {
      question: "Which collection class allows you to access elements by unique key?",
      options: ["Map", "List", "Set", "Queue"],
      answer: "Map"
    },
    {
      question: "Which keyword creates a new object in Java?",
      options: ["new", "create", "make", "build"],
      answer: "new"
    }
  ],

  "Python": [
    {
      question: "Who created Python?",
      options: ["Guido van Rossum", "Dennis Ritchie", "Bjarne Stroustrup", "James Gosling"],
      answer: "Guido van Rossum"
    },
    {
      question: "What is the file extension for Python files?",
      options: [".python", ".py", ".pyt", ".pt"],
      answer: ".py"
    },
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["function", "def", "fun", "define"],
      answer: "def"
    },
    {
      question: "Which data type is mutable?",
      options: ["tuple", "string", "list", "int"],
      answer: "list"
    },
    {
      question: "What is the output of len([1,2,3])?",
      options: ["1", "3", "2", "0"],
      answer: "3"
    },
    {
      question: "Which method adds an item to a list?",
      options: ["add()", "append()", "insert()", "push()"],
      answer: "append()"
    },
    {
      question: "How do you start a comment in Python?",
      options: ["//", "#", "--", "/*"],
      answer: "#"
    },
    {
      question: "Which statement is used for exception handling?",
      options: ["try-except", "if-else", "for-else", "switch-case"],
      answer: "try-except"
    },
    {
      question: "Which operator is used for exponentiation?",
      options: ["^", "**", "exp", "pow"],
      answer: "**"
    },
    {
      question: "What is the keyword to create a class?",
      options: ["function", "method", "class", "define"],
      answer: "class"
    },
    {
      question: "Which module handles regular expressions?",
      options: ["re", "regex", "pyregex", "pattern"],
      answer: "re"
    },
    {
      question: "Which function returns the absolute value?",
      options: ["abs()", "fabs()", "absolute()", "absval()"],
      answer: "abs()"
    },
    {
      question: "What is the output of 5//2?",
      options: ["2.5", "2", "3", "1"],
      answer: "2"
    },
    {
      question: "What keyword is used to handle exceptions?",
      options: ["catch", "handle", "except", "error"],
      answer: "except"
    },
    {
      question: "Which built-in function gets user input?",
      options: ["input()", "scan()", "get()", "read()"],
      answer: "input()"
    }
  ],
"HTML": [
    {
      question: "What does HTML stand for?",
      options: ["HyperText Markup Language", "Hyper Transfer Markup Language", "HighText Machine Language", "HyperText Markdown Language"],
      answer: "HyperText Markup Language"
    },
    {
      question: "Which tag is used to create a hyperlink in HTML?",
      options: ["<link>", "<a>", "<href>", "<hyperlink>"],
      answer: "<a>"
    },
    {
      question: "Which tag is used for inserting a line break?",
      options: ["<break>", "<br>", "<lb>", "<line>"],
      answer: "<br>"
    },
    {
      question: "Which tag is used to display images in HTML?",
      options: ["<picture>", "<photo>", "<img>", "<image>"],
      answer: "<img>"
    },
    {
      question: "Which element represents the largest heading?",
      options: ["<h6>", "<h4>", "<h1>", "<h3>"],
      answer: "<h1>"
    },
    {
      question: "What is the correct syntax for a comment in HTML?",
      options: ["<!-- comment -->", "// comment", "/* comment */", "# comment"],
      answer: "<!-- comment -->"
    },
    {
      question: "What is the purpose of the <title> tag?",
      options: ["To define a heading", "To specify a title for the page", "To insert a link", "To embed a video"],
      answer: "To specify a title for the page"
    },
    {
      question: "Which tag is used to make text bold?",
      options: ["<b>", "<bold>", "<strong>", "both <b> and <strong>"],
      answer: "both <b> and <strong>"
    },
    {
      question: "Which attribute is used to open a link in a new tab?",
      options: ["target='_blank'", "new='true'", "window='new'", "tab='open'"],
      answer: "target='_blank'"
    },
    {
      question: "Which doctype declaration is used in HTML5?",
      options: ["<!DOCTYPE html>", "<!HTML5>", "<!DOCTYPE HTML PUBLIC>", "<html5>"],
      answer: "<!DOCTYPE html>"
    },
    {
      question: "Which tag groups block-level content in HTML5?",
      options: ["<span>", "<div>", "<group>", "<section>"],
      answer: "<section>"
    },
    {
      question: "Which tag is used for inserting an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>"
    },
    {
      question: "Which tag is used to display tabular data?",
      options: ["<table>", "<tab>", "<data>", "<grid>"],
      answer: "<table>"
    },
    {
      question: "Which attribute sets an image's alternative text?",
      options: ["alt", "title", "src", "caption"],
      answer: "alt"
    },
    {
      question: "What is the correct HTML element for inserting a line separator?",
      options: ["<br>", "<line>", "<hr>", "<separator>"],
      answer: "<hr>"
    }
  ],

  "CSS": [
    {
      question: "What does CSS stand for?",
      options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      answer: "Cascading Style Sheets"
    },
    {
      question: "Which property changes text color?",
      options: ["text-color", "fgcolor", "color", "font-color"],
      answer: "color"
    },
    {
      question: "Which CSS property is used to set background color?",
      options: ["background-color", "bgcolor", "color", "background"],
      answer: "background-color"
    },
    {
      question: "Which property controls the size of text?",
      options: ["font-size", "text-size", "text", "font"],
      answer: "font-size"
    },
    {
      question: "Which selector targets all elements?",
      options: ["*", "all", "html", "."],
      answer: "*"
    },
    {
      question: "Which CSS property sets space inside an element's border?",
      options: ["margin", "border", "padding", "spacing"],
      answer: "padding"
    },
    {
      question: "Which property is used to make text italic?",
      options: ["font-style", "font-weight", "font-variant", "text-style"],
      answer: "font-style"
    },
    {
      question: "Which property sets the space between lines of text?",
      options: ["line-spacing", "line-height", "spacing", "text-height"],
      answer: "line-height"
    },
    {
      question: "Which CSS property sets the width of an element?",
      options: ["height", "size", "width", "margin"],
      answer: "width"
    },
    {
      question: "Which CSS unit is relative to the parent element's font size?",
      options: ["px", "em", "%", "vh"],
      answer: "em"
    },
    {
      question: "Which property controls how an element is displayed?",
      options: ["display", "show", "position", "type"],
      answer: "display"
    },
    {
      question: "Which shorthand property sets margin values?",
      options: ["margin", "padding", "space", "position"],
      answer: "margin"
    },
    {
      question: "Which property moves an element from its normal position?",
      options: ["float", "align", "position", "overflow"],
      answer: "position"
    },
    {
      question: "Which keyword in CSS defines custom property?",
      options: ["var()", "--", "define()", "@variable"],
      answer: "--"
    },
    {
      question: "Which CSS property sets shadow for text?",
      options: ["text-shadow", "box-shadow", "shadow", "font-shadow"],
      answer: "text-shadow"
    }
  ],

  "React": [
    {
      question: "What is React primarily used for?",
      options: ["Styling web pages", "Managing databases", "Building user interfaces", "Creating server-side APIs"],
      answer: "Building user interfaces"
    },
    {
      question: "What does JSX stand for?",
      options: ["JavaScript XML", "JavaScript Extension", "Java Syntax eXtension", "JavaScript XHTML"],
      answer: "JavaScript XML"
    },
    {
      question: "Which method is used to create a React component?",
      options: ["React.component()", "React.createComponent()", "React.createElement()", "React.makeComponent()"],
      answer: "React.createElement()"
    },
    {
      question: "Which hook is used for state management in React?",
      options: ["useEffect", "useState", "useRef", "useMemo"],
      answer: "useState"
    },
    {
      question: "What is the virtual DOM in React?",
      options: ["A lightweight copy of real DOM", "The main browser DOM", "An API", "A server-side database"],
      answer: "A lightweight copy of real DOM"
    },
    {
      question: "Which command starts the React development server?",
      options: ["npm start", "npm run", "npm build", "npm deploy"],
      answer: "npm start"
    },
    {
      question: "Which of the following is a React lifecycle method?",
      options: ["componentDidMount()", "start()", "renderView()", "beforeLoad()"],
      answer: "componentDidMount()"
    },
    {
      question: "How many parent elements can a React component return?",
      options: ["Any number", "Only one", "Two", "None"],
      answer: "Only one"
    },
    {
      question: "Which of the following can hold component state?",
      options: ["props", "this.state", "getState", "setState"],
      answer: "this.state"
    },
    {
      question: "Which hook runs after every render?",
      options: ["useState", "useEffect", "useRef", "useContext"],
      answer: "useEffect"
    },
    {
      question: "What tool can analyze React performance?",
      options: ["React DevTools", "Redux", "Webpack", "Postman"],
      answer: "React DevTools"
    },
    {
      question: "Which library is commonly used for routing in React?",
      options: ["React Router", "React Switch", "React Path", "React Page"],
      answer: "React Router"
    },
    {
      question: "Which symbol is used to create a fragment?",
      options: ["<Fragment>", "<></>", "<Div>", "<Group>"],
      answer: "<></>"
    },
    {
      question: "How do you pass data to child components?",
      options: ["through props", "through states", "through variables", "through functions"],
      answer: "through props"
    },
    {
      question: "What does useRef() return?",
      options: ["A mutable ref object", "An immutable variable", "A function", "A state value"],
      answer: "A mutable ref object"
    }
  ]
};


export default questionsBank;
