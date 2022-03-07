import React from 'react';
import styles from './Notification.module.css';
import Button from '../Button'

const AuthNotification = () => {
  return (
    <div className={styles.authNotif}>
      <h3><a href='https://dev.to/' target='_blank' rel='noreferrer'>DEV Community </a> is a community of 817,888 amazing developers</h3>

      <span>We're a place where coders share, stay up-to-date and grow their careers.</span>
      <div>
        <Button text='Create account' styles={styles.create} />
        <Button text='Log in' styles={styles.login} />
      </div>
    </div>
  )
}

export default AuthNotification
