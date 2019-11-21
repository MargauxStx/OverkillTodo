import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Todo } from '../Todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todoDetail',
  templateUrl: './todoDetail.component.html',
  styleUrls: ['./todoDetail.component.css', '../app.component.scss']
})
export class TodoDetailComponent implements OnInit {
  todo: Todo;

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService,
    private location: Location) { }

    ngOnInit() {
      this.getTodo();
    }

    getTodo(): void {
      const id = + this.route.snapshot.paramMap.get('id');
      this.todoService.getTodo(id)
        .subscribe(todo => this.todo = todo);
    }

    goBack(): void {
      this.location.back();
    }

}
