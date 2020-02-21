import { Action } from "@ngrx/store";
import { TodoActionTypes } from "../shared/enum/todo-action-types.enum";

export class ActionParent implements Action {
  [x: string]: any;
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

export class TodoReset implements ActionParent {
  type = TodoActionTypes.Reset;
  constructor() {}
}

export class TodoStop implements ActionParent {
  type = TodoActionTypes.Stop;
  constructor() {}
}
