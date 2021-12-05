import React from 'react';
import styles from './FaqList.module.css';
import DownArrow from '../../assests/icon-arrow-down.svg';


const FaqList = (props) => {

    const ClickHAndler = (e) => {
        let getList = document.getElementsByClassName('FaqList');
        for (let iter = 0; iter < getList.length; iter++) {
            getList[iter].classList.remove(`${styles.Active}`, `${styles.InitialStyle}`);
            getList[iter].getElementsByClassName(`${styles.FaqList_p}`)[0].classList.remove(`${styles.Bold}`);
            getList[iter].getElementsByClassName(`${styles.Figure}`)[0].style.transform = 'unset';

        }

        let selectedElement = e.currentTarget;
        let selectedElementHeight = selectedElement.scrollHeight;
        let rootStyle = document.querySelector(':root');
        rootStyle.style.setProperty('--initialHeight', `${selectedElementHeight}px`)
        selectedElement.classList.toggle(`${styles.Active}`);
        selectedElement.getElementsByClassName(`${styles.FaqList_p}`)[0].classList.add(`${styles.Bold}`);
        selectedElement.getElementsByClassName(`${styles.Figure}`)[0].style.transform = 'rotate(180deg)';
    }

    return (
        <ul className={styles.FaqList}>
            <li className={`${styles.FaqList_li} FaqList`} onClick={ClickHAndler}>
                <div className={styles.FaqHeading}>
                    <p className={`${styles.FaqList_p}`}>How many team members can I invite?</p>
                    <figure className={styles.Figure}>
                        <img src={DownArrow} alt="down arrow" />
                    </figure>
                </div>
                <p className={styles.FaqListDesc} >
                    You can invite up to 2 additional
                    users on the Free plan. There is no limit on
                    team members for the Premium plan.
                </p>
            </li>
            <li className={`${styles.FaqList_li} FaqList ${styles.InitialStyle}` } onClick={ClickHAndler} onLoad={(e)=> {
                document.querySelector(':root').style.setProperty('--initialHeight', `${e.currentTarget.scrollHeight}px`);
            }}>
                <div className={styles.FaqHeading}>
                    <p className={`${styles.FaqList_p} ${styles.Bold}`}>What is the maximum file upload size?</p>
                    <figure className={`${styles.Figure} ${styles.CursorRotate}`}>
                        <img src={DownArrow} alt="down arrow" />
                    </figure>
                </div>
                <p className={styles.FaqListDesc} >
                    No more than 2GB. All files in your account
                    must fit your allotted storage space.
                </p>
            </li>
            <li className={`${styles.FaqList_li} FaqList`} onClick={ClickHAndler}>
                <div className={styles.FaqHeading}>
                    <p className={`${styles.FaqList_p}`}>How do I reset my password?</p>
                    <figure className={styles.Figure}>
                        <img src={DownArrow} alt="down arrow" />
                    </figure>
                </div>
                <p className={styles.FaqListDesc} >
                    Click “Forgot password” from the
                    login page or “Change password” from
                    your profile page. A reset link will
                    be emailed to you.
                </p>
            </li>
            <li className={`${styles.FaqList_li} FaqList`} onClick={ClickHAndler}>
                <div className={styles.FaqHeading}>
                    <p className={`${styles.FaqList_p}`}>Can I cancel my subscription?</p>
                    <figure className={styles.Figure}>
                        <img src={DownArrow} alt="down arrow" />
                    </figure>
                </div>
                <p className={styles.FaqListDesc} >
                    Yes! Send us a message and we’ll
                    process your request no questions asked.
                </p>
            </li>
            <li className={`${styles.FaqList_li} FaqList`} onClick={ClickHAndler}>
                <div className={styles.FaqHeading}>
                    <p className={`${styles.FaqList_p}`}>Do you provide additional support?</p>
                    <figure className={styles.Figure}>
                        <img src={DownArrow} alt="down arrow" />
                    </figure>
                </div>
                <p className={styles.FaqListDesc} >
                    Chat and email support is available 24/7.
                    Phone lines are open during normal business hours.
                </p>
            </li>
        </ul>
    );
}

export default FaqList;