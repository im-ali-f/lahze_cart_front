import React, { useState } from "react";

// Styles
import styles from './AboutUs.module.css'

// Images
import AboutUspic from '../../../Images/AboutUs.png'
import AboutUspicforphone from '../../../Images/AboutUsphone.png'

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const AboutUs = () => {

    

    return ( 
        <div className={styles.AboutUs_Container}>
            <section className={styles.main_qnada_sec}>
                <section className={styles.navbar_qnda_sec}>
                    <  Navbar  />
                </section>
                <section className={styles.AboutUs_info_sec}>
                    <h1>درباره ما</h1>
                    <p>"لحظه کارت" یک استارتاپ نوپای موفق واقع در مرکز تحقیقات دانشگاه آزاد قزوین است. سعی ما در خلق محیطی سرشار از پویایی و شادابی است.</p>
                    <p>تیم دانشجویی لحظه کارتهمگام با دنیای نوین تکنولوژیگیفت کارت های منحصر به فرید تولید کرده که علاوه بر خلق لحظات شیرین برای عزیزانتان میتوانید صدا و متنی دلخواه خودتان را به آنها هدیه دهید.</p>
                    <p>همراه لحظه کارت باشید و در این مسیر پیشرفت ما را هدایت کنید.</p>
                </section>
                <img src={AboutUspic} alt="info pic containing names and positions of the names." className={styles.info_pic}/>
                <img src={AboutUspicforphone} alt="info pic containing names and positions of the names." className={styles.info_pic_for_phone}/>
            </section>
            <  Footer  />
        </div>
     );
}
 
export default AboutUs;