import React, { useState, useRef } from 'react';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './CreateCol.module.scss';

type CreateColProps = {
  onCreate: (title: string) => void;
};

const CreateCol = ({ onCreate }: CreateColProps) => {
  const [create, setCreate] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const createColHandler = () => {
    if (inputRef.current?.value.trim()) {
      onCreate(inputRef.current ? inputRef.current.value : '');
      setCreate(false);
      inputRef.current.value = '';
    }
  };  

  return (
    <>
      {create ? (
        <div className={styles.createWrap}>
          <Input placeholder="Name" ref={inputRef} />
          <div className={styles.createBtns}>
            <div className={styles.createBtn}>
              <Button onClick={createColHandler}>Create</Button>
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
