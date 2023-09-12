import React from 'react';

// Images
import partner1 from '../../Images/partner1.png'
import partner2 from '../../Images/partner2.png'
import partner3 from '../../Images/partner3.png'
import partner4 from '../../Images/partner4.png'
import partner5 from '../../Images/partner5.png'
import partner6 from '../../Images/partner6.png'
import partner7 from '../../Images/partner7.png'
import partenrs from '../../Images/partenrs.png'

// Components
import Cumment from './Cumment/Cumment';

// Styles
import styles from './Cumments.module.css'

const Cumments = () => {

    const card1 = {
        pic: partner1,
    }
    const card2 = {
        pic: partner2,
    }
    const card3 = {
        pic: partner3,
    }
    const card4 = {
        pic: partner4,
    }
    const card5 = {
        pic: partner5,
    }
    const card6 = {
        pic: partner6,
    }
    const card7 = {
        pic: partner7,
    }

    const details = [
        card1,
        card2,
        card3,
        card4,
        card5,
        card6,
        card7,
    ]

    return ( 
        <div className={styles.Cumments_Container}>
            <img src={partenrs} alt="section title" className={styles.header_img}/>
            <section className={styles.cumments_sec_cumment}>
                {
                    details?.map(service => <  Cumment key={service.id} productData={service}/>)
                } 
            </section>
        </div>
     );
}
 
export default Cumments;