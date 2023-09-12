import React from 'react'

// Stylse
import styles from './FullPage.module.css'

// Components
import Navbar from '../Navbar/Navbar';
import Landing from '../Landing/Landing';
import Cards from '../Cards/Cards';
import Cardexample from '../Cardexample/Cardexample';
import Howto from '../Howto/Howto';
import Qanda from '../Qanda/Qanda';
import Cumments from '../Cumments/Cumments';
import SocialCumments from '../SocialCumments/SocialCumments';
import Trophies from '../Trophies/Trophies';
import Footer from '../Footer/Footer';

const FullPage = () => {

    return ( 
        <div className={styles.fullpage_container}>
            <main>
                <section className={styles.Navbar_section}>
                    <  Navbar  />
                </section>
                <section className={styles.Landing_section}>
                    <  Landing  />
                </section>
                <section className={styles.Cards_section}>
                    <  Cards  />
                </section>
                <section className={styles.Cardexample_section}>
                    <  Cardexample  />
                </section>
                <section className={styles.Howto_section}>
                    <  Howto  />
                </section>
                <section className={styles.Qanda_section}>
                    <  Qanda  />
                </section>
                <section className={styles.Cumments_sections}>
                    <  Cumments  />
                </section>
                <section className={styles.SocialCumments_sections}>
                    <  SocialCumments  />
                </section>
                <section className={styles.Trophies_sections}>
                    <  Trophies  />
                </section>
                <section className={styles.Footer_sections}>
                    <  Footer  />
                </section>
            </main>
        </div>
     );
}
 
export default FullPage;