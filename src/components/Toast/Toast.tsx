import React, { useEffect, useRef } from 'react';
import styles from './index.module.css';
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

interface IToast {
  msg: string;
  type: 'info' | 'confirm' | 'error' | 'warning';
  show: boolean;
  onHide: Function;
}
const Toast = ({ msg, type, show, onHide }: IToast) => {
  const ref = useRef(null);

  useEffect(() => {
    const timerId = setTimeout(() => {
      onHide();
    }, 5000);
    return () => clearTimeout(timerId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  console.log(show);
  return (
    <div
      ref={ref}
      className={classnames(
        styles.toast,
        styles.confirm,
        show || styles.dismiss
      )}
    >
      <div className='flex'>
        <div className='px-2'>
          <FontAwesomeIcon icon={faCheckCircle} />
        </div>
        <div>{msg}</div>
      </div>
    </div>
  );
};

export default Toast;
