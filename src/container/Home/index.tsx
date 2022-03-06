import React from 'react';
import styles from './Home.module.css'
import LeftPane from './LeftPane/LeftPane';

const Home = () => {
  return (
    <div className={styles.container}>
      <LeftPane />
      <div className={styles.centre}>
        
      </div>
      <div className={styles.right}>
        
      </div>
    </div>
  )
}

export default Home;
