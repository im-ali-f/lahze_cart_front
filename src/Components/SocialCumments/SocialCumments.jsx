import React from "react";

// Styles
import styles from './SocialCumments.module.css'

// Images
import cumment1 from '../../Images/cumment1.png'
import cumment2 from '../../Images/cumment2.png'
import cumment3 from '../../Images/cumment3.png'
import cumment4 from '../../Images/cumment4.png'
import cumment5 from '../../Images/cumment5.png'

// Components
import CertainCumment from "./CertainCumment/CertainCumment";

const SocialCumments = () => {
    return ( 
        <div className={styles.SocialCumments_Container}>
            <div className={styles.background_div}>
                <section className={styles.icons_sec}>
                    <section className={styles.img1}>
                        <img src={cumment2} alt="customer profile picture" />
                    </section>
                    <section className={styles.img3}>
                        <img src={cumment3} alt="customer profile picture" />
                    </section>
                    <section className={styles.img5}>
                        <img src={cumment5} alt="customer profile picture" />
                    </section>
                    <section className={styles.img2}>
                        <img src={cumment1} alt="customer profile picture" />
                    </section>
                    <section className={styles.img4}>
                        <img src={cumment4} alt="customer profile picture" />
                    </section>
                </section>
                <section className={styles.cumment_sec}>
                    <  CertainCumment  />
                </section>
                <section className={styles.icons_sec}>
                    <section className={styles.img4}>
                        <img src={cumment4} alt="customer profile picture" />
                    </section>
                    <section className={styles.img2}>
                        <img src={cumment1} alt="customer profile picture" />
                    </section>
                    <section className={styles.img5}>
                        <img src={cumment5} alt="customer profile picture" />
                    </section>
                    <section className={styles.img3}>
                        <img src={cumment3} alt="customer profile picture" />
                    </section>
                    <section className={styles.img1}>
                        <img src={cumment2} alt="customer profile picture" />
                    </section>
                </section>
            </div>
        </div>
     );
}
 
export default SocialCumments;