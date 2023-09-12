import React, {useState, useEffect} from "react";
import axios from "axios";

// Styles
import styles from './Remaining.module.css'

// Images
import search from '../../../../Images/search.png'

// Components
import Remaningcard from "./Remaningcard/Remaningcard";

const Remaining = () => {

    // Gathering data

    const [data, setData] = useState({
        cardnumber: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
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

    const card13 = {
        id: "0925",
    }
    const card14 = {
        id: "5401",
    }
    const card15 = {
        id: "3698",
    }

    const [isError_1, setIsError_1] = useState("")
    const [history, setHistory] = useState([
        card13,
        card14,
        card15
    ]);

    // Sending data to the server to get info

    const submitHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = data;
        setButtonDisable(true)
        axios.post("https://api.vip4care.ir/auth/login", LOGIN_DATA, axiosConficPost)
            .then((response)=> {
                if (response) {
                    setWelcomeMassage(true)
                    // Get data that must be shown, here. the const is history.
                }
            })

            .catch((errors)=> {
                if (errors) {
                    setIsError_1(errors.response.data.message)
                    console.log(errors)
                    setButtonDisable(false)
                }
            })
    }

    // Gathering data for withdrawl
    const [amount, setAmount] = useState({
        amount: "",
    });

    const amountChangeHandler = (event) => {
        setAmount({
            ...amount, [event.target.name]: event.target.value,
        });
    }

    const withdrawlHandler = (event) => {
        event.preventDefault();
        const LOGIN_DATA = amount;
        setButtonDisable(true)
        axios.post("https://api.vip4care.ir/auth/login", LOGIN_DATA, axiosConficPost)
            .then((response)=> {
                if (response) {
                    setWelcomeMassage(true)
                }
            })

            .catch((errors)=> {
                if (errors) {
                    alert('مشکلی پیش آمده. دوباره امتحان کنید.')
                    setButtonDisable(false)
                }
            })
    }

    return ( 
        <div className={styles.Remaining_Container}>
            <section className={styles.remaining_input_sec}>
                <input
                    className={styles.formInput}
                    placeHolder="شماره کارت مد نظر را وارد کنید"
                    type='text'
                    name='cardnumber'
                    value={data.cardnumber}
                    onChange={changeHandler}
                />
                <img src={search} alt="" onClick={submitHandler}/>
            </section>
            <section className={styles.remaining_sec}>
                <h2>موجودی کارت</h2>
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
                <section className={styles.remaning_sec_forwithdrawal}>
                    <p>مقدار برداشتی</p>
                    <input
                        className={styles.formInput}
                        type='text'
                        name='amount'
                        value={data.amount}
                        onChange={amountChangeHandler}
                        />
                    <button onClick={withdrawlHandler}>کسر</button>
                </section>
            </section>
            <section className={styles.remaining_sec}>
                <h2>سوابق کارت</h2>
                {
                    history?.map(service => <  Remaningcard key={service._id} productData={service} />)
                }
            </section>
        </div>
     );
}
 
export default Remaining;