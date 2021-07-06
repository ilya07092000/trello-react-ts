import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.headerInner}>
        <nav>
          <Link className={styles.link} to="/">
            Home
          </Link>
        </nav>
        <p className={styles.name}>App</p>
        {new Date().toLocaleString()}
      </div>
    </div>
  </header>
);

export default Header;
