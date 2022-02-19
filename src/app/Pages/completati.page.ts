import { Component, OnInit } from "@angular/core";
import { Todo } from "../models/todo";
import * as services from "../services/todo.service";

@Component({
  template: `
    <main>
      <div class="container">
        <ul>
          <li *ngFor="let completato of completati; let i = index">
            {{ "- " + completato.title }}
          </li>
        </ul>
      </div>
    </main>
  `,
  styles: [
    `
      main {
        height: 95vh;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      li {
        list-style-type: none;
      }
    `,
  ],
})
export class CompletatiPages implements OnInit {
  completati!:Todo[];
  constructor() {
    services.getComp().then((_ris) => {
      this.completati = _ris;
      console.log(this.completati);
    });
  }
  ngOnInit(): void {}
}
