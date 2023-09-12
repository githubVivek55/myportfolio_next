const ToastReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return { ...state, toast: [...state.toast, action.payload] };
    case 'DELETE':
      const updatedToast = state.toast.filter(
        (toast) => toast.id !== action.payload
      );
      return { ...state, toast: updatedToast };
    default:
      throw new Error(`Unhandled Action type: ${action.type}`);
  }
};
