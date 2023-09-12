import React from "react";

// Styles
import styles from './Remaningcard.module.css'

const Remaningcard = ({productData}) => {
    return ( 
        <div className={styles.Remaningcard_Container}>
            <section className={styles.remaiming_main_sec}>
                <div className={styles.remaiming_main_sec_div1}>
                    <p>شماره کارت</p>
                    <p>نام</p>
                    <p>شماره همراه</p>
                    <p>مبلغ</p>
                    <p>تاریخ</p>
                </div>
                <div className={styles.remaiming_main_sec_div2}>
                    <p>111-222-333</p>
                    <p>علی انصاری</p>
                    <p>09645552211</p>
                    <p>500000</p>
                    <p>1402/04/20</p>
                </div>
            </section>
        </div>
     );
}
 
export default Remaningcard;