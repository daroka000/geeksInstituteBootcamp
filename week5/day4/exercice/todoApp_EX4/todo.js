export class TodoList {
    constructor() {
      this.tasks = [];
    }
    addTask(description) {
        const task = {
          description: description,
          completed: false,
        };
        this.tasks.push(task);
      }
    
      TaskComplete(index) {
        if (this.tasks[index]) {
          this.tasks[index].completed = true;
        }
      }
      listAllTasks() {
        return this.tasks;
      }}