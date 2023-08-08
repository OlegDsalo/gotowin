import React, {useEffect, useState} from 'react';
import Header from "../../components-ui/Header/Header";
import Footer from "../../components-ui/Footer/Footer";
import classes from './PrivacPolicy.module.scss'
import useAsyncEffect from "../../utils/AsyncEffect";
import accountServiceInstance from "../../service/AccountService";
import PageTitle from "../../utils/pageTitle";

const PrivacyPolicy = () => {
    const [user, setUser] = useState(null)
    useAsyncEffect(() => {
        if (localStorage.getItem('token')) {
            try {
                const responce = accountServiceInstance.getUser();
                setUser(responce)
            } catch (e) {
                localStorage.removeItem('token')
            }
        }
    }, [])
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    return (
        <div className={classes.wrapper}>
            <PageTitle title='Privacy Policy'></PageTitle>
            <Header user={user}/>
            <div className={classes.content}>
                <div className={classes.title}>Privacy Policy</div>

                <div className={classes.content_title}>
                    General
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        This privacy policy (hereinafter – the “Privacy Policy”) governs the manner in which the GOTOWIN
                        platform (hereinafter – the “GOTOWIN”, “we”, “us”, “our”) collects, uses, processes, stores, and
                        discloses information received from users of our website GOTOWIN (GOW) (“Website”) in order to
                        provide you with services available through the Website (hereinafter – the “Services”).
                    </div>
                    <div className={classes.content_text}>
                        This Privacy Policy has incorporated provisions of the EU General Data Protection Regulation
                        (GDPR), ePrivacy Directive, The Data Protection Act and is compliant with them and set in
                        coherence with other valid generally binding legal regulations as we act in accordance with
                        personal information processing rules within the European Economic Area (EEA).
                    </div>
                    <div className={classes.content_text}>
                        We respect the privacy of all users of the Website and ensure that the Personal Data of the
                        consumers are treated confidentially and in compliance with applicable laws and regulations.
                    </div>
                    <div className={classes.content_text}>
                        This Privacy Policy applies to the Website, the Services, and products offered by GOTOWIN
                        (whenever you use Services through the Website or mobile application or by corresponding with us
                        - for example, by e-mail or by filling messaging form on the Website).
                    </div>
                    <div className={classes.content_text}>
                        We assume that you have carefully read this document and accepted it.
                    </div>
                    <div className={classes.content_text}>
                        By using the Website, our Services, and products offered by GOTOWIN, contacting us you express
                        your consent to the terms of this Privacy Policy. By clicking the confirm-checkbox while
                        creating the Account on the Platform you provide us with your explicit consent to the terms of
                        this Privacy Policy and all the data practices described in this Privacy Policy and in the User
                        Agreement including the processing, storage, and usage of your Personal Data.
                    </div>
                    <div className={classes.content_text}>
                        If you disagree with this Privacy Policy, then you should refrain from using our Website, mobile
                        application, and/or Services or opening an Account. This Privacy Policy is an integral part of
                        our User Agreement.
                    </div>
                    <div className={classes.content_text}>
                        If you have any questions regarding this Privacy Policy and/or questions/requests regarding your
                        Personal Data, please contact our Data Protection Officer at GOTOWIN (GOW)
                    </div>
                </div>

                <div className={classes.content_title}>
                    Processing Personal Data is a broad concept under the GDPR
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        The GDPR governs how the Personal Data of individuals may be processed by organizations.
                        “Personal Data” and “processing” are frequently used terms in the legislation, and understanding
                        their particular meanings under the GDPR illuminates the true reach of this law:
                        Personal Data is any information relating to an identified or identifiable individual. This is a
                        very broad concept because it includes any information that could be used on its own or in
                        combination with other pieces of information to identify a person.
                    </div>
                    <div className={classes.content_text}>
                        Personal Data is not just a person’s name or e-mail address. It can also encompass information
                        such as financial information or even, in some cases, an IP address. Moreover, certain
                        categories of Personal Data are given a higher level of data protection because of their
                        sensitive nature and are not processed. These categories of data are information about an
                        individual’s racial and ethnic origin, political opinions, religious and philosophical beliefs,
                        trade union membership, genetic data, biometric data, health data, information about a person’s
                        sex life or sexual orientation, and criminal record information (including Personal Data about
                        criminal offenses, or alleged offenses).
                    </div>
                    <div className={classes.content_text}>
                        Processing Personal Data is the key activity that triggers obligations under the GDPR.
                        Processing means any operation or set of operations that is performed on Personal Data or on
                        sets of Personal Data, whether or not by automated means, such as collection, recording,
                        organization, structuring, storage, adaptation or alteration, retrieval, consultation, use,
                        disclosure by transmission, dissemination or otherwise making available, alignment or
                        combination, restriction, erasure, or destruction. In practical terms, this means any process
                        that stores or consults Personal Data is considered processing.
                    </div>
                </div>

                <div className={classes.content_title}>
                    The GDPR can apply to organizations located outside the EU
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        The GDPR is relevant to any globally operating company, not just those located in the EU. Under
                        the GDPR, organizations may be in scope if (i) the organization is established in the EU, or
                        (ii) the organization is not established in the EU, but the data processing activities are with
                        regard to EU individuals and relate to the offering of goods and services to them or the
                        monitoring of their behavior.
                    </div>
                </div>


                <div className={classes.content_title}>
                    Personal Data collection and usage
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We wil l collect, store and use your Personal Data for the purposes set in this Privacy Policy.
                    </div>
                    <div className={classes.content_text}>
                        We have identified the types of Personal Data we may use about you and how and why we will use
                        them.
                    </div>
                    <div className={classes.content_text}>
                        During the provision of services, we may also use software and other means, tools of third
                        parties (independent service providers) (hereinafter - Service Providers), which also collect
                        Personal Data of our Users.
                    </div>
                    <div className={classes.content_text}>
                        The procedure for collecting, processing, storing and using Personal Data is determined by the
                        Privacy Policy of the relevant Service Provider.
                    </div>
                    <div className={classes.content_text}>
                        The privacy policies of the software products of the Service Providers are available for review
                        at the following links:
                    </div>
                    <ul>
                        <li className={classes.content_text}>Zendesk:
                            <a className={classes.content_link}
                               href='https://www.zendesk.co.uk/company/agreements-and-terms/privacy-notice/'>https://www.zendesk.co.uk/company/agreements-and-terms/privacy-notice/
                            </a>
                        </li>
                        <li className={classes.content_text}>
                            Sumsub:
                            <a className={classes.content_link}
                               href='https://sumsub.com/privacy-notice/'>https://sumsub.com/privacy-notice/</a>
                        </li>
                    </ul>
                    <div className={classes.content_text}>
                        This list of Service Providers is non-exhaustive and may change and be supplemented. In any
                        case, the User can review privacy policies of those Service Providers, with which GOTOWIN
                        cooperates, on their official websites
                    </div>
                </div>


                <div className={classes.content_title}>
                    What Personal Data we may collect
                </div>
                <div className={classes.content_section}>
                    <ol className={classes.content_text}>
                        <li>
                            Personal Data that our customers provide us for the registration, include:
                            <ul className={classes.content_filled_list}>
                                <li className={classes.content_list_second}>
                                    your contact details, including your name, address, e-mail address, and telephone
                                    number(s);
                                </li>
                                <li className={classes.content_list_second}>
                                    your identification details, including your date of birth, gender, residence
                                    address.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Know Your Customer (KYC) Personal Data from you, third parties and/or publicly available
                            sources including:
                            <ul className={classes.content_filled_list}>
                                <li className={classes.content_list_second}>
                                    passport or another government-issued identity document (as well as the number and
                                    expiry date of the identity document);
                                </li>
                                <li className={classes.content_list_second}>
                                    your photo;
                                </li>
                                <li className={classes.content_list_second}>
                                    documents establishing your source of funds;
                                </li>
                                <li className={classes.content_list_second}>
                                    results of KYC or Politically Exposed Person (PEP) checks, including information
                                    collected by our suppliers;
                                </li>
                                <li className={classes.content_list_second}>
                                    other Personal Data if provided during passing KYC/compliance/verification
                                    procedures (including additional), etc.
                                </li>
                            </ul>
                        </li>


                        <li>
                            Personal Data you provide as part of your account with us, including:
                            your password;
                            <ul className={classes.content_filled_list}>
                                <li className={classes.content_list_second}>
                                    password;
                                </li>
                                <li className={classes.content_list_second}>
                                    your account and marketing preferences.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Personal Data relating to your use of our Services, including:
                            your orders, instructions to us;
                            your transactions using your account(s), including your account(s) in third-party bank(s),
                            financial institution(s), payment card details, etc., the amount, originator or beneficiary,
                            and time/date of the transfers you make and receive;
                            information about the digital device through which you access our Services, such as device
                            type, operating system, screen resolution, unique device identifiers, the mobile network
                            system;
                            IP address;
                            date and time of log-in and requests;
                            Personal Data in your correspondence with us, by e-mail, telephone, messaging, texts,
                            on-line chats, via social media, or otherwise;
                            whether you've clicked on links in electronic communications from us, including the URL
                            clickstream to our website;
                            Personal Data that you provide in response to our surveys.
                            <ul className={classes.content_filled_list}>


                                <li className={classes.content_list_second}>
                                    your orders, instructions to us;

                                </li>
                                <li className={classes.content_list_second}>
                                    your transactions using your account(s), including your account(s) in third-party
                                    bank(s), financial institution(s), payment card details, etc., the amount,
                                    originator or beneficiary, and time/date of the transfers you make and receive;

                                </li>
                                <li className={classes.content_list_second}>
                                    information about the digital device through which you access our Services, such as
                                    device type, operating system, screen resolution, unique device identifiers, the
                                    mobile network system;
                                </li>
                                <li className={classes.content_list_second}>
                                    IP address;
                                </li>
                                <li className={classes.content_list_second}>
                                    date and time of log-in and requests;
                                </li>
                                <li className={classes.content_list_second}>
                                    Personal Data in your correspondence with us, by e-mail, telephone, messaging,
                                    texts, on-line chats, via social media, or otherwise;
                                </li>
                                <li className={classes.content_list_second}>
                                    whether you've clicked on links in electronic communications from us, including the
                                    URL clickstream to our website;
                                </li>
                                <li className={classes.content_list_second}>
                                    Personal Data that you provide in response to our surveys.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Personal Data that we collect from third parties in order to be able to register you as a
                            customer or to provide Services to you:
                            <ul className={classes.content_filled_list}>
                                <li className={classes.content_list_second}>
                                    Personal Data related to payments to or from your accounts with us, provided by
                                    payment processing services, banks, card schemes and other financial services firms;
                                </li>
                                <li className={classes.content_list_second}>
                                    Personal Data from credit reference agencies or fraud prevention agencies.
                                </li>
                            </ul>
                        </li>


                        <li>
                            Personal Data that we collect through your use of our website (whether or not you have
                            registered for our Services) including:
                            <ul className={classes.content_filled_list}>
                                <li className={classes.content_list_second}>
                                    device information such as operating system, unique device identifiers, the mobile
                                    network system;
                                </li>
                                <li className={classes.content_list_second}>
                                    hardware and browser settings;
                                </li>
                                <li className={classes.content_list_second}>
                                    date and time of visits;
                                </li>
                                <li className={classes.content_list_second}>
                                    the pages you visit, the length of the visit, your interactions with the page (such
                                    as scrolling, clicks and mouse-overs), methods to browse away from our website, and
                                    search engine terms you use;
                                </li>
                                <li className={classes.content_list_second}>
                                    IP address.
                                </li>
                            </ul>
                        </li>


                        <li>
                            Personal Data that we collect from individuals representing organizations such as our
                            corporate customers and suppliers, including:
                            <ul className={classes.content_filled_list}>
                                <li className={classes.content_list_second}>
                                    names, roles, and contact details of individuals working for organizations;
                                </li>
                                <li className={classes.content_list_second}>
                                    other Personal Data regarding such individuals;
                                </li>
                                <li className={classes.content_list_second}>
                                    any Personal Data contained in correspondence with those individuals.
                                </li>
                            </ul>
                        </li>
                    </ol>
                </div>


                <div className={classes.content_title}>
                    How we may use your Personal Data
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We collect and process all types of Personal Data to provide you with our Services, ensure that
                        Services function properly, as well as to verify your identity and ensure the security of our
                        Services, as follows:
                    </div>
                    <div className={classes.content_text}>
                        We may use Personal Data that you give us to register with us to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                process your registration request;
                            </li>
                            <li className={classes.content_list}>
                                on-board you as a customer;
                            </li>
                            <li className={classes.content_list}>
                                provide our products and Services;
                            </li>
                            <li className={classes.content_list}>
                                manage and administer our Services, including your account with us;
                            </li>
                            <li className={classes.content_list}>
                                communicate with you about your account and our Services, including informing you of our
                                products and Services;
                            </li>
                            <li className={classes.content_list}>
                                send personalized offers of Services and products.
                            </li>
                        </ul>
                    </div>

                    <div className={classes.content_text}>
                        We may use Know Your Customer (KYC) Personal Data to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                carry out regulatory checks and meet our obligations to our regulators;
                            </li>
                            <li className={classes.content_list}>
                                help us ensure that our customers are genuine and to prevent and detect fraud, money
                                laundering and other crime (such as terrorist financing and offenses involving identity
                                theft).
                            </li>
                        </ul>
                    </div>


                    <div className={classes.content_text}>
                        We may use Personal Data that you provide as part of your account with us to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                manage and administer your account with us;
                            </li>
                            <li className={classes.content_list}>
                                communicate with you regarding your account and our Services.
                            </li>
                        </ul>
                    </div>

                    <div className={classes.content_text}>
                        We may use Personal Data relating to your use of our Services to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                manage and administer our Services and systems;
                            </li>
                            <li className={classes.content_list}>
                                check if you are in a location or using a device consistent with our records in order to
                                help prevent fraud;
                            </li>
                            <li className={classes.content_list}>
                                develop and improve our Services based on analyzing this information, the behaviors of
                                our users, and the technical capabilities of our users;
                            </li>
                            <li className={classes.content_list}>
                                improve our Services to better suit the behaviors and technical capabilities of the
                                users of our Service;
                            </li>
                            <li className={classes.content_list}>
                                answer any issues or concerns;
                            </li>
                            <li className={classes.content_list}>
                                monitor customer communications for qua lity and training purposes.
                            </li>
                        </ul>
                    </div>


                    <div className={classes.content_text}>
                        We may use Personal Data that we collect from third parties in order to be able to register you
                        as a customer or to provide Services to you to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                manage and administer our Services and systems;
                            </li>
                            <li className={classes.content_list}>
                                help us to prevent and detect fraud.
                            </li>
                        </ul>
                    </div>


                    <div className={classes.content_text}>
                        We may use Personal Data that we collect through your use of our website (whether or not you
                        have registered for our Services) to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                develop new Services based on the information being collected, the behaviors of our
                                users, and the technical capabilities of our users;
                            </li>
                            <li className={classes.content_list}>
                                identify issues with the website, including website security, and user's experience of
                                it;
                            </li>
                            <li className={classes.content_list}>
                                monitor the way our website is used (including locations it is accessed from, devices it
                                is accessed from, understanding peak usage times, and analyzing what functionality and
                                information is most and least accessed), where our customers have come from online (such
                                as from links on other websites or advertising banners), and the way in which our
                                website is used by different users groups;
                            </li>
                            <li className={classes.content_list}>
                                do statistical analysis and research with the purpose of better understanding the
                                breakdown of our customers, their use of our Services, and what attracts our customers
                                to our Services.
                            </li>
                        </ul>
                    </div>

                    <div className={classes.content_text}>
                        We may use the Personal Data that we collect from individuals representing organizations such as
                        our corporate customers and suppliers to:
                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                provide Services and products;
                            </li>
                            <li className={classes.content_list}>
                                build relationships and BtoB collaborations with other organizations;
                            </li>

                            <li className={classes.content_list}>
                                provide marketing communications to these individuals;
                            </li>
                            <li className={classes.content_list}>
                                improve our Services and develop new Services based on the preferences and behaviors of
                                these individuals;
                            </li>
                            <li className={classes.content_list}>
                                obtain Services for our business.
                            </li>
                        </ul>
                    </div>
                </div>


                <div className={classes.content_title}>
                    Rights of the Personal Data subject
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        You have certain rights with respect to your Personal Data, including those set forth below.
                    </div>
                    <div className={classes.content_text}>
                        Right to be informed - you have the right to be informed about the collection and use of your
                        Personal Data and the following information: who has collected Personal Data and processed, the
                        purposes for processing your Personal Data, retention periods for Personal Data, who the
                        Personal Data will be shared with etc.
                    </div>
                    <div className={classes.content_text}>
                        Right to access - you have the right to obtain from us confirmation as to whether or not your
                        Personal Data are being processed, the purposes of the processing, the categories of Personal
                        Data collected, the recipients to whom the Personal Data have been or will be disclosed etc.
                    </div>
                    <div className={classes.content_text}>
                        Right to rectification - you have the right to obtain from us the rectification of inaccurate
                        Personal Data concerning you, as well as the right to have incomplete Personal Data completed.
                    </div>
                    <div className={classes.content_text}>
                        Right to erasure (“right to be forgotten”) - you have a right to ask for the deletion of your
                        Personal Data if the Personal Data are no longer necessary in relation to the purposes for which
                        they were collected or otherwise processed or if there is no other legal ground for the
                        processing.
                    </div>
                    <div className={classes.content_text}>
                        Right to restriction of processing - you have a right to ask us to restrict further processing
                        of your Personal Data, so that in each case the data may be processed only upon separate consent
                        from you.
                    </div>
                    <div className={classes.content_text}>
                        Right to data portability - you have the right to receive your Personal Data in a structured,
                        commonly used and machine-readable format and have the right to transmit those data to another
                        controller where technically feasible.
                    </div>
                    <div className={classes.content_text}>
                        Right to object - you have the right to object, on grounds relating to your particular
                        situation, at any time to processing of your Personal Data if there are no legitimate grounds
                        for the processing which override your interests, rights and freedoms or for the establishment,
                        exercise or defence of legal claims.
                    </div>
                    <div className={classes.content_text}>
                        Right to withdraw - you can withdraw your consent for your Personal Data processing at any time
                        and ask us to stop access, storage, usage and other processing of your Personal Data if you
                        believe that we do not have the proper rights to do so.
                    </div>
                    <div className={classes.content_text}>
                        Right to non-discrimination - we will not discriminate against you (as provided in applicable
                        law) for exercising any of your rights as a Personal Data subject.
                    </div>
                    <div className={classes.content_text}>
                        To exercise any of these rights, please contact our Data Protection Officer at GOTOWIN (GOW)
                    </div>
                </div>


                <div className={classes.content_title}>
                    Direct Marketing
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        Please note that if you have given explicit consent for marketing communications, this can be
                        withdrawn at any time. You can also unsubscribe from our marketing communications.
                    </div>
                    <div className={classes.content_text}>
                        Please be aware that from time to time we may need to contact you regarding operational issues
                        or to adhere to the performance requirements of our agreement with you. These will not be
                        marketing communications, and we will operate under legitimate interests in order to contact you
                        for these reasons.
                    </div>
                </div>


                <div className={classes.content_title}>
                    Legal requirements
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We need to collect certain types of Personal Data for compliance with legal requirements
                        relating to our anti-fraud and Anti-Money Laundering/Countering Financing of Terrorism/Know Your
                        Customer obligations. If this Personal Data is not provided we cannot agree to provide a Service
                        to you.
                    </div>
                    <div className={classes.content_text}>
                        Your Personal Data may also be processed if it is necessary on reasonable request by a law
                        enforcement or regulatory authority, body, or agency or in the defense of a legal claim. We will
                        not delete Personal Data if relevant to an investigation or a dispute. It will continue to be
                        stored until those issues are fully resolved.
                    </div>
                </div>

                <div className={classes.content_title}>
                    Security of Personal Data
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We use a variety of physical, technical, and administrative security measures to ensure the
                        confidentiality of your Personal Data, and to protect your Personal Data from loss, theft,
                        unauthorised access, misuse, alteration or destruction as well as from other illegal actions of
                        third parties.
                    </div>
                    <div className={classes.content_text}>
                        We implemented such security measures as data encryption when in transit and storage, data
                        storage diversification, strict physical access controls to buildings & files, anonymization
                        technology, data and asset diversification, and strict physical access of a minimum number of
                        individuals, using multisign access tools, and subject to confidentiality commitments.
                    </div>
                    <div className={classes.content_text}>
                        We make sure that we regularly review our information security policies and measures and, where
                        necessary, improve them.
                    </div>
                </div>


                <div className={classes.content_title}>
                    Sharing your Personal Data
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We do not sell, trade, or rent our Users’ Personal Data to any third parties. We may transfer
                        certain Personal Data of Users (such as your contact and/or identification information) to
                        third-party financial institutions in exceptional cases, when required by the rules and policies
                        of such financial institutions, in order to identify Users and provide them with our Services.
                    </div>
                    <div className={classes.content_text}>
                        Users acknowledge and consent that we can transfer their Personal Data to third parties that
                        carry out KYC checks and fraud database checks. Such third parties have been assessed by us and
                        guarantee compliance with the legislation on the processing of personal data and with this
                        privacy policy.
                    </div>
                </div>


                <div className={classes.content_title}>
                    Retention of Personal Data
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We retain your Personal Data only for those periods necessary to fulfil the various purposes
                        outlined in this Privacy Policy unless a longer retention period is required or allowed by law.
                    </div>
                    <div className={classes.content_text}>
                        For the purposes of complying with our legal or regulatory obligations and the world industry
                        standards for data storage, you give us consent and permission to keep records of such
                        information throughout the term of your Account, as well as for 5 (five) years after the closure
                        of your Account.
                    </div>
                    <div className={classes.content_text}>
                        We store your Personal Data in in a depersonalized or aggregated form but not in a way that
                        would identify you personally.
                    </div>
                    <div className={classes.content_text}>We may store your personal data for longer than is required by
                        law, as long as it is in our legitimate business interests and is not prohibited by law.
                    </div>
                </div>


                <div className={classes.content_title}>
                    Personal Data disclosure
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We may disclose certain Personal Data to our business partners who provide us with services such
                        as cloud services/servers, insurance, analytics, research, and other services or work with us to
                        deliver our Services to users. We provide third parties with the minimum amount of Personal Data
                        necessary only to provide the required service.
                    </div>
                    <div className={classes.content_text}>
                        Personal Data will be provided by us only for the purpose of providing users with Services, as
                        well as to improve these Services, related communications. Such information will not be provided
                        to third parties for their marketing purposes.
                    </div>
                    <div className={classes.content_text}>
                        We may disclose your Personal Data in accordance with the law, court order, in court proceedings
                        and/or on the basis of public requests or requests from government authorities in or outside the
                        territory of your country of residence. We may also disclose your Personal Data if we determine
                        that such disclosure is necessary or appropriate for national security, law enforcement or other
                        socially important reasons.
                    </div>
                    <div className={classes.content_text}>
                        We may also disclose your Personal Data if we determine that the disclosure is necessary to
                        enforce GOTOWIN User Agreement or to protect our activities and our users.
                    </div>
                </div>

                <div className={classes.content_title}>
                    Personal Data transfers
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        We may transfer to, and store your Personal Data we collect in, countries other than the country
                        in which the data was originally collected, including the countries outside the European
                        Economic Area (“EEA”), the United Kingdom and Switzerland. Those countries may not have the same
                        data protection laws as the country in which you provided the data. When we transfer your
                        Personal Data to other countries, we will protect the Data as described in this Privacy Policy
                        and comply with applicable legal requirements providing adequate protection for the transfer of
                        data to countries outside the EEA, the United Kingdom and Switzerland.

                    </div>
                    <div className={classes.content_text}>
                        If you are located in the EEA, the United Kingdom or Switzerland, we will only transfer your
                        Personal Data if:

                        <ul className={classes.content_filled_list}>
                            <li className={classes.content_list}>
                                the country to which the Personal Data will be transferred has been granted a European
                                Commission adequacy decision; or
                            </li>
                            <li className={classes.content_list}>
                                we have put in place appropriate safeguards in respect of the transfer, for example, we
                                have entered into EU standard contractual clauses and required additional safeguards
                                with the recipient, or the recipient is a party to binding corporate rules approved by
                                an EU, UK or Swiss supervisory authority.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={classes.content_title}>
                    Changes to the Privacy Policy
                </div>
                <div className={classes.content_section}>
                    <div className={classes.content_text}>
                        1. We reserve the right to amend the Privacy Policy at our discretion and at any time. Any changes
                        to this Policy will take effect from the moment this Policy is published on GOTOWIN (GOW). You
                        shall regularly review the Privacy Policy and pay attention to its revisions. Your continued use
                        of our Website and Services following the posting of changes constitutes your acceptance of the
                        amended Privacy Policy. We always indicate the date the last changes were published.
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default PrivacyPolicy;
