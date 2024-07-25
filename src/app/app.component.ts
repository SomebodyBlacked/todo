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
  title = 'Lista de tareas';
  description = 'Una lista de tareas para organizar tus actividades';
  tasks = [
    {
      title: 'Tarea 1',
      description: 'Descripción de la tarea 1',
      complete: false,
    },
    {
      title: 'Tarea 2',
      description: 'Descripción de la tarea 2',
      complete: true,
    },
    {
      title: 'Tarea 3',
      description: 'Descripción de la tarea 3',
      complete: false,
    },
  ];
}
