import React from 'react';
import AuthNotification from '../Notification/AuthNotification';
import StickerNotification from '../Notification/StickerNotification'
import OpenSourceNotification from '../Notification/OpenSourceNotification';
import styles from './LeftPane.module.css'
import Menu from '../Menu'

const LeftPane = () => {
  return (
    <div className={styles.left}>
      <AuthNotification />
      <Menu />
      <StickerNotification />
      <OpenSourceNotification />
    </div>
  )
}

export default LeftPane;
