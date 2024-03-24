#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation, { rainbow } from "chalk-animation"

async function Welcome () {
  let name = chalkAnimation.rainbow("Welcome to the Program")
  await new Promise((resolve) => {
    setTimeout(resolve,1000);
  });
  name.stop();
}await Welcome()

console.log(chalk.blue.bold("\nCLI Calculator\n"));

let condition = true;
while (condition) {
  let answer = await inquirer.prompt([{
    name: "FirstNumber",
    type: "input",
    message: "Enter your first number",
    validate: (answer) => {
      if (isNaN(answer) || answer === '') {
        return "please enter a number";
      }
      return true;
    },
    },
    {
      name: "SecondNumber",
      type: "input",
      message: "Enter your Second Number",
      validate: (answer) => {
        if (isNaN(answer) || answer === '') {
          return "please enter a number";
        }
        return true;
      },
    },
    
    
    {
      name: "Operator",
      type: "list",
      message: "Select one of the operator to perform operations:",
      choices: ["Addition", "Subtraction", "Multiplication", "Division", "Exponents", "Modulus"],
      validate: (answer) => {
        if (isNaN(answer) || answer === '') {
          return "please enter a number";
        }
        return true;
        
      }
    }
    ])
    console.log(answer)
    
    // conditional statement
    
      if(answer.Operator === "Addition"){
        console.log(Number(answer.FirstNumber) + Number(answer.SecondNumber));
      }
      else if(answer.Operator === "Subtraction"){
        console.log(Number(answer.FirstNumber) - Number(answer.SecondNumber));
      }else if(answer.Operator === "Multiplication"){
        console.log(Number(answer.FirstNumber) * Number( answer.SecondNumber));
      }else if(answer.Operator === "Division"){
        console.log(Number(answer.FirstNumber) / Number( answer.SecondNumber));
      }else if(answer.Operator === "Exponents"){
        console.log(Number(answer.FirstNumber) ** Number( answer.SecondNumber));
      }
      else if(answer.Operator === "Modulus"){
        console.log(Number(answer.FirstNumber) % Number( answer.SecondNumber));
      }
      else{
        console.log("Please select valid operator")
      }

  let repeatanswer = await inquirer.prompt([{
    name: "Restart",
    type: "list",
    message: "Do you want to continue?",
    choices: ["Yes","No"]
    
  }]);
console.log(repeatanswer);

  if (repeatanswer.Restart === "No") {
    condition = false; // Exit the loop if the user chooses "No"
  }
 }

 