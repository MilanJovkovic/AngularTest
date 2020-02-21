import { TodoActionTypes } from "../shared/enum/todo-action-types.enum";
import { ActionParent } from "../actions/todo.action";
import { Todo } from "../models/Todo";

export const initialState: Todo[] = [{ value: -5 }, { value: 10 }];

export function TodoReducer(state = initialState, action: ActionParent) {
  switch (action.type) {
    case TodoActionTypes.Increase:
      state[0].value += 1;
      return [...state];
    case TodoActionTypes.Decrease:
      state[1].value -= 1;
      return [...state];
    case TodoActionTypes.Reset:
      state[0].value = -5;
      state[1].value = 10;
      return [...state];
    default:
      return state;
  }
}
