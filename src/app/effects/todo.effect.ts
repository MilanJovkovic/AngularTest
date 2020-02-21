import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { delay, mergeMap, takeUntil, concatMap, map } from "rxjs/operators";
import { of } from "rxjs";

import { TodoActionTypes } from "../shared/enum/todo-action-types.enum";

@Injectable()
export class TodoEffect {
  constructor(private action: Actions) {}

  check: number = 0;

  @Effect()
  processAction = this.action.pipe(
    mergeMap(payload => {
      console.log(payload);
      if (payload.type == TodoActionTypes.Stop) {
        //restart changes
        return of(payload).pipe(
          delay(1000), //action delay
          takeUntil(this.action.pipe(ofType(TodoActionTypes.Increase)))
        );
      }
      return of(payload).pipe(
        //stop action
        delay(1000), //action delay
        takeUntil(this.action.pipe(ofType(TodoActionTypes.Stop)))
      );
    })
  );
}
