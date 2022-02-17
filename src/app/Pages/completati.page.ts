import { Component, OnInit } from '@angular/core';

@Component({
  template: `
    <main>
      <div class="container"></div>
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
    `,
  ],
})
export class CompletatiPages implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
