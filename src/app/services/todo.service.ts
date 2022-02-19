import { Todo } from "../models/todo";

export let todos: Todo[] = [];
export let comp: Todo[] = [];

export function getTodo(): Promise<Todo[]> {
  return new Promise((suc) => {
    setTimeout(() => {
      suc(todos);
    }, 2000);
  });
}

export function aggiungiTodo(titolo: string) {
  return new Promise<void>((suc) => {
    setTimeout(() => {
      let newTodo: Todo = {
        title: titolo,
        completed: false,
        id: todos.length + 1,
      };
      todos.push(newTodo);
      console.log(todos);
      suc();
    }, 2000);
  });
}

export function aggiungiCompletati(titolo: string) {
  return new Promise<void>((ris) => {
    setTimeout(() => {
      let newComp: Todo = {
        id: comp.length + 1,
        completed: true,
        title: titolo,
      };
      comp.push(newComp);
      ris();
    }, 2000);
  });
}

export function getComp(): Promise<Todo[]> {
    return new Promise((ris) => {
      setTimeout(() => {
        ris(comp);
      }, 2000);
    });
  }
