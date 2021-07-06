import React, { useRef } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import boardStore from '../../store/boards';
import { observer } from 'mobx-react-lite';
import { ITask } from '../../types';

import styles from './BoardCol.module.scss';

type BoardColProps = {
  data: any;
  boardId: number;
};

const BoardCol = ({ data, boardId }: BoardColProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const addNewTask = (): void => {
    if (inputRef.current && inputRef.current.value.trim()) {
      const newTask: ITask = {
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
        {data.list.map((task: ITask) => (
          <div key={task.id} className={styles.colText}>{task.text}</div>
        ))}
      </div>
    </div>
  );
};

export default observer(BoardCol);
