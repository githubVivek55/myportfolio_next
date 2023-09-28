import React, { useEffect, useReducer, useRef } from 'react';
import styles from './index.module.css';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { ToastActionType, ToastReducer } from './toastReducer';
import ReactDOM from 'react-dom';

interface IToast {
  msg: string;
  type: 'info' | 'confirm' | 'error' | 'warning';
  show: boolean;
  onHide: Function;
}
const Toast = ({ msg, type, show, onHide }: IToast) => {
  const ref = useRef(null);
  const [state, dispatch] = useReducer(ToastReducer, []);

  const addToast = (id: string) => {
    dispatch({ type: ToastActionType.ADD, payload: id });
  };

  const dismiss = () => {
    dispatch({ type: ToastActionType.DELETE, payload: '' });
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      onHide();
    }, 5000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return ReactDOM.createPortal(
    <div
      ref={ref}
      className={classnames(
        styles.toast,
        show ? styles.confirm : styles.dismiss
      )}
    >
      <div className='flex'>
        <div className='px-2'>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <div>{msg}</div>
      </div>
    </div>,
    document.body
  );
};

export default Toast;
