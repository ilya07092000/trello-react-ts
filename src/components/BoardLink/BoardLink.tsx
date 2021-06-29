import React from 'react';

import styles from './BoardLink.module.scss';

type BoardLinkProps = {
  title: string;
  date: string;
  link: string;
};

const BoardLink = ({ title, date, link }: BoardLinkProps) => (
  <a className={styles.link} href={link}>
    <p className={styles.name}>{title}</p>
    <p className={styles.date}>{date}</p>
  </a>
);

export default BoardLink;
