import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../Todo';
import { TodoService } from '../todo.service';
import { TodoEtatEnum } from '../todoEtat.enum';

@Component({
  selector: 'app-todoEdit',
  templateUrl: './todoEdit.component.html',
  styleUrls: ['./todoEdit.component.css', '../app.component.scss']
})
export class TodoEditComponent implements OnInit {
  todo: Todo;
  selected: string;
  todoEtat: TodoEtatEnum;

  constructor(
    // tslint:disable-next-line:variable-name
    private _route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location) { }

    ngOnInit() {
      this.getTodo();
    }

    getTodo(): void {
      const id = + this._route.snapshot.paramMap.get('id');
      this.todoService.getTodo(id)
        .subscribe(todo => this.todo = todo);
    }

    goBack(): void {
      this.location.back();
    }

    updateToDo(todo: Todo) {
      if (this.todo.titre !== todo.titre) {
        this.todo.titre = todo.titre;
      }
      if (this.todo.description !== todo.description) {
        this.todo.description = todo.description;
      }

    }

}
