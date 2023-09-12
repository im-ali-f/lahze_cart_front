import React, { useState } from 'react';

// Images
import q1 from '../../Images/q1.png'
import q2 from '../../Images/q2.png'
import q3 from '../../Images/q3.png'
import q4 from '../../Images/q4.png'
import q1phone from '../../Images/q1phone.png'
import q2phone from '../../Images/q2phone.png'
import q3phone from '../../Images/q3phone.png'
import q4phone from '../../Images/q4phone.png'

// Styles
import styles from './Howto.module.css'

const Howto = () => {

   // Image states and funcs
   const [q1state, setQ1state] = useState(true);
   const [q2state, setQ2state] = useState(false);
   const [q3state, setQ3state] = useState(false);
   const [q4state, setQ4state] = useState(false);

   const q1Handler = () => {
      setQ1state(false);
      setQ2state(true);
      setQ3state(false);
      setQ4state(false);
   }

   const q2Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(true);
      setQ4state(false);
   }

   const q3Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(true);
   }

   const q4Handler = () => {
      setQ1state(true);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
   }

    return ( 
        <div className={styles.Cards_Container}>
            <h1>نحوه آماده سازی هدیه:</h1>
            <img src={q1} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_active : styles.card_not_active}/>
            <img src={q2} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_active : styles.card_not_active}/>
            <img src={q3} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_active : styles.card_not_active}/>
            <img src={q4} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_active : styles.card_not_active}/>
            <div className={styles.phoneHowto}>
               <img src={q1phone} alt="q1 card" onClick={q1Handler} className={q1state ? styles.card_phone_active : styles.card_not_active}/>
               <img src={q2phone} alt="q2 card" onClick={q2Handler} className={q2state ? styles.card_phone_active : styles.card_not_active}/>
               <img src={q3phone} alt="q3 card" onClick={q3Handler} className={q3state ? styles.card_phone_active : styles.card_not_active}/>
               <img src={q4phone} alt="q4 card" onClick={q4Handler} className={q4state ? styles.card_phone_active : styles.card_not_active}/>
            </div>
        </div>
     );
}
 
export default Howto;