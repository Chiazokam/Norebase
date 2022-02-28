import React from 'react';

import Logo from './Logo/Logo';
import SearchField from './SearchField/SearchField';
import Button from '../Button';

import styles from './Header.module.css';

// type HeaderProps = {
//   openCart: React.MouseEventHandler<HTMLDivElement>;
//   handleSearchFieldChange: (value: string) => void;
//   searchValue: string | undefined;
// }

const Header = () => {

  return (
    <div className={styles.header}>
      <Logo />
      <SearchField />
      <div className={styles.auth}>
        <Button text='Log in' styles={styles.login} />
        <Button text='Create account' styles={styles.create} />
      </div>
    </div>
  );
}

export default Header;
