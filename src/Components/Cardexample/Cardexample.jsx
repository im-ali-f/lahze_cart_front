import React, { useState } from 'react';

// Images
import cardexample from '../../Images/examplecard.png'
import cardphone1 from '../../Images/cardexamplephone1.png'
import cardphone2 from '../../Images/cardexamplephone2.png'

// Styles
import styles from './Cardexample.module.css'

const Cardexample = () => {

   // Image funcs and statss
   const [card1, setCard1] = useState(true);
   const [card2, setCard2] = useState(false);
   const cardHandler = () => {
      setCard1(!card1)
      setCard2(!card2)
   }

    return ( 
        <div className={styles.Cards_Container}>
           <img src={cardexample} alt="example card" className={styles.cardnum1}/>
           <div className={styles.cardexample_div}>
               <img src={cardphone1} alt="example card" className={card1 ? styles.cardnum2 : styles.cardDeActive} onClick={cardHandler}/>
               <img src={cardphone2} alt="example card" className={card2 ? styles.cardnum3 : styles.cardDeActive} onClick={cardHandler}/>
           </div>
        </div>
     );
}
 
export default Cardexample;