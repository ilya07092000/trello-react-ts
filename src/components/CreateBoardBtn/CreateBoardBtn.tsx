import React from 'react';

import styles from './CreateBoardBtn.module.scss';

type CreateBoardBtnProps = {
  onCreate: React.MouseEventHandler<HTMLButtonElement>;
};

const CreateBoardBtn = ({ onCreate }: CreateBoardBtnProps) => (
  <button onClick={onCreate} className={styles.createBtn}>
    Create a new board...
  </button>
);

export default CreateBoardBtn;
