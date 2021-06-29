import React from 'react';

import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <div className="container">
      <div className={styles.headerInner}>
        <nav>
          <a className={styles.link} href="/">Home</a>
        </nav>
        <p className={styles.name}>App</p>
        {new Date().toLocaleString()}
      </div>
    </div>
  </header>
);

export default Header;
