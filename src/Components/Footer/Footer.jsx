import React from 'react'

// Styles
import styles from './Footer.module.css'

// Images
import logoforfooter from '../../Images/logoforfooter.png'
import phone from '../../Images/phone.png'
import location from '../../Images/location.png'
import telegram from '../../Images/telegram.png'
import instagram from '../../Images/instagram.png'
import linkedin from '../../Images/linkedin.png'
import twitter from '../../Images/twitter.png'

const Footer = () => {
    return ( 
        <div className={styles.Footer_Container}>
            <section className={styles.foot_contact_sec}>
                <h3>راه های ارتباطی</h3>
                <section>
                    <img src={phone} alt="telephone" />
                    <p>0284368482</p>
                </section>
                <section>
                    <img src={location} alt="address" />
                    <p>قزوین ، باراجین ، مرکز واحدهای فناور سینتک</p>
                </section>
            </section>  
            <section className={styles.foot_lahze_sec}>
                <h3>با لحظه کارت</h3>
                <button>تیم لحظه کارت</button>
                <button>قوانین و مقررات</button>
                <button>ثبت نظر</button>
            </section>
            <section className={styles.foot_social_sec}>
                <h3>شبکه های اجتماعی</h3>
                <section>
                    <img src={telegram} alt="telegram channel" />
                    <img src={instagram} alt="instagram page" />
                    <img src={linkedin} alt="linkedin page" />
                    <img src={twitter} alt="twitter account" />
                </section>
            </section>
            <section className={styles.foot_logo_sec}>
                <img src={logoforfooter} alt="Lahzecard Logo" />
            </section>
        </div>
     );
}
 
export default Footer;