import React, { useState, useRef } from 'react';
import { observer } from 'mobx-react-lite';
import Header from '../../components/Header/Header';
import CreateBoardBtn from '../../components/CreateBoardBtn/CreateBoardBtn';
import BoardLink from '../../components/BoardLink/BoardLink';
import boardsStore from '../../store/boards';
import BoardsModal from '../../components/BoardsModal/BoardsModal';
import { IBoard } from '../../types';

import styles from './Boards.module.scss';

const Boards = () => {
  const [createModal, setCreateModal] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const createBoard = () => {
    if (inputRef.current && inputRef.current.value.trim()) {
      const board: IBoard = {
        id: Date.now(),
        title: inputRef.current.value,
        date: new Date().toLocaleDateString(),
      };

      boardsStore.addBoard(board);
      setCreateModal(() => false);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.content}>
        <div className="container">
          <div className={styles.contentInner}>
            <div className={styles.col}>
              <CreateBoardBtn onOpen={() => setCreateModal(true)} />
            </div>
            {boardsStore.boards.map((board) => (
              <div key={board.id} className={styles.col}>
                <BoardLink link="/" title={board.title} date={board.date} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {createModal ? (
        <BoardsModal
          onCreate={createBoard}
          inputRef={inputRef}
          title="Create"
          onClose={() => setCreateModal(false)}
        />
      ) : null}
    </>
  );
};

export default observer(Boards);
