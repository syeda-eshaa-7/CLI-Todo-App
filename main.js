#!/usr/bin/env node
import inquirer from "inquirer";
let toDo = [];
let condition = true;
console.log("    WELOCOME TO YOUR TODO APP");
console.log("*************************************");
while (condition) {
    let task = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What Do You Want To Add In Your Todo List"
        },
        {
            name: "addMore",
            type: "confirm",
            default: "false",
            message: "Do You Want To Add More In Your Todo List"
        }
    ]);
    toDo.push(task.addMore);
    condition == toDo;
    console.log(toDo);
}
