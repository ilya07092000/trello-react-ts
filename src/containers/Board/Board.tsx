import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import boardStore from '../../store/boards';
import CreateCol from '../../components/CreateCol/CreateCol';
import BoardCol from '../BoardCol/BoardCol';
import { observer } from 'mobx-react-lite';

import styles from './Board.module.scss';

const Board = () => {
  let location = useLocation();
  const [board, setBoard] = useState<any>({});

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

  return (
    <div className={styles.wrapper}>
      <p className={styles.pageTitle}>{board.title}</p>
      <div className={styles.content}>
        {board.columns
          ? board.columns.map((col: any) => (
              <BoardCol key={col.id} data={col} boardId={board.id} />
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
