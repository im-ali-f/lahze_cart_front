import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { AudioRecorder } from 'react-audio-voice-recorder';

// Styles
import styles from './CardPage.module.css'

// Images
import userlogo from '../../../../Images/partner2.png'
import instagram from '../../../../Images/instagram.png'
import phone from '../../../../Images/phone.png'
import website from '../../../../Images/website.png'
import map from '../../../../Images/map.png'
import attetiongrey from '../../../../Images/attentiongrey.png'
import trash from '../../../../Images/trash.png'
import cardexample from '../../../../Images/cardexampleforuser.png'

const CardPage = () => {

    // Voice recording Funcs and states
    const [voiceFile, setVoiceFile] = useState(false);
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        if (voiceFile) return
        document.getElementById("voiceRec").appendChild(audio);
        setVoiceFile(true);
    };
    
    const removeChildHandler = () => {
        setVoiceFile(false)
        const parent =  document.getElementById("voiceRec");
        parent.removeChild(parent.firstElementChild);
    }

    // Gathering data

    const [data, setData] = useState({
        text: "",
    });

    const changeHandler = (event) => {
        setData({
            ...data, [event.target.name]: event.target.value,
        });
    }

    // const userToken = JSON.parse(localStorage.getItem('user'));

    // const axiosConficPost = {
    //     headers: {
    //         "Dev": "vip4c@reDevelop3r",
    //         "Authorization": "Bearer " + userToken.token,
    //     },
    // };

    // const [userProfile, setUserProfile] = useState([]);

    // useEffect(() => {
    //     const getServices = async () => {
    //         axios.get("https://api.vip4care.ir/user/profile", axiosConficPost)
    //             .then((response)=> setUserProfile(response.data.user))
    //             // .catch((error)=> console.log(error))
    //     };

    //     getServices();

    // }, []);

    return ( 
        <div className={styles.CardPage_Container}>
            <section className={styles.right_sec}>
                <img src={cardexample} alt="user card example" className={styles.cardexampleforuser}/>
                <section className={styles.leftover_sec}>
                    <section className={styles.leftover_percent_sec}>
                        <p>25%</p>
                    </section>
                </section>
                <section className={styles.info_sec}>
                    <div>
                        <p>موجودیه اولیه:</p>
                        <p>500.000.000 ریال</p>
                    </div>
                    <div>
                        <p>موجودیه باقی مانده:</p>
                        <p>125.000.000 ریال</p>
                    </div>
                </section>
            </section>
            <section className={styles.left_sec}>
                <div className={styles.activation_info_div}>
                    <section className={styles.activation_info_div_sec_img}>
                        <img src={userlogo} alt="user logo" />
                    </section>
                    <section className={styles.activation_info_div_sec_info}>
                        <h2>کافه حیات انسان</h2>
                        <div className={styles.activation_info_div_sec_info_div}>
                            <div>
                                <img src={website} alt="user info" />
                                <p>https://pizzapelleh.ir</p>
                            </div>
                            <div>
                                <img src={instagram} alt="user info" />
                                <p>pelle_pizza</p>
                            </div>
                            <div>
                                <img src={phone} alt="user info" />
                                <p>02833654052</p>
                            </div>
                        </div>
                    </section>
                </div>
                <div className={styles.activation_input_div}>
                    <img src={map} alt="user map address" className={styles.user_map_address}/>
                    <section className={styles.activation_input_sec}>
                        <input
                            className={styles.activation_input}
                            placeholder="نوشتن متن دلخواه..."
                            type='text'
                            name='text'
                            value={data.text}
                            onChange={changeHandler}
                        />
                    </section>
                    <section className={styles.voice_input_sec} id="voiceRec">
                        { voiceFile ?
                            <div className={styles.trash_icon} onClick={removeChildHandler}>
                                <img src={trash} alt="trash icon" />
                            </div>
                                : 
                            <AudioRecorder
                                onRecordingComplete={addAudioElement}
                                audioTrackConstraints={{
                                    noiseSuppression: true,
                                    echoCancellation: true,
                                }} 
                                // True the elemnt below to make the auto download possible
                                downloadOnSavePress={false}
                                downloadFileExtension="webm"
                            />
                        }
                        {/* THe Audio file will be created here: */}
                    </section>
                    <section className={styles.btn_sec}>
                        <div>
                            <img src={attetiongrey} alt="attention sign" />
                            <p>در صورت نقض قوانین جمهوری اسلامی صدای شما حذف می شود.</p>
                        </div>
                        <button className={styles.submit_btn}>
                            ثبت پیام
                        </button>
                    </section>
                </div>
            </section>
        </div>
     );
}
 
export default CardPage;