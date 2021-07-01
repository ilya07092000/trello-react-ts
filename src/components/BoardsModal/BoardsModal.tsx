import React from 'react';
import Modal from '../Modal/Modal';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styles from './BoardsModal.module.scss';

type BoardsModalProps = {
  title: string;
  onClose: React.MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
};

const BoardsModal = ({ title, onClose }: BoardsModalProps) => (
  <Modal title={title} size="sm" onClose={onClose}>
    <Input placeholder="Board name" />
    <div className={styles.btnsWrap}>
      <div className={styles.btnsCol}>
        <Button onClick={() => console.log('create')}>create</Button>
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
