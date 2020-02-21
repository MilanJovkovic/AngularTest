import { Injectable, APP_ID } from "@angular/core";

import { Actions, Effect, ofType } from "@ngrx/effects";
import {
  switchMap,
  map,
  catchError,
  delay,
  mergeMap,
  mapTo,
  takeUntil
} from "rxjs/operators";
import { Action, Store } from "@ngrx/store";

import { Observable, of, interval, merge } from "rxjs";

import { TodoChange, TodoDecrease, TodoIncrease } from "../actions/todo.action";

import { Todo } from "../models/Todo";

import { TodoActionTypes } from "../shared/enum/todo-action-types.enum";

@Injectable()
export class TodoEffect {
  constructor(private action: Actions) {}

  check: number = 0;

  @Effect()
  processAction = this.action.pipe(
    //delay 1 sec
    // switchMap(payload => {
    //   console.log(payload);
    //   return of(payload).pipe(
    //     delay(1000),
    //     takeUntil(this.action.pipe(ofType(TodoActionTypes.Stop)))
    //   );
    // }),
    mergeMap(payload => {
      console.log(payload);
      return of(payload).pipe(
        delay(1000),
        takeUntil(this.action.pipe(ofType(TodoActionTypes.Stop)))
      );
    })
  );
}
