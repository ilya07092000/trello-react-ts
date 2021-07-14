import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import boardStore from '../../store/boards';
import CreateCol from '../../components/CreateCol/CreateCol';
import BoardCol from '../BoardCol/BoardCol';
import { observer } from 'mobx-react-lite';
import { ITask, IBoardCol } from '../../types';

import styles from './Board.module.scss';

const Board = () => {
  let location = useLocation();
  const [board, setBoard] = useState<any>({});
  const [currentCol, setCurrentCol] = useState<number | null>(null);
  const [currentItem, setCurrentItem] = useState<ITask | null>(null);

  useEffect(() => {
    const path: string[] = location.pathname.split('/');
    const boardId: number = +path[path.length - 1];
    const board = boardStore.getBoardById(boardId);
    setBoard(() => board);
  }, []);

  const createCol = (title: string) => {
    const col = {
      id: Date.now(),
      title: title,
      list: [],
    };

    boardStore.createNewCol(board.id, col);
  };

  const dropHanlder = (e: React.SyntheticEvent, task: ITask, colId: number) => {
    e.preventDefault();
    (e.target as HTMLElement).style.boxShadow = 'none';

    if (task.id !== currentItem!.id || currentCol !== colId) {
      const currentColIndex: number = board.columns.findIndex(
        (col: IBoardCol) => col.id === currentCol
      );
      const currentTaskIndex: number = board.columns[
        currentColIndex
      ].list.findIndex((task: ITask) => task.id === currentItem!.id);

      const targetColIndex: number = board.columns.findIndex(
        (col: IBoardCol) => col.id === colId
      );
      const targetTaskIndex: number = board.columns[
        targetColIndex
      ].list.findIndex((t: ITask) => t.id === task.id);

      boardStore.deleteTaskById(currentColIndex, currentTaskIndex, board.id);
      boardStore.addTaskById(
        targetColIndex,
        targetTaskIndex,
        currentItem!,
        board.id
      );
    }
  };

  const dragEndColHanlder = (
    e: React.SyntheticEvent,
    colId: number,
    isTask: number
  ) => {
    if (isTask) return;

    const currentColIndex: number = board.columns.findIndex(
      (col: IBoardCol) => col.id === currentCol
    );

    const currentTaskIndex: number = board.columns[
      currentColIndex
    ].list.findIndex((task: ITask) => task.id === currentItem!.id);

    const targetColIndex: number = board.columns.findIndex(
      (col: IBoardCol) => col.id === colId
    );

    boardStore.deleteTaskById(currentColIndex, currentTaskIndex, board.id);
    boardStore.addTaskById(targetColIndex, 0, currentItem!, board.id);
  };

  const dragOverHandler = (
    e: React.SyntheticEvent,
    task: ITask,
    colId: number
  ) => {
    e.preventDefault();

    if ((e.target as HTMLElement).classList.contains('board-item')) {
      (e.target as HTMLElement).style.boxShadow = '0 5px 4px rgba(0, 0, 0, 1)';
    }
  };

  const dragStartHandler = (
    e: React.SyntheticEvent,
    task: ITask,
    colId: number
  ) => {
    setCurrentCol(colId);
    setCurrentItem(task);
  };

  const dragLeaveHanlder = (e: React.SyntheticEvent) => {
    (e.target as HTMLElement).style.boxShadow = 'none';
  };

  const dragEndHandler = (e: React.SyntheticEvent) => {
    // (e.target as HTMLElement).style.boxShadow = 'none';
  };

  return (
    <div className={styles.wrapper}>
      <p className={styles.pageTitle}>{board.title}</p>
      <div className={styles.content}>
        {board.columns
          ? board.columns.map((col: IBoardCol) => (
              <BoardCol
                dragOverHandler={(
                  e: React.DragEvent,
                  task: ITask,
                  id: number
                ) => dragOverHandler(e, task, id)}
                dragLeaveHanlder={(e: React.DragEvent) => dragLeaveHanlder(e)}
                dragStartHandler={(
                  e: React.DragEvent,
                  task: ITask,
                  id: number
                ) => dragStartHandler(e, task, id)}
                dragEndHandler={(e: React.DragEvent) => dragEndHandler(e)}
                dropHanlder={(e: React.DragEvent, task: ITask, id: number) =>
                  dropHanlder(e, task, id)
                }
                dragEndColHanlder={(
                  e: React.DragEvent,
                  colId: number,
                  isTask: number
                ) => dragEndColHanlder(e, colId, isTask)}
                key={col.id}
                data={col}
                boardId={board.id}
              />
            ))
          : null}
        <div className={styles.contentItem}>
          <CreateCol onCreate={(title: string) => createCol(title)} />
        </div>
      </div>
    </div>
  );
};

export default observer(Board);
