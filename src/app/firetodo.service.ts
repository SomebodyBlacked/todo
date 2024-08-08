import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({ providedIn: 'root' })
export class TodoService {
  private todosCollection: AngularFirestoreCollection<Todo>;

  constructor(private afs: AngularFirestore) {
    this.todosCollection = afs.collection<Todo>('todos');
  }

  getTodos(): Observable<Todo[]> {
    return this.todosCollection.valueChanges();
  }

  addTodo(todo: Todo) {
    return this.todosCollection.add(todo);
  }

  updateTodo(id: string, updatedTodo: Todo) {
    return this.todosCollection.doc(id).update(updatedTodo);
  }

  deleteTodo(id: string) {
    return this.todosCollection.doc(id).delete();
  }
}
