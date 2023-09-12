import React, { ReactElement, createContext, useContext } from 'react';

interface IToastContext {
  children: ReactElement;
}

export const ToastContext = createContext({});

export const ToastContextProvider = ({ children }: IToastContext) => {
  return <ToastContext.Provider value={{}}>{children}</ToastContext.Provider>;
};

export const useToastContext = () => {
  return useContext(ToastContext);
};
