import React, { useState } from "react";

// Styles
import styles from './QandaPage.module.css'

// Images
import openmark from '../../../Images/minussign.png'
import closemark from '../../../Images/plussign.png'

// Components
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";

const QandaPage = () => {

    // Answer States and Funncs
   const [q1state, setQ1state] = useState(false);
   const [q2state, setQ2state] = useState(false);
   const [q3state, setQ3state] = useState(false);
   const [q4state, setQ4state] = useState(false);
   const [q5state, setQ5state] = useState(false);

   const q1Handler = () => {
      setQ1state(!q1state);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
   }

   const q2Handler = () => {
      setQ1state(false);
      setQ2state(!q2state);
      setQ3state(false);
      setQ4state(false);
      setQ5state(false);
   }

   const q3Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(!q3state);
      setQ4state(false);
      setQ5state(false);
   }

   const q4Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(!q4state);
      setQ5state(false);
   }

   const q5Handler = () => {
      setQ1state(false);
      setQ2state(false);
      setQ3state(false);
      setQ4state(false);
      setQ5state(!q5state);
   }

    return ( 
        <div className={styles.QandaPage_Container}>
            <section className={styles.main_qnada_sec}>
                <section className={styles.navbar_qnda_sec}>
                    <  Navbar  />
                </section>
                <section className={styles.questions_sec}>
                    <h1>سوالات متداول</h1>
                    <div className={styles.certainq_div}>
                        <div onClick={q1Handler}>
                            <p>چگونه می‌توانم لحظه کارت را تهیه کنم؟</p>
                            <img src={q1state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q1state ? styles.span_active : styles.spandeActive}>شما می توانید با مراجعه به مراکز و فروشگاه های تحت قرارداد با ما ، لحظه کارت خود را تهیه نمایید . همچنین می‌توانید با مراجعه به سایت ما به آدرس .......... از مراکز و فروشگاه های تحت قرار داد با ما آگاهی حاصل فرمایید</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q2Handler}>
                            <p>چگونه می توانم برای لحظه کارت خود پیام صوتی یا متنی ثبت کنم؟</p>
                            <img src={q2state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q2state ? styles.span_active : styles.spandeActive}>شما می توانید با مراجعه به مراکز و فروشگاه های تحت قرارداد با ما ، لحظه کارت خود را تهیه نمایید . همچنین می‌توانید با مراجعه به سایت ما به آدرس .......... از مراکز و فروشگاه های تحت قرار داد با ما آگاهی حاصل فرمایید</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q3Handler}>
                            <p>آیا میتوان از لحظه کارت خریداری شده برای مراکز های دیگر استفاده کرد؟</p>
                            <img src={q3state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q3state ? styles.span_active : styles.spandeActive}>شما می توانید با مراجعه به مراکز و فروشگاه های تحت قرارداد با ما ، لحظه کارت خود را تهیه نمایید . همچنین می‌توانید با مراجعه به سایت ما به آدرس .......... از مراکز و فروشگاه های تحت قرار داد با ما آگاهی حاصل فرمایید</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q4Handler}>
                            <p>چگونه می توانم از لحظه کارت استفاده کنم؟</p>
                            <img src={q4state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q4state ? styles.span_active : styles.spandeActive}>شما می توانید با مراجعه به مراکز و فروشگاه های تحت قرارداد با ما ، لحظه کارت خود را تهیه نمایید . همچنین می‌توانید با مراجعه به سایت ما به آدرس .......... از مراکز و فروشگاه های تحت قرار داد با ما آگاهی حاصل فرمایید</span>
                    </div>
                    <div className={styles.certainq_div}>
                        <div onClick={q5Handler}>
                            <p>آیا لحظه کارت تاریخ انقضاء دارد؟</p>
                            <img src={q5state ? openmark : closemark} alt="question mark closed icon" />
                        </div>
                        <span className={q5state ? styles.span_active : styles.spandeActive}>شما می توانید با مراجعه به مراکز و فروشگاه های تحت قرارداد با ما ، لحظه کارت خود را تهیه نمایید . همچنین می‌توانید با مراجعه به سایت ما به آدرس .......... از مراکز و فروشگاه های تحت قرار داد با ما آگاهی حاصل فرمایید</span>
                    </div>
                </section>
            </section>
            <  Footer  />
        </div>
     );
}
 
export default QandaPage;