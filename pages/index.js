import Head from 'next/head';
import styled from 'styled-components';

import GiftCard from 'components/GiftCard';

import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <section className={styles.homeMainPromo}>
        <h1 className={styles.sectionTitle}>
          Shop expert recommendations, <br />
          buy from brands.
        </h1>
        <div className={styles.inputContainer}>
          <input
            type='text'
            placeholder='What are you looking for?'
            className={styles.inputSearch}
          />
          <img src="/images/search-white.png" alt="search" className={styles.searchIcon} />
        </div>
      </section>

      <CardsContainer className={styles.cardsSection}>
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
        <GiftCard />
      </CardsContainer>
    </>
  );
}

const CardsContainer = styled.section`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 100px auto 120px auto;
`;