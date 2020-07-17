import Link from 'next/link';
import styled from 'styled-components';

import styles from './Header.module.scss';

const Header = () => {

  const handleSignUp = (e) => {
    e.preventDefault();
  };

  return (
    <header className={styles.topHeader}>
      <img src='/images/logo_mocchi.png' alt='logo' />
      <SectionRight>
        <input
          type='text'
          placeholder='Search'
          className={styles.searchField}
        />

        <>
          <Link href='/sign-in'>
            <a className={styles.signInBtn}>Sign In</a>
          </Link>
          <a onClick={handleSignUp} className={styles.signUpBtn}>
            Sign Up
          </a>
        </>
      </SectionRight>
    </header>
  );
};


const SectionRight = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
