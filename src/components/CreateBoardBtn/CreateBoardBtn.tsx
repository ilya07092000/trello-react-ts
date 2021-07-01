import React from 'react';

import styles from './CreateBoardBtn.module.scss';

type CreateBoardBtnProps = {
  onOpen: React.MouseEventHandler<HTMLButtonElement>;
};

const CreateBoardBtn = ({ onOpen }: CreateBoardBtnProps) => (
  <button onClick={onOpen} className={styles.createBtn}>
    Create a new board...
  </button>
);

export default CreateBoardBtn;
