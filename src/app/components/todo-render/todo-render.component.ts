import { Component, OnInit } from "@angular/core";
import { Todo } from "../../models/Todo";
import { select, Store } from "@ngrx/store";
import {
  TodoIncrease,
  TodoDecrease,
  TodoChange,
  TodoReset,
  TodoStop
} from "src/app/actions/todo.action";

@Component({
  selector: "app-todo-render",
  templateUrl: "./todo-render.component.html",
  styleUrls: ["./todo-render.component.css"]
})
export class TodoRenderComponent implements OnInit {
  todos: Todo[];

  constructor(private store: Store<{ todos: Todo[] }>) {
    store.pipe(select("todos")).subscribe(value => {
      console.log("value:", value);
      this.todos = value;
    });
  }

  actionStart = () => {
    console.log("action start!");
    this.store.dispatch(new TodoIncrease());
    this.store.dispatch(new TodoDecrease());
    this.store.dispatch(new TodoDecrease());
  };

  actionStop = () => {
    this.store.dispatch(new TodoStop());
    console.log("action stop!");
  };

  actionReset = () => {
    console.log("action reset!");
    this.store.dispatch(new TodoReset());
    this.store.dispatch(new TodoStop());
  };

  ngOnInit() {}
}
