import React, { useRef, useState } from 'react';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import boardStore from '../../store/boards';
import { observer } from 'mobx-react-lite';
import { ITask } from '../../types';

import styles from './BoardCol.module.scss';

type BoardColProps = {
  data: any;
  boardId: number;
  dragOverHandler: (e: React.DragEvent, task: ITask, id: number) => void;
  dragLeaveHanlder: (e: React.DragEvent) => void;
  dragStartHandler: (e: React.DragEvent, task: ITask, id: number) => void;
  dragEndHandler: (e: React.DragEvent) => void;
  dropHanlder: (e: React.DragEvent, task: ITask, id: number) => void;
  dragEndColHanlder: (
    e: React.DragEvent,
    colId: number,
    isTask: number
  ) => void;
};

const BoardCol = ({
  data,
  boardId,
  dragOverHandler,
  dragLeaveHanlder,
  dragStartHandler,
  dragEndHandler,
  dropHanlder,
  dragEndColHanlder,
}: BoardColProps) => {
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
      <div
        className={styles.colItem}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => dragEndColHanlder(e, data.id, data.list.length)}
      >
        <p className={styles.colTitle}>{data.title}</p>
        <div className={styles.addTask}>
          <Input placeholder="123" ref={inputRef} />
          <div className={styles.addBtnWrap}>
            <Button onClick={addNewTask}>Add</Button>
          </div>
        </div>
        {data.list.map((task: ITask) => (
          <div
            draggable="true"
            key={task.id}
            className={[styles.colText, 'board-item'].join(' ')}
            onDragOver={(e) => dragOverHandler(e, task, data.id)}
            onDragLeave={(e) => dragLeaveHanlder(e)}
            onDragStart={(e) => dragStartHandler(e, task, data.id)}
            onDragEnd={(e) => dragEndHandler(e)}
            onDrop={(e) => dropHanlder(e, task, data.id)}
          >
            {task.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default observer(BoardCol);
