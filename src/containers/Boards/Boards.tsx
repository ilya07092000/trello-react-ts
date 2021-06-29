import React from 'react';
import Header from '../../components/Header/Header';
import CreateBoardBtn from '../../components/CreateBoardBtn/CreateBoardBtn';
import BoardLink from '../../components/BoardLink/BoardLink';

import { boards } from '../../mock/boards';
import styles from './Boards.module.scss';

const Boards = () => {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className="container">
          <div className={styles.contentInner}>
            <div className={styles.col}>
              <CreateBoardBtn onCreate={() => console.log('fds')} />
            </div>
            {boards.map((board) => (
              <div key={board.id} className={styles.col}>
                <BoardLink
                  link="/"
                  title={board.title}
                  date={new Date().toLocaleDateString()}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Boards;
