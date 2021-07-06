import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import boardStore from '../../store/boards';
import CreateCol from '../../components/CreateCol/CreateCol';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

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

  return (
    <div className={styles.wrapper}>
      <p className={styles.pageTitle}>{board.title}</p>
      <div className={styles.content}>
        <div className={styles.contentItem}>
          <CreateCol />
        </div>
        {board.columns
          ? board.columns.map((col: any) => (
              <div key={col.id} className={styles.contentItem}>
                <div className={styles.colItem}>
                  <p className={styles.colTitle}>{col.title}</p>
                  <div className={styles.addTask}>
                    <Input placeholder="123" />
                    <div className={styles.addBtnWrap}>
                      <Button onClick={() => console.log('add')}>Add</Button>
                    </div>
                  </div>
                  <div className={styles.colText}>123</div>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
};

export default Board;
