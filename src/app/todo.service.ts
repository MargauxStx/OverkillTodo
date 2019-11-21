import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Todo } from './todo';
import { TODOS } from './todoListMock.mock';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  getTodo(id: number): Observable<Todo> {
    // TODO: send the message _after_ fetching the hero
    return of(TODOS.find(todo => todo.id === id));
  }

}


