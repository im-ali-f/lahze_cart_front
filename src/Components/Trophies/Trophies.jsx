import React from 'react';

// Images
import trophies from '../../Images/trophies.png'
import roshd from '../../Images/roshd.png'
import samane from '../../Images/samane.png'
import enamad from '../../Images/enamad.png'

// Styles
import styles from './Trophies.module.css'

const Trophies = () => {

    return ( 
        <div className={styles.Trophies_Container}>
           <img src={trophies} alt="example card" className={styles.header_pic}/>
           <section className={styles.pid_sec}>
               <img src={roshd} alt="roshd org logo" />
               <img src={enamad} alt="enamad logo" />
               <img src={samane} alt="sabt org logo" />
           </section>
        </div>
     );
}
 
export default Trophies;