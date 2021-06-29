import React from 'react';

import styles from './BoardLink.module.scss';

type BoardLinkProps = {
  name: string;
  date: string;
  link: string;
};

const BoardLink = ({ name, date, link }: BoardLinkProps) => (
  <a className={styles.link} href={link}>
    <p className={styles.name}>{name}</p>
    <p className={styles.date}>{date}</p>
  </a>
);

export default BoardLink;
