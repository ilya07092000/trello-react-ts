import React from 'react';

import styles from './Button.module.scss';

type ButtonProps = {
  children: string;
  type?: string;
};

const Button = ({ children, type = 'primary' }: ButtonProps) => (
  <button className={[styles.button, styles[type]].join(' ')}>
    {children}
  </button>
);

export default Button;
