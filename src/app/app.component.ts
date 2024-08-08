import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo.model';
import { TodoService } from './firetodo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'To-Do List';
  description = 'A to-do list to organize your activities';

  todos: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.todoService.getTodos().subscribe((todos) => {
      this.todos = todos;
    });
  }
}
