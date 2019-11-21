import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoListComponent } from './todoList/todoList.component';
import { TodoDetailComponent } from './todoDetail/todoDetail.component';
import { TodoAjoutComponent } from './todoAjout/todoAjout.component';

const routes: Routes = [
  { path: 'todos', component: TodoListComponent },
  { path: 'todoDetail/:id', component: TodoDetailComponent },
  { path: 'todoAjout', component: TodoAjoutComponent },
  { path: '', redirectTo: '/todos', pathMatch: 'full' },
  { path: '**', component: TodoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
