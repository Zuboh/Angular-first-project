import { Component, OnInit } from "@angular/core";
import { Button } from "bootstrap";
import { Todo } from "../models/todo";
// import { addTodo  } from '../services/todo.service'

@Component({
  template: `<main>
    <div class="container">
      <p [hidden]="nascosto">Opss non ci sono task</p>
      <ul *ngFor="let todo of todos; let i = index">
        <li><span (click)="removeTodo(i)">✅</span> {{ "- " + todo.title }}</li>
      </ul>
      <input type="text" (input)="getTitle($event)" />
      <button (click)="addTodo()">+</button>
    </div>
  </main> `,
  styles: [
    `
      main {
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .container {
        /* */
      }

      button {
        margin-left: 0.5em;
        cursor: pointer;
      }

      li {
        list-style-type: none;
      }
      ul {
        margin: auto 0;
        padding: 0;
      }

      span {
        margin-right: 0.5em;
        cursor: pointer;
      }
    `,
  ],
})
export class TodosPages implements OnInit {
  constructor() {}

  todos: Todo[] = [];
  titolo: string = "";
  nascosto: boolean = false;
  completato: boolean = false;

  //crea l'oggetto newTodo e lo mette nell'array
  addTodo() {
    setTimeout(() => {
      this.completato = false;
      const newTodo: Todo = {
        title: this.titolo,
        completed: this.completato,
        id: this.todos.length + 1,
      };
      this.todos.push(newTodo);
      this.nascosto = true;
      console.log(this.todos);
    }, 2000);
  }

  //rimuove l'ultimo elemento dell'array
  removeTodo(i: number): void {
    if (i > -1) {
      this.todos.splice(i, 1);
    }
    if (i == 0) {
      this.nascosto = false;
    }
  }

  //prende il value dell'input è lo mette nell'object newTodo
  getTitle(event: any) {
    const target = <HTMLInputElement>event.target;
    this.titolo = target.value;
  }
  ngOnInit(): void {}
}
