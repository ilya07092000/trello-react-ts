import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import boardStore from '../../store/boards';
import CreateCol from '../../components/CreateCol/CreateCol';

import styles from './Board.module.scss';

const Board = () => {
  let location = useLocation();
  const [board, setBoard] = useState<any>({});

  useEffect(() => {
    const path: string[] = location.pathname.split('/');
    const boardId: number = +path[path.length - 1];
    const board = boardStore.getById(boardId);
    setBoard(board);
  }, []);

  return (
    <div className={styles.wrapper}>
      <p className={styles.pageTitle}>{board.title}</p>
      <div className={styles.content}>
        <div className="contentItem">
          <CreateCol />
        </div>
      </div>
    </div>
  );
};

export default Board;
