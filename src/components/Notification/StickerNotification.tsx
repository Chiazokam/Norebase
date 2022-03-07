import React from 'react';
import styles from './Notification.module.css';

const StickerNotification = () => {
  return (
    <div className={styles.stickerNotif}>
      <img src='https://res.cloudinary.com/practicaldev/image/fetch/s--v7KOxCyh--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://cdn.shopify.com/s/files/1/1626/8507/products/mockup-5a41f96d_1024x1024.jpg%3Fv%3D1550790358' alt='sticker' />
      <h3><a href='https://shop.dev.to/collections/2018-new-merch' target='_blank' rel='noreferrer'>Look like a DEV this winter</a></h3>
    </div>
  )
}

export default StickerNotification
