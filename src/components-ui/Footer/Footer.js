import React from 'react';
import Logo from '../../assets/test-logo.png'
import styles from './Footer.module.scss';
import {ReactComponent as PrivacyPolicyUaIcon} from "../../assets/icons/privacy-policyua.svg";
import {ReactComponent as UserAgreementIcon} from "../../assets/icons/user-agreement.svg";
import {ReactComponent as PravacyPolicyIcon} from "../../assets/icons/privacy-policy.svg";
import {useAppNavigation} from "../../hook/useAppNavigation";


const Footer = () => {
    const {navigateToPrivacyPolicy, navigateToUserAgreement, navigateToPrivacyPolicyUA} = useAppNavigation()
    return (
        <footer className={styles.footer}>
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
                <div className={styles.block_icons}>
                    <PrivacyPolicyUaIcon className={styles.block_icon} onClick={navigateToPrivacyPolicyUA}/>
                    <UserAgreementIcon className={styles.block_icon} onClick={navigateToUserAgreement}/>
                    <PravacyPolicyIcon className={styles.block_icon} onClick={navigateToPrivacyPolicy}/>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
