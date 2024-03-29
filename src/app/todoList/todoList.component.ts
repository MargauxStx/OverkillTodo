import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TODOS } from '../todoListMock.mock';
import { TodoEtatEnum } from '../todoEtat.enum';

import { MatSnackBar } from '@angular/material';


@Component({
  selector: 'app-todoList',
  templateUrl: './todoList.component.html',
  styleUrls: ['./todoList.component.css', '../app.component.scss']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = TODOS;
  selectedTodo: Todo;
  progressNumber: number;
  doneNumber: number;
  waitingNumber: number;

  tabProgress: Todo[];
  tabDone: Todo[];
  tabWaiting: Todo[];
  tabDelete: Todo[];

  constructor( public snackBar: MatSnackBar) { }

  ngOnInit() {
    this.countEachEnum(TODOS);
  }

  onSelect(todo: Todo): void {
    this.selectedTodo = todo;
  }

  countEachEnum(todos: Todo[]) {
    this.progressNumber = 0;
    this.doneNumber = 0;
    this.waitingNumber = 0;
    this.tabProgress = [];
    this.tabDone = [];
    this.tabWaiting = [];
    this.tabDelete = [];


    todos.forEach(element => {
      if (element.etat === TodoEtatEnum.PROGRESS) {
        this.tabProgress.push(element);
        this.progressNumber = this.progressNumber + 1;
      }
      if (element.etat === TodoEtatEnum.DONE) {
        this.tabDone.push(element);
        this.doneNumber = this.doneNumber + 1;
      }
      if (element.etat === TodoEtatEnum.WAITING) {
        this.tabWaiting.push(element);
        this.waitingNumber = this.waitingNumber + 1;
      }
      if (element.etat === null) {
        this.tabDelete.push(element);
      }
    });

  }

  updateStateProgress(todo: Todo) {
    todo.etat = TodoEtatEnum.PROGRESS;
    this.countEachEnum(TODOS);

    this.snackBar.open('Changement de la tâche ' + todo.titre + ' de waiting à in progress !', 'Ok', {
      duration: 3000
    });

  }

  updateStateDone(todo: Todo) {
    todo.etat = TodoEtatEnum.DONE;
    this.countEachEnum(TODOS);

    this.snackBar.open('Changement de la tâche ' + todo.titre + ' de in progress à done !', 'Ok', {
      duration: 3000
    });
  }

  delete(id: number, todo: Todo) {
    this.todos.splice(id, 1);
    todo.etat = null;
    this.countEachEnum(TODOS);

    this.snackBar.open('La tâche ' + todo.titre + ' a été supprimé !', 'Ok', {
      duration: 3000
    });
  }

}
