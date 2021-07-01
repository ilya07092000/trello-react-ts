import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: string;
  type?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

const Button = ({ children, type = 'primary', onClick }: ButtonProps) => (
  <button className={[styles.button, styles[type]].join(' ')} onClick={onClick}>
    {children}
  </button>
);

export default Button;
