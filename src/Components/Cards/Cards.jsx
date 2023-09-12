import React from 'react';

// Images
import gifts from '../../Images/gifts.png'
import qrcode from '../../Images/qrcode.png'
import privecy from '../../Images/privecy.png'
import gift from '../../Images/gift.png'

// Styles
import styles from './Cards.module.css'

const Cards = () => {

    return ( 
        <div className={styles.Cards_Container}>
            <section className={styles.gifts_sec}>
                <img src={gifts} alt="gifts png" />
            </section>
            <section className={styles.cards_sec}>
                <div className={styles.card_div1}>
                    <img src={gift} alt="card image" />
                    <section className={styles.card_text}>
                        <h3>هدیه ایی خاص</h3>
                        <p>با لحظه کارت یک هدیه خاص با قیمت دلخواهتون برای عزیزانتون آماده کنید.</p>
                    </section>
                </div>
                <div className={styles.card_div2}>
                    <img src={privecy} alt="card image" />
                    <section className={styles.card_text}>
                        <h3>حفظ حریم خصوصی</h3>
                        <p>صدای شما تا همیشه در خانه امن لحظه کارت باقی میماند.</p>
                    </section>
                </div>
                <div className={styles.card_div3}>
                    <img src={qrcode} alt="card image" />
                    <section className={styles.card_text}>
                        <h3>بارکد</h3>
                        <p>با اسکن کردن بارکد روی کارت هدیه تونو باز کنید.</p>
                    </section>
                </div>
            </section>
        </div>
     );
}
 
export default Cards;