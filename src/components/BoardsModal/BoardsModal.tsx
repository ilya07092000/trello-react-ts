import React from 'react';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './BoardsModal.module.scss';

type BoardsModalProps = {
  title: string;
  type: string;
  onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
  onCreate: React.MouseEventHandler<HTMLButtonElement>;
  inputRef: React.Ref<HTMLInputElement | null>;
};

const BoardsModal = ({
  title,
  type,
  onClose,
  inputRef,
  onCreate,
}: BoardsModalProps) => (
  <Modal title={title} size="sm" onClose={onClose}>
    <Input ref={inputRef} placeholder="Board name" />
    <div className={styles.btnsWrap}>
      <div className={styles.btnsCol}>
        {type === 'create' ? (
          <Button onClick={onCreate}>create</Button>
        ) : (
          <Button onClick={onCreate}>edit</Button>
        )}
      </div>
      <div className={styles.btnsCol}>
        <Button type="secondary" onClick={onClose}>
          close
        </Button>
      </div>
    </div>
  </Modal>
);

export default BoardsModal;
