import React, {useState, useEffect, useTimeout} from "react";
import axios from "axios";

// Styles
import styles from './Activation.module.css'

// Images
import tic from '../../../../Images/tic.png'
import greentic from '../../../../Images/green_tic.png'

const Activation = () => {

    const [data, setData] = useState({
        name: "",
        phonenumber: "",
        cardnumber: "",
        amount: ""
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    // Alert message state
    const [alert, setAlert] = useState(false);
    const AlertHandler = () => {
        setAlert(true)
        setTimeout(() => {
            setAlert(false)
            console.log(alert);
        }, 2000);
    }


    const [buttonDisable, setButtonDisable] = useState(false);
    const [welcomeMassage, setWelcomeMassage] = useState(false);

    const jwtToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pblVzZXJuYW1lIjoic2luYWtoIiwiaWF0IjoxNjcwMzUxNTE4LCJleHAiOjE2NzEyMTU1MTh9.zUx8Imt-8g7RecOZ39Jez3esTRJ-huQP99uGmArPVqA"
    const axiosConficPost = {
        headers: {
            "Dev": "vip4c@reDevelop3r",
            "Authorization": "Bearer " + jwtToken,

            // "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Headers":"*",
            // "Access-Control-Allow-Methods":"*"
        },
    };

    const [isError_1, setIsError_1] = useState("")

    const submitHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = data;
        setButtonDisable(true)
        axios.post("https://api.vip4care.ir/auth/login", LOGIN_DATA, axiosConficPost)
            .then((response)=> {
                if (response.data.success) {
                    localStorage.setItem('user', JSON.stringify(response.data))
                    setWelcomeMassage(true)
                    AlertHandler();
                }
            })

            .catch((errors)=> {
                if (errors.response.data.message) {
                    setIsError_1(errors.response.data.message)
                    console.log(errors)
                    setButtonDisable(false)
                }
            })

    }
    return ( 
        <div className={styles.Activation_Container}>
            <form onSubmit={submitHandler}>
                <section className={styles.activation_input_sec}>
                    <p>نام</p>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                    />
                </section>
                <section className={styles.activation_input_sec}>
                    <p>شماره تلفن</p>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='phonenumber'
                        value={data.phonenumber}
                        onChange={changeHandler}
                    />
                </section>
                <section className={styles.activation_input_sec}>
                    <p>شماره کارت</p>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='cardnumber'
                        value={data.cardnumber}
                        onChange={changeHandler}
                    />
                </section>
                <section className={styles.activation_input_sec}>
                    <p>مبلغ شارژ</p>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='amount'
                        value={data.amount}
                        onChange={changeHandler}
                    />
                    <span>ریال</span>
                </section>
                <section className={styles.err_sec}>
                    <p>{isError_1}</p>
                </section>
                <section className={styles.activation_btn_sec}>
                    <button ><img src={tic} alt="" />فعالسازی</button>
                    <div></div>
                    <div></div>
                </section>
                <div className={alert ? styles.alert_div : styles.alert_div_notactive}>
                    <section className={styles.alert_sec} >
                        <img src={greentic} alt="green tic for an alert message" />
                        <p>کارت با موفقیت فعال شد.</p>
                    </section>
                </div>
            </form>
        </div>
     );
}
 
export default Activation;