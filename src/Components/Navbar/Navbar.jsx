import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// Styles
import styles from './Navbar.module.css'

// Images
import logo from '../../Images/logo3.png'
import close from '../../Images/close.png'
import char from '../../Images/char.png'

const Navbar = () => {

    // Hamburge menu functions
    const [active, setActive] = useState(false);
    const hamHandler = () => {
        setActive(!active);
    }

    // url check
    const [pathIsHome, setPathIsHome] = useState(false);
    useEffect(()=> {
        if (window.location.pathname === "/home") {
            setPathIsHome(!pathIsHome)
        }
    }, [])

    return ( 
        <div className={styles.Navbar_container}>
            <nav>
                <div></div>
                <img src={logo} alt="logo" />
                <div></div>
                <div></div>
                { pathIsHome ? undefined :
                    <Link to="/home">
                        <button className={styles.btn_nav}>خانه</button>
                    </Link>
                }
                <button className={styles.btn_nav}>همکاری با ما</button>
                <Link to="/QandAPage">
                    <button className={styles.btn_nav}>سوالات متداول</button>
                </Link>
                <Link to='/AboutUs'>
                    <button className={styles.btn_nav}>درباره ما</button>
                </Link>
                <div></div>
                <div></div>
                <div></div>
                <button className={styles.btn_account}><img src={char} alt="cup icon" />ورود | ثبت نام</button>
                <div className={styles.HanMenu} onClick={hamHandler}>
                    <div className={styles.ham_btn}></div>
                    <div className={styles.ham_btn}></div>
                    <div className={styles.ham_btn}></div>
                </div>
                <div></div>
                <div className={active ? styles.ham_options : styles.ham_options_off}>
                    <div className={styles.ham_options_div}>
                        <img onClick={hamHandler} src={close} />
                        <div></div>
                        <button className={styles.btn_nav_ham}>صفحه اصلی</button>
                        <button className={styles.btn_nav_ham}>ما چه کاری می کنیم؟</button>
                        <button className={styles.btn_nav_ham}>درباره ما</button>
                        <button className={styles.btn_nav_ham}>تماس با ما</button>
                        <div></div>
                        <button className={styles.btn_account_ham}>صفحه شخصی</button>
                        <div></div>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;