import React, { useState } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './CreateCol.module.scss';

const CreateCol = () => {
  const [create, setCreate] = useState<boolean>(false);

  return (
    <>
      {create ? (
        <div className={styles.createWrap}>
          <Input placeholder="Name" />
          <div className={styles.createBtns}>
            <div className={styles.createBtn}>
              <Button onClick={() => console.log('ff')}>Create</Button>
            </div>
            <div className={styles.createBtn}>
              <Button type="secondary" onClick={() => setCreate(false)}>
                Close
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <button onClick={() => setCreate(true)} className={styles.btn}>
          Create col
        </button>
      )}
    </>
  );
};

export default CreateCol;
