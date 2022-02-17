import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosPages } from './Pages/todos.page';
import { CompletatiPages } from './Pages/completati.page';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
const routes: Route[] = [
  {
    path: 'todos',
    component: TodosPages,
  },
  {
    path: 'completati',
    component: CompletatiPages,
  },
];

@NgModule({
  declarations: [AppComponent, TodosPages, CompletatiPages],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
