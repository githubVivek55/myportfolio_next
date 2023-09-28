export enum ToastActionType {
  ADD = 'ADD',
  DELETE = 'DELETE',
}

type ToastAction = {
  payload: string;
  type: ToastActionType;
};
export const ToastReducer = (state: string[], action: ToastAction) => {
  const { type, payload } = action;
  switch (type) {
    case 'ADD':
      return [...state, payload];
    case 'DELETE':
      return [];
    default:
      return state;
  }
};
