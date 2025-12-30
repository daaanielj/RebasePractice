
/**
 * Utility functions for a sample project
 */

export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export class TodoManager {
  private todos: Todo[] = [];

  addTodo(title: string) {
      const id = this.todos.length + 1;
      this.todos.push({ id, title, completed: false });
  }

  removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
  }

  listTodos(): Todo[] {
      return this.todos;
}
    addTodo(title: string) {
      const id = this.todos.length + 1;
      this.todos.push({ id, title, completed: false });
  }

  removeTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
  }

  toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
  }
  toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) todo.completed = !todo.completed;
  }

  listTodos(): Todo[] {
      return this.todos;
  }
}


// Example usage
const manager = new TodoManager();
manager.addTodo("Write Git rebase tutorial");
manager.addTodo("Practice rebasing branches");
manager.toggleTodo(1);

console.log(manager.listTodos());
