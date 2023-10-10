const questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hypertext Markup Language", "Hyperlink and Text Markup Language", "High Text Markup Language", "Hypertext and Text Markup Language"],
        answer: "Hypertext Markup Language"
    },
    {
        question: "Which CSS property is used for controlling the size and space between lines of text?",
        options: ["line-height", "font-size", "letter-spacing", "text-spacing"],
        answer: "line-height"
    },
    {
        question: "In JavaScript, which function is used to parse a string and return it as an integer?",
        options: ["parseInt()", "parseInteger()", "stringToInteger()", "toInteger()"],
        answer: "parseInt()"
    },
    {
        question: "What does CSS stand for?",
        options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        answer: "Cascading Style Sheets"
    },
    {
        question: "Which HTML tag is used to create an unordered list?",
        options: ["<ol>", "<dl>", "<ul>", "<li>"],
        answer: "<ul>"
    },
    {
        question: "Which JavaScript keyword is used to declare a variable?",
        options: ["var", "let", "const", "variable"],
        answer: "var"
    },
    {
        question: "In CSS, which property is used to change the background color of an element?",
        options: ["color", "background-color", "text-color", "bgcolor"],
        answer: "background-color"
    },
    {
        question: "Which HTML tag is used to create a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        answer: "<a>"
    },
    {
        question: "What is the result of 5 + '5' in JavaScript?",
        options: ["10", "55", "5 + '5'", "undefined"],
        answer: "55"
    },
    {
        question: "Which event in JavaScript is triggered when an HTML element is clicked?",
        options: ["onmouseover", "onchange", "onclick", "onsubmit"],
        answer: "onclick"
    },
    {
        question: "Which HTML tag is used to create a line break?",
        options: ["<break>", "<br>", "<newline>", "<lb>"],
        answer: "<br>"
    },
    {
        question: "In CSS, what property is used to control the spacing between elements?",
        options: ["margin", "padding", "border", "spacing"],
        answer: "margin"
    },
    {
        question: "What is the JavaScript 'null' value typically used to represent?",
        options: ["An empty string", "An undefined variable", "An error", "No value or no object"],
        answer: "No value or no object"
    },
    {
        question: "Which HTML tag is used to define an external JavaScript file?",
        options: ["<script>", "<js>", "<javascript>", "<external>"],
        answer: "<script>"
    },
    {
        question: "In CSS, how can you select all <p> elements inside a <div> element?",
        options: ["div p", "p + div", "p > div", "div > p"],
        answer: "div > p"
    },
    {
        question: "What does the 'typeof' operator in JavaScript return when used on an array?",
        options: ["'array'", "'object'", "'undefined'", "'number'"],
        answer: "'object'"
    },
    {
        question: "Which CSS property is used for changing the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        answer: "color"
    },
    {
        question: "What is the purpose of the HTML <meta> tag?",
        options: ["To create a hyperlink", "To define metadata about the document", "To format text", "To insert images"],
        answer: "To define metadata about the document"
    },
    {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        options: ["push()", "append()", "addToEnd()", "insertLast()"],
        answer: "push()"
    },
    {
        question: "In CSS, what does the 'z-index' property control?",
        options: ["Element visibility", "Element font size", "Element stacking order", "Element width"],
        answer: "Element stacking order"
    }
    
    
    // Add more questions here
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");
const scoreText = document.getElementById("score");

function loadQuestion() {
    const current = questions[currentQuestion];
    questionText.textContent = current.question;
    optionsContainer.innerHTML = "";

    current.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const current = questions[currentQuestion];
    if (selectedOption === current.answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionText.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
    scoreText.textContent = `Score: ${score}`;
}

loadQuestion();
nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});
