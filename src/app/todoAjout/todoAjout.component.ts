import { Component, OnInit } from '@angular/core';
import { Todo } from '../Todo';
import { TodoEtatEnum } from '../todoEtat.enum';
import { TODOS } from '../todoListMock.mock';

@Component({
  selector: 'app-todoAjout',
  templateUrl: './todoAjout.component.html',
  styleUrls: ['./todoAjout.component.css', '../app.component.scss']
})
export class TodoAjoutComponent implements OnInit {
  todos: Todo[] = TODOS;
  todo: Todo = new Todo();

  constructor() { }

  ngOnInit() {
  }

  add(titre: string, description: string) {
    this.todo.id = this.generateId(1000000);
    this.todo.etat = TodoEtatEnum.WAITING;

    this.todo.titre = titre;
    this.todo.description = description;

    this.todos.push(this.todo);

  }

  generateId(maxNumber: number): number {
    return Math.floor(Math.random() * Math.floor(maxNumber));
  }

}
