import React from 'react';

interface IToast {
  msg: string;
}
const Toast = ({ msg }: IToast) => {
  return <div className='toast'>{msg}</div>;
};

export default Toast;
