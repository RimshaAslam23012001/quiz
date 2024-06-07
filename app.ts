#!  /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
const quiz : {
    question_1: string;
    question_2: string;
    question_3: string;
    question_4: string;
    question_5: string;
    question_6: string;
    question_7: string;
    question_8: string;
    question_9: string;
    question_10: string;
}
= await inquirer.prompt([
    {
        name:"question_1",
        type: "list",
        message: "Q.1 Which of the following companies has developed Typescript?",
        choices: ["Amzon","Microsoft","Oracle","Typescript"]     //Microsoft
    },
    {
        name:"question_2",
        type: "list",
        message: "Q.2 What is the typing principle of typescript?",
        choices: ["Gradual","Duck","Dynamic","All of the above"]    //Dynamic
    },
    {
        name:"question_3",
        type: "list",
        message: "Q.3 Which of the following file names is the extension for typescript?",
        choices: [".tt",".tsx",".nod",".ts"]         //.ts     
    },
    {
        name:"question_4",
        type: "list",
        message: "Q.4 Which of the computer programming language below has influenced the creation of typescript?",
        choices: ["Javascript","Cs","Java","All of the above"]       //Javascript
    },
    {
        name:"question_5",
        type: "list",
        message: "Q.5 What is the correct way to check if two values are not equal in Typescript?",
        choices: ["a == b","a === b","a = b","a !== b"]
    },
    {
        name:"question_6",
        type: "list",
        message: "Q.6 Which of the following characters is commonly allowed in variables name in Typescript?",
        choices: ["$","@","#","&"]
    },
    {
        name:"question_7",
        type: "list",
        message: "Q.7 Which operator is commonly used for string concatenation in Typescript?",
        choices: ["+","-","*","/"]
    }, 
    {
        name:"question_8",
        type: "list",
        message: "Q.8 In Typescript, which symbol is commonly used to terminate a statement?",
        choices: [".",":",";",","]
    },
    {
        name:"question_9",
        type: "list",
        message: "Q.9 Which method of inquirer.js is used to start the prompt interface and receive user input?",
        choices: ["start()","prompt()","init()","run()"]
    },
    {
        name:"question_10",
        type: "list",
        message: "Q.10 What is a module in Typescript?",
        choices: ["A data type","A way to organize code into seprate pieces","A function","All of above"]  //b
    }
]);
let score: number = 0;
switch (quiz.question_1) {
    case "Microsoft":
        console.log("1."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("1."+(chalk.bold.italic.red ("INCORRECT!")));
        
}
switch (quiz.question_2) {
    case "Dynamic":
        console.log("2."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("2."+(chalk.bold.italic.red ("INCORRECT!")));
}
switch (quiz.question_3) {
    case ".ts":
        console.log("3."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("3."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_4) {
    case "Javascript":
        console.log("4."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("4."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_5) {
    case "a !== b":
        console.log("5."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("5."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_6) {
    case "$":
        console.log("6."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("6."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_7) {
    case "+":
        console.log("7."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("7."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_8) {
    case ";":
        console.log("8."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("8."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_9) {
    case "prompt()":
        console.log("9."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("9."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
switch (quiz.question_10) {
    case "A way to organize code into seprate pieces":
        console.log("10."+(chalk.bold.italic.green ("CORRECT!")));
        ++score;
        break;

    default:
        console.log("10."+(chalk.bold.italic.red ("INCORRECT!")));
    
}
console.log(`score:${chalk.bold.italic.yellowBright (score)}`);










