import React from 'react';
import styles from './Notification.module.css';

const OpenSourceNotification = () => {
  return (
    <div className={styles.openSourceNotif}>
      <p>DEV runs on 100% open source code known as <a href='https://github.com/forem/forem' target='_blank' rel='noreferrer'>Forem</a>. Contribute to the codebase or host your own!</p>
      <p><b>Check these out!</b> 👇</p>

      <ul>
        <li><a href='https://github.com/forem/forem' target='_blank' rel='noreferrer'>Main Forem Repo</a></li>
        <li><a href='https://github.com/forem/selfhost' target='_blank' rel='noreferrer'>Self-Host Instructions</a></li>
      </ul>
    </div>
  )
}

export default OpenSourceNotification
