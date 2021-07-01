import React from 'react';

import styles from './Modal.module.scss';

type ModalProps = {
  children: any;
  title: string;
  size: string;
  onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
};

const Modal = ({ children, title, size, onClose }: ModalProps) => (
  <div className={styles.overlay} onClick={onClose}>
    <div className={[styles.modal, styles[size]].join(' ')} onClick={(e) => e.stopPropagation()}>
      <p className={styles.title}>{title}</p>
      {children}
    </div>
  </div>
);

export default Modal;
