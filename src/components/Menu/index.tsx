import React from 'react'
import listings from '../../assets/listings.svg'
import podcast from '../../assets/podcast.svg'
import video from '../../assets/video.svg'
import tag from '../../assets/tag.svg'
import faq from '../../assets/faq.svg'
import shop from '../../assets/shop.svg'
import love from '../../assets/love.svg'
import about from '../../assets/about.svg'
import contact from '../../assets/contact.svg'
import conduct from '../../assets/conduct.svg'
import privacy from '../../assets/privacy.svg'
import terms from '../../assets/terms.svg'
import home from '../../assets/home.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'
import { ReactComponent as Facebook } from '../../assets/facebook.svg'
import { ReactComponent as Github } from '../../assets/github.svg'
import { ReactComponent as Instagram } from '../../assets/insta.svg'
import { tags } from '../../utils/data';
import styles from './Menu.module.css'

type MenuItemProps = {
  image: any;
  title: string;
}

const MenuItem = ({ image, title }: MenuItemProps) => {
  return (
    <div className={styles.menuItem}>
      <div className={styles.menuIcon}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.menuText}>
        <span>{title}</span>
      </div>
    </div>
  )
}

const Tags = () => {
  return (
    <div>
      <div className={styles.tagsTitle}>Popular Tags</div>
      <div className={styles.tagContaineer}>
        {tags.map(tag => <div className={styles.tag}>#{tag}</div>)}
      </div>
    </div>

  )
}

const Menu = () => {
  return (
    <div className={styles.menu}>
     <MenuItem image={home} title='Home'/>
     <MenuItem image={listings} title='Listings'/>
     <MenuItem image={podcast} title='Podcasts'/>
     <MenuItem image={video} title='Videos'/>
     <MenuItem image={tag} title='Tags'/>
     <MenuItem image={faq} title='FAQ'/>
     <MenuItem image={shop} title='Dev Shop'/>
     <MenuItem image={love} title='Sponsors'/>
     <MenuItem image={about} title='About'/>
     <MenuItem image={contact} title='Contact'/>
     <div className={styles.other}>Other</div>
     <MenuItem image={conduct} title='Code of Conduct'/>
     <MenuItem image={privacy} title='Privacy Policy'/>
     <MenuItem image={terms} title='Terms of Use'/>

      <div className={styles.socialContainer}>
        <Twitter className={styles.social} />
        <Facebook className={styles.social} />
        <Github className={styles.social} />
        <Instagram className={styles.social} />
      </div>

      <Tags />
    </div>
  )
}

export default Menu;
