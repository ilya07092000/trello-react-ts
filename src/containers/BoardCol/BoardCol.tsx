import React, { useRef } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import boardStore from '../../store/boards';
import { observer } from 'mobx-react-lite';

import styles from './BoardCol.module.scss';

const BoardCol = ({ data, boardId }: any) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addNewTask = () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      const newTask = {
        id: Date.now(),
        text: inputRef.current.value,
      };

      boardStore.addNewTask(boardId, data.id, newTask);
      inputRef.current.value = '';
    }
  };

  return (
    <div className={styles.contentItem}>
      <div className={styles.colItem}>
        <p className={styles.colTitle}>{data.title}</p>
        <div className={styles.addTask}>
          <Input placeholder="123" ref={inputRef} />
          <div className={styles.addBtnWrap}>
            <Button onClick={addNewTask}>Add</Button>
          </div>
        </div>
        {data.list.map((task: any) => (
          <div className={styles.colText}>{task.text}</div>
        ))}
      </div>
    </div>
  );
};

export default observer(BoardCol);
