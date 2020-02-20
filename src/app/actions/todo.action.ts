import { Action } from "@ngrx/store";
import { TodoActionTypes } from "../shared/enum/todo-action-types.enum";

export class ActionParent implements Action {
  type: any;
}

export class TodoChange implements ActionParent {
  type = TodoActionTypes.Change;
  constructor() {}
}

export class TodoIncrease implements ActionParent {
  type = TodoActionTypes.Increase;
  constructor() {}
}

export class TodoDecrease implements ActionParent {
  type = TodoActionTypes.Decrease;
  constructor() {}
}
