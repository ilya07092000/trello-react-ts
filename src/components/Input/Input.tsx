import React from 'react';

import styles from './Input.module.scss';

type InputProps = {
  placeholder: string;
};

const Input = React.forwardRef(({ placeholder }: InputProps, ref: any) => (
  <input className={styles.input} type="text" placeholder={placeholder} />
));

export default Input;
