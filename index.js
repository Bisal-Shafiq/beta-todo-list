import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "select an operation",
            name: "select",
            choices: ["Add", "Update", "View", "Delete"],
        });
        // Add list
        if (answer.select == "Add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add itmes in the list",
                name: "todo",
            });
            todos.push(addTodo.todo);
            todos.forEach(todo => console.log(chalk.blue.bold.italic(todo)));
            //console.log(todos);
        }
        //Updatelist
        if (answer.select == "Update") {
            let UpdateTodo = await inquirer.prompt({
                type: "list",
                message: "Update item in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                message: "Add itmes in the list",
                name: "todo",
            });
            let newTodo = todos.filter(val => val !== UpdateTodo.todo);
            todos = [...newTodo, addTodo.todo];
            todos.forEach(todo => console.log(chalk.yellow.bold.italic(todo)));
        }
        //View list
        if (answer.select == "View") {
            console.log("***TO DO LIST ***");
            todos.forEach(todo => console.log(todo));
            //console.log(todos);
            console.log(chalk.gray.bold.italic("********************"));
        }
        //Delete list item
        if (answer.select == "Delete") {
            let DeleteTodo = await inquirer.prompt({
                type: "list",
                message: "Update item in the list",
                name: "todo",
                choices: todos.map(item => item)
            });
            let newTodo = todos.filter(val => val !== DeleteTodo.todo);
            todos = [...newTodo];
            todos.forEach(todo => console.log(chalk.green.bold.italic(todo)));
            //console.log(todos);
        }
    } while (true);
}
createTodo(todos);
