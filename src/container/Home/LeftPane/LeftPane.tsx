import React from 'react';
import AuthNotification from '../../../components/AuthNotification';
import styles from './LeftPane.module.css'
import Menu from '../../../components/Menu'

const LeftPane = () => {
  return (
    <div className={styles.left}>
      <AuthNotification />
      <Menu />
    </div>
  )
}

export default LeftPane;
