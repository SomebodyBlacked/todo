import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

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
  tasks = [
    {
      title: 'Task 1',
      description: 'Description of task 1',
      complete: false,
    },
    {
      title: 'Task 2',
      description: 'Description of task 2',
      complete: true,
    },
    {
      title: 'Task 3',
      description: 'Description of task 3',
      complete: false,
    },
  ];
}
