import React from 'react';
import Button from '../Button/Button';

import styles from './BoardLink.module.scss';

type BoardLinkProps = {
  title: string;
  date: string;
  link: string;
  id: number;
  onEdit: any;
  onDelete: any;
};

const BoardLink = ({ title, date, link, id, onEdit, onDelete }: BoardLinkProps) => (
  <a className={styles.link} href={link}>
    <p className={styles.name}>{title}</p>
    <div className={styles.footer}>
      <div className={styles.btnsWrap}>
        <div className={styles.btnCol}>
          <Button onClick={(e) => onEdit(e, id)} type="transparent">
            Edit
          </Button>
        </div>
        <div className={styles.btnCol}>
          <Button onClick={(e) => onDelete(e, id)} type="transparent">
            Delete
          </Button>
        </div>
      </div>
      <p className={styles.date}>{date}</p>
    </div>
  </a>
);

export default BoardLink;
