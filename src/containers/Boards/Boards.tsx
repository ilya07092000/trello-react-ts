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
  const [editModal, setEditModal] = useState<boolean>(false);
  const [editBoardId, setEditBoardId] = useState<number>(0);
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

  const openEditModal = (e: React.MouseEvent<HTMLLinkElement>, id: number) => {
    e.preventDefault();
    setEditModal(true);
    setEditBoardId(id);

    const board: any = boardsStore.boards.find((b) => b.id === id);

    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.value = board.title;
      }
    });
  };

  const editBoard = () => {
    if (inputRef.current) {
      boardsStore.editBoard(editBoardId, inputRef.current.value);
    }

    setEditModal(false);
  };

  const deleteBoard = (e: React.MouseEvent<HTMLLinkElement>, id: number) => {
    e.preventDefault();

    boardsStore.deleteBoard(id);
  };

  return (
    <>
      <div className={styles.content}>
        <div className="container">
          <div className={styles.contentInner}>
            <div className={styles.col}>
              <CreateBoardBtn onOpen={() => setCreateModal(true)} />
            </div>
            {boardsStore.boards.map((board) => (
              <div key={board.id} className={styles.col}>
                <BoardLink
                  onEdit={(e: React.MouseEvent<HTMLLinkElement>, id: number) =>
                    openEditModal(e, id)
                  }
                  onDelete={(
                    e: React.MouseEvent<HTMLLinkElement>,
                    id: number
                  ) => deleteBoard(e, id)}
                  link={`/board/${board.id}`}
                  title={board.title}
                  date={board.date}
                  id={board.id}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {createModal ? (
        <BoardsModal
          onCreate={createBoard}
          type="create"
          inputRef={inputRef}
          title="Create"
          onClose={() => setCreateModal(false)}
        />
      ) : null}

      {editModal ? (
        <BoardsModal
          onCreate={editBoard}
          type="edit"
          inputRef={inputRef}
          title="Edit"
          onClose={() => setEditModal(false)}
        />
      ) : null}
    </>
  );
};

export default observer(Boards);
