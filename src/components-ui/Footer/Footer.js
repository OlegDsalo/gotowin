import React from 'react';
import Logo from '../../assets/test-logo.png'
import styles from './Footer.module.scss';
import {ReactComponent as Group} from "../../assets/icons/Group.svg";
import {ReactComponent as DocumentText} from "../../assets/icons/document-text.svg";
import {ReactComponent as ShieldCheck} from "../../assets/icons/shield-check.svg";
import {useAppNavigation} from "../../hook/useAppNavigation";


const Footer = () => {
    const {navigateToPrivacyPolicy, navigateToUserAgreement, navigateToPrivacyPolicyUA} = useAppNavigation()
    return (
        <footer className={styles.footer}>
            <div className={styles.block_icons}>
                <Group className={styles.block_icon} onClick={navigateToPrivacyPolicy}/>
                <DocumentText className={styles.block_icon} onClick={navigateToPrivacyPolicyUA}/>
                <ShieldCheck className={styles.block_icon} onClick={navigateToUserAgreement}/>
            </div>
            <div className={styles.footer__left}>
                <div className={styles.footer__left__row}>
                    <img className={styles.footer__logo} src={Logo} alt="logo"/>
                    <p className={styles.logo__name}>GOTOWIN</p>
                </div>
                <p className={styles.footer__text}>© 2022 GOTOWIN.</p>
            </div>
            <div className={styles.footer__right}>
                <h1 className={styles.footer__header}>Mail</h1>
                <p className={styles.footer__text}>gotowin2023@gmail.com</p>
            </div>
        </footer>
    );
};

export default Footer;
