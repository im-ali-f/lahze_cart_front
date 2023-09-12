import React from "react";

// Satyles
import styles from './CertainCumment.module.css'

// Imgaes
import cum5 from '../../../Images/cumment5.png'

const CertainCumment = () => {
    return ( 
        <div className={styles.CertainCumment_Container}>
            <section className={styles.CerCum_Sec}>
                <img src={cum5} alt="user profile" />
                <h3>Sharifi Eli</h3>
                <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
            </section>
            <button className={styles.cumment_btn}>ثبت نظر</button>
        </div>
     );
}
 
export default CertainCumment;