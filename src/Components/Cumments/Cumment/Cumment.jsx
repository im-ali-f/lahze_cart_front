import React from 'react';

// Styles
import styles from './Cumment.module.css'

const Cumment = ({productData}) => {

    return ( 
        <div className={styles.Cumment_Container} >
            <img src={productData.pic} alt="cards picture" />
        </div>
     );
}
 
export default Cumment;