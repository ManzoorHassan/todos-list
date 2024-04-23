#! /usr/bin/env node
import inquirer from 'inquirer';
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what would you like to add in todos?"
        },
        {
            name: "addMore",
            type: "confirm",
            message: "would you like to add more in your todos",
            default: "false",
        }
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
