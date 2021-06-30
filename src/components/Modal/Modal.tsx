import React from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  children: HTMLElement | string | number | React.ReactElement;
};

const Modal = ({ children }: ModalProps) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      <button className={styles.close}>
        <div className={styles.closeLine}></div>
      </button>
      {children}
    </div>
  </div>
);

export default Modal;
