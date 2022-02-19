import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/todo";
import * as services from "../services/todo.service";

@Component({
  template: `<main>
    <div class="container">
      <ul *ngFor="let todo of todos; let i = index">
        <li><span (click)="removeTodo(i)">✅</span> {{ "- " + todo.title }}</li>
      </ul>
      <input type="text" (input)="getTitle($event)" />
      <button (click)="addTodo(titolo)">+</button>
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
  todos!: Todo[];

  constructor() {
    services.getTodo().then(_res => {
      this.todos = _res;
    }
    );
  }

  completato: boolean = false;
  titolo: string = "";
  id:number=0;

  addTodo(titolo: string) {
    services.aggiungiTodo(titolo);
  }

  removeTodo(i: number): void {
    services.aggiungiCompletati(this.titolo);
    if (i > -1) {
      services.todos.splice(i, 1);
    }
  }

  getTitle(event: Event): void {
    const target = <HTMLInputElement>event.target;
    this.titolo = target.value;
  }

  ngOnInit(): void {}
}
