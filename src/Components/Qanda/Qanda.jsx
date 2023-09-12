import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Images
import qanda from '../../Images/qanda.png'
import openmark from '../../Images/QmarkOpened.png'
import closemark from '../../Images/QmarkClosed.png'

import phone1img from '../../Images/phone1.png'
import phone2img from '../../Images/phone2.png'
import phone3img from '../../Images/phone3.png'
import phone4img from '../../Images/phone4.png'

// Styles
import styles from './Qanda.module.css'

const Qanda = () => {

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

   // Phone states and func
   const [phone1, setPhone1] = useState(true);
   const [phone2, setPhone2] = useState(false);
   const [phone3, setPhone3] = useState(false);
   const [phone4, setPhone4] = useState(false);

   const phone1Handler = () => {
      setPhone1(true);
      setPhone2(false);
      setPhone3(false);
      setPhone4(false);
   }

   const phone2Handler = () => {
      setPhone1(false);
      setPhone2(true);
      setPhone3(false);
      setPhone4(false);
   }

   const phone3Handler = () => {
      setPhone1(false);
      setPhone2(false);
      setPhone3(true);
      setPhone4(false);
   }

   const phone4Handler = () => {
      setPhone1(false);
      setPhone2(false);
      setPhone3(false);
      setPhone4(true);
   }

   return ( 
      <div className={styles.Qanda_Container}>
         <section className={styles.qanda_sec}>
            <img src={qanda} alt="q and a icon" className={styles.qanda_img}/>
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
            <div className={styles.moreQ_div}>
               <Link to="/QandAPage">
                  <button>سوالات بیشتر...</button>
               </Link>
            </div>
         </section>
         <section className={styles.phone_sec}>
            <img src={phone1img} alt="phone png" className={phone1 ? styles.phone_img : styles.phone_img_deactive}/>
            <img src={phone2img} alt="phone png" className={phone2 ? styles.phone_img : styles.phone_img_deactive}/>
            <img src={phone3img} alt="phone png" className={phone3 ? styles.phone_img : styles.phone_img_deactive}/>
            <img src={phone4img} alt="phone png" className={phone4 ? styles.phone_img : styles.phone_img_deactive}/>
            <div className={styles.buttons_div}>
               <button className={phone4 ? styles.btn_active : styles.btn_deactive} onClick={phone4Handler}></button>
               <button className={phone3 ? styles.btn_active : styles.btn_deactive} onClick={phone3Handler}></button>
               <button className={phone2 ? styles.btn_active : styles.btn_deactive} onClick={phone2Handler}></button>
               <button className={phone1 ? styles.btn_active : styles.btn_deactive} onClick={phone1Handler}></button>
            </div>
         </section>
      </div>
   );
}
 
export default Qanda;