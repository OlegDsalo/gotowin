import React, {useEffect, useState} from 'react';
import Footer from "../../components-ui/Footer/Footer";
import Header from "../../components-ui/Header/Header";
import classes from "./UserAgreement.module.scss"
import useAsyncEffect from "../../utils/AsyncEffect";
import accountServiceInstance from "../../service/AccountService";

const UserAgreement = () => {
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
            <Header user={user}/>
            <div className={classes.content}>
                <div className={classes.title}>
                    User agreement
                </div>
                <div className={classes.content_wrapper}>
                    <div>
                        By using this Website or creating an Account on the GOTOWIN Platform or using any other GOTOWIN
                        Services available through the GOTOWIN Platform you agree to unconditionally accept and comply
                        with this public electronic User Agreement stated below (hereinafter - the “User Agreement”).
                    </div>
                    <div>
                        You should read the entire User Agreement carefully before using this Website or any of the
                        GOTOWIN Services.
                    </div>
                    <div>
                        As used in this User Agreement, “GOTOWIN” refers to GOTOWIN Group.
                    </div>
                    <div>
                        The text of this User Agreement posted on GOTOWIN contains all the essential terms and
                        conditions of a public offer of GOTOWIN, including the Terms of Use of the Services and the
                        Platform. Essential and integral parts of this User Agreement are:
                    </div>
                    <div>
                        Anti-Money Laundering, Countering Financing of Terrorism and Know Your Customer Policy
                        (hereinafter - the “AML/CFT Policy”), Privacy Policy, Delisting Policy (if published on the
                        Platform separately from this User Agreement) and Fees.
                    </div>
                    <div>
                        The English version of this User agreement has the effect of original and is the only valid
                        version for interpretation.
                    </div>
                    <div>
                        IMPORTANT: By creating or funding the Account or accessing or using the Platform or any of the
                        Services (each as defined below), you acknowledge that you have read, understand, and completely
                        agree to this User Agreement, as updated and amended from time to time. If you do not agree to
                        be bound by this User Agreement or by any subsequent amendments, changes or updates, you may not
                        access or use any of the Services, and if you do access or use any of the Services, you will be
                        bound by this User Agreement, as updated and amended from time to time; your only recourse in
                        the case of your unwillingness to be bound by this User Agreement is to stop using all of the
                        Services.
                    </div>
                    <div>
                        PLEASE READ THIS USER AGREEMENT BEFORE USING THE SERVICES. BY VISITING, BROWSING, USING THE
                        WEBSITE, OUR SERVICES, AND PRODUCTS OFFERED BY WHITEBIT, CONTACTING US YOU EXPRESS YOUR CONSENT
                        TO THIS USER AGREEMENT. BY CLICKING THE CONFIRM-CHECKBOX WHILE CREATING THE ACCOUNT ON THE
                        PLATFORM YOU PROVIDE US WITH YOUR EXPLICIT CONSENT TO TERMS OF THIS USER AGREEMENT.
                    </div>
                    <div>
                        Depending on your country of citizenship and/or residence, you may not be able to use some or
                        all the functions of the Website, Platform.
                    </div>
                    <div>
                        GOTOWIN and the User have entered into this User Agreement on the following terms and
                        conditions:
                    </div>
                    <ol>
                        <li>
                            Terms and definitions
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    In addition to the other terms defined elsewhere in this User Agreement, the
                                    following terms shall have the meanings ascribed to them below:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            “Account” means an account registered by the User on the Platform (including
                                            registered via mobile application).
                                        </li>
                                        <li className={classes.filled_item}>
                                            “Business day” means any calendar day other than Saturday, Sunday or any
                                            other day on which credit institutions are closed in London (England and
                                            Wales) and/or Vilnius (Republic of Lithuania).
                                        </li>
                                        <li className={classes.filled_item}>
                                            “Confidential information” means information that the User receives or
                                            learns as a result of using of the Services, or otherwise as a result of
                                            his/her access and use of the Platform, regardless of whether or not such
                                            information is designated as confidential, provided that such the
                                            information is not generally known to the public and/or openly published on
                                            the Website.
                                        </li>

                                        <li className={classes.filled_item}>
                                            “Data” means all data and other information generated by or accessible
                                            through the Platform and/or otherwise provided to the User by GOTOWIN
                                            hereunder, including, without limitation, information regarding Orders,
                                            pricing, trading volume, trades, liquidity, etc.
                                        </li>

                                        <li className={classes.filled_item}>
                                            “Digital assets” means digital currency and/or tokens that (as a rule) have
                                            no central issuer and are distributed directly between the owners of such
                                            currency and tokens, designed to work as a medium of exchange that use
                                            strong cryptography to secure Transactions, control the creation of
                                            additional units, and verify the transfer of assets (e.g. BTC, ETH, LTC
                                            etc.).
                                        </li>


                                        <li className={classes.filled_item}>
                                            “Delisting” means the termination of the specific coin/token listing
                                            agreement with the subsequent complete removal of this Digital asset from
                                            the Platform, with the cessation of support for Deposits, Withdrawals and
                                            trading of the coin/token, as well as the possibility of storing these
                                            coins/tokens on the balance of GOTOWIN User’s Accounts.
                                        </li>
                                        <li className={classes.filled_item}>
                                            “Deposit” or “Depositing” means an operation involving a transfer of Funds
                                            to the User's Account.
                                        </li>
                                        <li className={classes.filled_item}>
                                            “Fees” means any rewards, charges and/or commissions paid to GOTOWIN by the
                                            Users, which are established by GOTOWIN.
                                        </li>

                                        <li className={classes.filled_item}>
                                            “Fiat money” means government-issued currency that is backed by the
                                            government and is designated as a legal tender on the legislative level in
                                            the country of issuance.
                                        </li>
                                        <li className={classes.filled_item}>
                                            “Funds” means Fiat money and/or Digital assets, which are placed into the
                                            Account and used during the execution of Transactions.

                                        </li>


                                        <li className={classes.filled_item}>
                                            “Governmental authority” means any national, state, provincial, county,
                                            municipal or local government, foreign or domestic, or the government of any
                                            political subdivision of any of the foregoing, or any entity, authority,
                                            agency, ministry or other similar body exercising executive, legislative,
                                            judicial, regulatory, or administrative authority or functions of or
                                            pertaining to government, including any authority or other entity
                                            established to perform any of such functions.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Law” means all applicable laws, regulations, orders and rulings,
                                            interpretations and statements of policy of any Governmental authority,
                                            authority, agency or body, which in an appropriate case has jurisdiction
                                            over GOTOWIN, the User, or their operations.
                                        </li>


                                        <li className={classes.filled_item}>
                                            “Order” means the User's offer on the Platform to buy (acquire), to sell
                                            (alienate) or to exchange Digital assets on certain conditions.
                                        </li>

                                        <li className={classes.filled_item}>
                                            “Governmental authority” means any national, state, provincial, county,
                                            municipal or local government, foreign or domestic, or the government of any
                                            political subdivision of any of the foregoing, or any entity, authority,
                                            agency, ministry or other similar body exercising executive, legislative,
                                            judicial, regulatory, or administrative authority or functions of or
                                            pertaining to government, including any authority or other entity
                                            established to perform any of such functions.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Law” means all applicable laws, regulations, orders and rulings,
                                            interpretations and statements of policy of any Governmental authority,
                                            authority, agency or body, which in an appropriate case has jurisdiction
                                            over GOTOWIN, the User, or their operations.

                                        </li>

                                        <li className={classes.filled_item}>
                                            “Order” means the User's offer on the Platform to buy (acquire), to sell
                                            (alienate) or to exchange Digital assets on certain conditions.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Person” means an individual or legal entity (partnership, corporation,
                                            limited liability company, joint stock company, etc.).

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Personal data” means information that identifies an individual, such as
                                            name, address, e-mail address, etc.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Platform” means GOTOWIN’s Platform, designated for exchange/trading of
                                            Digital assets, accessible by User via the Website and/or mobile application
                                            and/or via other means, specifically created by GOTOWIN for that purpose (if
                                            applicable).

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Representatives” means a Person’s officers, directors, members, managers,
                                            employees, agents and/or any individuals authorized to act on behalf of the
                                            Person in the appropriate matters by Law, documents of the entity, power of
                                            attorney or similar document.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Services” means all services and any service provided by GOTOWIN.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Third-party provider” means a third-party software, information and/or
                                            technology provider, whose products, information or services might assist
                                            GOTOWIN in providing the Services to the User.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Transaction” means a transaction of Funds entered into (and/or executed,
                                            completed, closed, etc.) through the Platform.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “User” means any Person, who uses the Website, the Services and/or the
                                            Platform, is a holder of the Account and has concluded this User Agreement
                                            with GOTOWIN.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Voucher” means an alphanumeric redeemable code, which can be used to
                                            transfer Digital assets between the Accounts.

                                        </li>
                                        <li className={classes.filled_item}>
                                            “Website” means the website GOTOWIN (GOW)

                                        </li>
                                        <li className={classes.filled_item}>
                                            “GOTOWIN Group” refers to all parties that manage the Platform - the
                                            companies UAB Clear White Technologies (Republic of Lithuania), GOTOWIN
                                            Financial Company s.r.o. (Czech Republic), GOTOWIN Tech Sp. Z.o.o (Republic
                                            of Poland), GOTOWIN Solutions LLP (England and Wales),GOTOWIN Operations
                                            Australia PTY LTD (Australia), GOTOWIN Georgia LLC (Georgia), Clear White
                                            Technologies Limited (Hong Kong), unincorporated organizations and teams
                                            that provide GOTOWIN services and are responsible for such services. Under
                                            these terms, the parties that manage GOTOWIN may change as GOTOWIN’s
                                            business adjusts (including meeting new regulatory demands), in which case,
                                            the changed parties shall perform their obligations under these terms with
                                            the User and provide services to the User, and such change does not affect
                                            the User’s rights and interests under these terms. In such cases, if the
                                            User continues to use GOTOWIN services, it is deemed that the User has
                                            agreed to jointly execute these terms with the newly added GOTOWIN parties
                                            that manage the platform. In case of a dispute, the User shall determine the
                                            entities by which these terms are performed with him/her and the
                                            counterparties of the dispute, depending on the specific services he/she
                                            uses and the particular actions that affect the User’s rights or interests.
                                        </li>
                                        <li className={classes.filled_item}>
                                            “Withdrawal” or “Withdrawing” means an operation involving a transfer of
                                            Funds from the User's Account.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    The headings (of articles/sections) of the User Agreement are for convenience only
                                    and shall not in any way affect the meaning or interpretation of the User Agreement.
                                </li>

                                <li className={classes.letter_item}>
                                    Unless the context otherwise requires, words in the singular shall include the
                                    plural and in the plural shall include the singular.

                                </li>
                                <li className={classes.letter_item}>
                                    Unless the context otherwise requires, a reference to one gender shall include
                                    (shall imply) a reference to the other genders.

                                </li>
                                <li className={classes.letter_item}>
                                    Where the words include(s), including or in particular are used in this User
                                    Agreement, they are deemed to have the words "without limitation" following them.

                                </li>
                                <li className={classes.letter_item}>
                                    Where the context permits, other and otherwise are illustrative and shall not limit
                                    the sense of the words preceding them.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Subject matter of this User Agreement
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The subject matter of this User Agreement is the rendering of the Services allowing
                                    the Users to store and exchange the Digital assets.
                                </li>

                                <li className={classes.letter_item}>
                                    In accordance with this User Agreement, GOTOWIN, in particular, provides the
                                    following Services to the Users:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            access to the Platform to store and exchange the Digital assets;
                                        </li>
                                        <li className={classes.filled_item}>
                                            access to the Website, as well as to the Account;
                                        </li>
                                        <li className={classes.filled_item}>
                                            access to the information necessary to use the Platform and to perform
                                            Transactions;
                                        </li>
                                        <li className={classes.filled_item}>
                                            access to the payment services operator and/or payment service provider
                                            services, necessary to perform Transactions, Deposits and Withdrawals.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    Based on this User Agreement, GOTOWIN may also provide other services, which are
                                    defined in this User
                                    Agreement and/or will be available on the Website or on the Platform.

                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN also reserves the right to choose markets and jurisdictions in which it
                                    operates, and may also
                                    restrict or refuse provision of the Services in some countries at its discretion.

                                </li>
                                <li className={classes.letter_item}>
                                    The User understands and agrees that GOTOWIN is not a party of Transactions (unless
                                    otherwise is stipulated
                                    by this User Agreement related to a certain specific Services) and does not provide
                                    Fiat money financial
                                    services. All operations on the Platform are performed directly between the Users.
                                    The financial services
                                    related to Fiat money are rendered by third-party financial institutions.
                                    Notwithstanding the foregoing, in
                                    order to perform security, AML/CFT and monitoring checks, GOTOWIN may administer the
                                    payment information
                                    required to perform the Deposit, Withdrawal or other Transactions.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Requirements and access to the Service

                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The User can act only on his/her own behalf or (in case of using the corporate
                                    Account) on behalf of an entity/other organization, which he/she represents and
                                    cannot use the Services as an agent, intermediary or broker for another Person,
                                    organization, entity.
                                </li>
                                <li className={classes.letter_item}>
                                    The Services are provided exclusively to Persons of at least 18 years or older.
                                    Using the Services, the User confirms that he/she has reached the age of 18.
                                </li>
                                <li className={classes.letter_item}>
                                    Before accessing and using the Services offered by GOTOWIN the User must assure
                                    himself/herself that the use of the GOTOWIN Services, Platform, Website and mobile
                                    application is allowed in the country of his/her citizenship/residence or the
                                    country from which the User accesses the Services, Platform, Website or mobile
                                    application, as well as check if there are any possible legal limitations and/or
                                    restrictions regarding the access and use of the Services, Platform, Website or
                                    mobile application. It is the User’s sole responsibility to follow all the
                                    applicable Laws and regulations and comply with the restrictions and prohibitions of
                                    his/her country of citizenship/residence and/or country from which the User accesses
                                    GOTOWIN Services, Platform, Website and mobile application.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN takes no liability for the access and use of the Services, Platform, Website
                                    and mobile application by the Person who is the citizen/resident or accesses the
                                    Services, Platform, Website and mobile application from the country in which the
                                    access to and use of GOTOWIN Services, Platform, Website and mobile application is
                                    prohibited by Law or where there are any other limitations and restrictions of the
                                    access and use of the mentioned above.
                                </li>
                                <li className={classes.letter_item}>
                                    By registering the Account, the User represents and warrants that:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            By registering the Account, the User represents and warrants that:
                                        </li>
                                        <li className={classes.filled_item}>
                                            he/she has reached the age of legal capability to enter into and assume
                                            obligations under this User Agreement in accordance with the applicable
                                            laws;
                                        </li>
                                        <li className={classes.filled_item}>
                                            he/she is an individual or legal entity or other organization with full
                                            legal capacity and capability and sufficient authority to enter into this
                                            User Agreement;
                                        </li>
                                        <li className={classes.filled_item}>
                                            he/she was not previously prohibited from or temporarily restricted in using
                                            our Services and/or Platform;
                                        </li>
                                        <li className={classes.filled_item}>
                                            he/she currently does not have another Account registered on the
                                            Platform/Website (multi-accounts);
                                        </li>
                                        <li className={classes.filled_item}>
                                            if the User enters into this User Agreement on behalf of a legal entity,
                                            whose authorized Representative he/she is, the User represents and warrants
                                            that he/she has all necessary rights and authority to enter into this User
                                            Agreement and to assume obligations under this User Agreement on behalf of
                                            such legal entity.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    We draw the User’s attention to the fact that the use of the Services, the Website
                                    and the Platform is
                                    governed by the international compliance requirements and requirements of economic
                                    sanctions. By sending,
                                    receiving, buying, selling, trading or storing Digital assets through the Platform,
                                    the User agrees to
                                    comply with these requirements. The User is not allowed to perform Transactions on
                                    the Platform or use any
                                    Services if:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            The User is in or under control or is a citizen or resident of FATF
                                            blacklisted countries and/or countries subject to the United Nations
                                            Security Council Sanctions List, the European Union or HM Treasury's
                                            financial sanctions regimes, the United States embargo (a "Sanctioned
                                            Country"), or if the User is a Person on EU or HM Treasury's financial
                                            sanctions regime or the U.S. Treasury Department's Specially Designated
                                            Nationals List or the U.S. Commerce Department's Denied Persons List (a
                                            "Sanctioned Person"); or
                                        </li>
                                        <li className={classes.filled_item}>
                                            he/she is a citizen and/or a resident of the United States of America or a
                                            legal entity whose authorized capital is owned by a U.S. citizen and/or
                                            resident; or
                                        </li>
                                        <li className={classes.filled_item}>
                                            he/she is a Person who does not meet any User due diligence/compliance
                                            standards, requests, or requirements of GOTOWIN regarding compliance of the
                                            User and who otherwise belongs to a high-risk group, including, but not
                                            limited to, the factors listed above, including a politically exposed person
                                            (PEP) (a natural person who is or who has been entrusted with prominent
                                            public functions as well as family members or close associates of such
                                            persons).
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    Depending on the User’s citizenship/place of residence, there may be other factors
                                    that will limit the User in the use of all or part of the Services. GOTOWIN reserves
                                    the right to restrict the Services (all or part) for citizens/residents of certain
                                    countries/jurisdictions.
                                </li>
                                <li className={classes.letter_item}>
                                    Compliance with the rules, laws, and regulations of the place of residence (and/or
                                    country of citizenship and/or other laws and regulations applicable to him/her) is
                                    the responsibility of the User himself/herself. The User has to comply with any and
                                    all applicable Laws and regulations related to the use of the Services.
                                </li>
                                <li className={classes.letter_item}>
                                    Information about the User (provided by the User) must not contain misleading,
                                    untruthful, or fraudulent information. Provision of misleading/untruthful/
                                    fraudulent information or submitting false documents (including fraudulent
                                    identification documents) is prohibited. In case if GOTOWIN doubts that the data is
                                    correct, up-to-date, or complete, GOTOWIN is entitled to refuse the User’s access to
                                    the Services (all or part) and/or suspend the User’s Account.
                                </li>
                                <li className={classes.letter_item}>
                                    In case of provision of untruthful/ fraudulent information or submitting false
                                    documents GOTOWIN reserves the right to permanently terminate the User’s Account.
                                </li>
                                <li className={classes.letter_item}>
                                    The User is not entitled to sell, lend, share, or otherwise transfer his/her Account
                                    or any data necessary to access his/her Account to third parties. The User is
                                    responsible for maintaining security and control over all of his/her logins,
                                    passwords, two-factor authentication codes, or any other codes or data the User uses
                                    to access the Service. GOTOWIN is not responsible for any losses incurred by the
                                    User due to unauthorized access to the User’s Account, access of third parties to
                                    the User's password/Account. The User must immediately notify GOTOWIN of the loss of
                                    the password and/or data of Account or illegal access of third parties to Account.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN may require the User to confirm his/her identity to access the Service.
                                    Verification may include verification of the User’s cell phone number, identity
                                    documents, or residence address. GOTOWIN reserves the right to demand additional
                                    real-time/online video verification.
                                </li>
                                <li className={classes.letter_item}>
                                    All the Accounts are initially (will be initially registered) as individual
                                    Accounts. After passing a person identity verification/compliance procedure, the
                                    User can request to upgrade the Account to a corporate Account.
                                </li>
                                <li className={classes.letter_item}>
                                    If the User uses Services on behalf of a legal entity (e.g. company, corporation,
                                    partnership, non-profit, or other legal entity), the User shall previously upgrade
                                    the Account to a corporate level. Upgrading the Account to the corporate level is
                                    possible on request after passing additional KYC/compliance procedure related to the
                                    appropriate legal entity/organization.
                                </li>
                            </ul>

                        </li>
                        <li>
                            Anti-Money Laundering, Countering Financing of Terrorism and Know Your Customer Policy
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    GOTOWIN takes all necessary measures and uses the best standards to comply with all
                                    the applicable Laws and regulations regarding combating Money Laundering and/or
                                    Financing of Terrorism. GOTOWIN will use reasonable efforts to detect and prevent
                                    persons involved in any criminal activity in any jurisdiction from using the
                                    Website.
                                </li>
                                <li className={classes.letter_item}>
                                    In order to avoid and reduce possible risks of involving GOTOWIN in any type of
                                    illegal activity, GOTOWIN is acting in accordance with AML/CFT Policy and in
                                    conformity with an internal Anti-Money Laundering, Countering Financing of
                                    Terrorism, and Know Your Customer procedures (hereinafter - the “AML/CFT
                                    procedures”).
                                </li>
                                <li className={classes.letter_item}>
                                    AML/CFT Policy (procedures) of GOTOWIN, in particular, covers the following matters:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>internal controls;</li>
                                        <li className={classes.filled_item}>compliance officer;</li>
                                        <li className={classes.filled_item}>training of personal;</li>
                                        <li className={classes.filled_item}>verification procedures;</li>
                                        <li className={classes.filled_item}>monitoring, risk assessment, and risk-based
                                            approach;
                                        </li>
                                        <li className={classes.filled_item}>Anti-Money Laundering, Countering Financing
                                            of Terrorism program audit.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    If GOTOWIN has reasons to believe that there is any suspicious activity (any third
                                    party complaints on any
                                    suspicious activity) on the Account or conducted by the User and/or the User wishes
                                    to perform any
                                    suspicious Transaction, GOTOWIN may, at its sole discretion:
                                    refuse provision of the Services;
                                    request additional information confirming the legitimate nature of the Transaction
                                    such as additional KYC verification, proof of funds and/or photo/video verification
                                    etc.;
                                    block the User’s access to his/her Account;
                                    terminate the User Agreement without prior notice to the User.
                                </li>
                                <li className={classes.letter_item}>
                                    By agreeing to this User Agreement, the User confirms that he/she owns Fiat money
                                    and/or Digital assets legally.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN will not provide Services to the Users – citizens/residents/entities of
                                    countries blacklisted by the FATF and other organizations mentioned in paragraph
                                    3.4. of this User Agreement, sanctioned Persons, etc.
                                </li>
                            </ul>
                        </li>
                        <li>
                            User’s Account
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    To create Account and pass verification (KYC), the User has to go through all the
                                    registration procedures and provide to GOTOWIN all necessary information (including
                                    necessary Personal data, information, necessary for verification/KYC), as well as
                                    accept terms and conditions of this User Agreement (including AML/CFT Policy,
                                    Privacy Policy, Fees).
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN may refuse registration and creation of Account at its discretion.
                                </li>
                                <li className={classes.letter_item}>
                                    Unless otherwise expressly agreed between GOTOWIN and the User in writing, each User
                                    may register only one Account and cannot use two or more Accounts (multi-accounts).
                                    Joint deliberate actions of a User with other affiliated Users, utilizing their
                                    Accounts with insider knowledge of such Accounts' actions, strategies, and
                                    intentions in terms of Order placement and execution are considered as operating a
                                    multi-account and it entails the termination (closure) of all these Accounts without
                                    permission (consent) of their owner(s).
                                </li>
                                <li className={classes.letter_item}>
                                    In case if User creates multi-accounts in violation of this clause, GOTOWIN is
                                    entitled to terminate (close) second by the date of creation and all subsequent
                                    User’s multi-account(s).
                                </li>
                                <li className={classes.letter_item}>
                                    As a penalty for the said violation, GOTOWIN has the right to charge a full amount
                                    of Funds from the balances of the User’s second and subsequent multi-account(s).
                                </li>
                                <li className={classes.letter_item}>
                                    By registering the Account, the User agrees to provide the information requested to
                                    confirm the identity. This information is used specifically to detect cases of money
                                    laundering, Financing of Terrorism, fraud, and other financial crimes through the
                                    Website. We will collect, use and transmit this information in accordance with our
                                    Privacy Policy. In addition to the provision of this information and for the
                                    purposes of complying with the world industry standards for data storage, the User
                                    gives us consent and permission to keep records of such information throughout the
                                    term of the Account, as well as for 5 (five) years after the closure of the User’s
                                    Account. The User also gives consent and allows us to send requests, directly or
                                    through third parties, which will be necessary to confirm the User’s identity or
                                    protect the User and/or us from financial and other crimes, such as fraud.
                                </li>
                                <li className={classes.letter_item}>
                                    By providing information necessary in accordance with this section of this User
                                    Agreement, the User confirms that it is accurate and reliable. After registration,
                                    the User must warrant that such information is true, complete, and will be updated
                                    in a timely manner in case of any changes.
                                </li>
                                <li className={classes.letter_item}>
                                    If there is any reasonable doubt that the information the User provides is
                                    incorrect, untruthful, outdated, or incomplete, GOTOWIN is entitled to send the User
                                    a notification requesting corrections, delete the relevant information directly and,
                                    depending on the circumstances, terminate the User’s access to all or part of the
                                    Services.
                                </li>
                                <li className={classes.letter_item}>
                                    The User is solely responsible for any losses or expenses incurred while using
                                    GOTOWIN Services if the User cannot be contacted through the e-mail and/or via the
                                    address provided to GOTOWIN. By entering into this User Agreement, the User
                                    acknowledges and agrees to update all the provided information in case of any
                                    changes.
                                </li>
                                <li className={classes.letter_item}>
                                    By registering the Account, as well as entering into this User Agreement, the User
                                    authorizes GOTOWIN to send, directly or through third parties, requests GOTOWIN
                                    considers necessary to confirm the User’s identity or protect the User and/or
                                    GOTOWIN from fraud or crimes, as well as to take measures GOTOWIN will reasonably
                                    find necessary based on the results of such requests.
                                </li>
                                <li className={classes.letter_item}>
                                    The Account may only be used by the Person, in whose name it was registered. GOTOWIN
                                    reserves the right to temporarily restrict the use, freeze or close the Account if
                                    there are suspicions of the use thereof by a Person, who is not the Person, in whose
                                    name the Account was registered unless otherwise agreed by the Parties in writing.
                                    The User must immediately notify GOTOWIN of the unauthorized use of the User’s
                                    username, password or any other attempts of unauthorized access to the Account if
                                    the User suspects or becomes aware of such unauthorized use.
                                </li>
                                <li className={classes.letter_item}>
                                    The User himself/herself must set the username and password during registration. The
                                    User can also change the password at any time after completing the registration
                                    procedure.
                                </li>
                                <li className={classes.letter_item}>
                                    The User agrees that his/her Account Information is confidential and the User will
                                    not disclose such information to third parties. The User also agrees to be solely
                                    responsible for taking necessary security measures to protect the Account and the
                                    Account Information and consequences of non-compliance with such measures.
                                </li>
                                <li className={classes.letter_item}>
                                    The User must ensure security measures and safety of the password and other Account
                                    details (credentials) to
                                    prevent disclosure thereof to third parties; wherein, the User independently
                                    determines the best procedure
                                    for storing such information and data and also takes measures to prevent illegal or
                                    unauthorized disclosure
                                    and use thereof.
                                </li>
                                <li className={classes.letter_item}>
                                    The User agrees to:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            immediately notify GOTOWIN if he/she becomes aware of any unauthorized use
                                            of the Account Information by any Person, as well as any other breach of the
                                            security rules.
                                        </li>
                                        <li className={classes.filled_item}>
                                            strictly comply with the mechanisms and procedures in force on the Website
                                            concerning the security rules, identity verification, Depositing,
                                            Withdrawal, Transactions of Funds.
                                        </li>
                                        <li className={classes.filled_item}>
                                            perform the appropriate actions to exit the Website at the end of each
                                            visit.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>GOTOWIN is not liable for any losses or damage
                                    arising out of any unauthorized use by the User or any third party (regardless of
                                    whether it was authorized by the User for such use) of the Account using his/her
                                    login credentials (including received as a result of a phishing attack on the User).
                                </li>
                                <li className={classes.letter_item}>GOTOWIN created a sophisticated complex system of
                                    internal security, control, monitoring, in which all actions of employees are logged
                                    and recorded. In addition, the system makes it impossible for our employees to
                                    receive the User’s credentials. The User agrees that unauthorized access only to
                                    his/her Account (not to the wallet of the Platform) should be presumed as a result
                                    of a phishing attack on the User or as a result of the User’s negligence.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Operations on the Account
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>All Funds legally transferred to the Account in
                                    accordance with applicable Law and this User Agreement belong to the User.
                                </li>
                                <li className={classes.letter_item}>All operations on the Account are performed
                                    according to the User’s Orders made in the appropriate form on the Platform through
                                    the User’s Account.
                                </li>
                                <li className={classes.letter_item}>The User agrees that UAB Clear White Technologies
                                    (company number: 305900184, address: 26, J. Basanavičiaus Street, Vilnius, LT-03224
                                    Republic of Lithuania) is responsible for operations with Fiat Money carried out
                                    through our payment processing partners Checkout (Checkout SAS) and Mercuryo
                                    (MONEYTEA LTD). UAB Clear White Technologies is governed by the laws of the Republic
                                    of Lithuania and is registered in accordance with the applicable laws of the
                                    Republic of Lithuania as a virtual currency wallet operator and virtual currency
                                    exchange operator.
                                </li>
                                <li className={classes.letter_item}>All the operations related to securities, including
                                    security tokens (if applicable), instruments or contracts in terms of the security
                                    laws (if applicable) are carried out through the partner - Nova Fintech LLC (company
                                    number: 2567LLC, registered under the laws of Saint Vincent and the Grenadines).
                                </li>
                                <li className={classes.letter_item}>The User is not allowed to perform the operations
                                    related to the securities, including security tokens, instruments or contracts in
                                    terms of the security laws if the country of his/her citizenship/residence or the
                                    country from which the User accesses the Services, Platform, Website or mobile
                                    application is: USA, Canada, China, the UK, EU, Japan.
                                </li>
                                <li className={classes.letter_item}>To deposit Funds to the Account, the User needs to
                                    transfer the Funds according to the details specified by GOTOWIN in the User’s
                                    Account. We may request documentation to verify the source of Funds. In case we do
                                    this, we will not credit and/or accept the User’s further Orders related to the
                                    appropriate Funds until we are provided with the relevant documentation acceptable
                                    for GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>The number of confirmations for the full Depositing
                                    of Digital assets to the Account may differ depending on the type of Digital assets
                                    (the necessary number of confirmations is determined solely by GOTOWIN). GOTOWIN may
                                    preliminarily display on the Account’s balance the Digital assets in process of
                                    Depositing (before obtaining the necessary number of confirmations) but Digital
                                    assets will be unavailable for the further Transactions (including Withdrawal)
                                    before receiving the necessary number of confirmations.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN is entitled to set and change
                                    minimum/maximum limits for Depositing and Withdrawing the Funds at its discretion.
                                    GOTOWIN will not be liable for not making any prior notices to the Users regarding
                                    such changes.
                                </li>
                                <li className={classes.letter_item}>
                                    In such case:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>If the Account was deposited with an amount
                                            less than the minimum for Depositing, the Funds will not be deposited to the
                                            User’s Account on the Platform until the User has deposited an amount equal
                                            to or greater than the minimum Deposit Amount;
                                        </li>
                                        <li className={classes.filled_item}>Amounts that do not meet the specified
                                            minimum Deposit Amount are cumulative and will be credited to the User's
                                            Account balance on the Platform when they are equal to or greater than the
                                            minimum Deposit Amount;
                                        </li>
                                        <li className={classes.filled_item}>If the Account was deposited with an amount
                                            more than the maximum for Depositing, the operation may be investigated and
                                            considered by GOTOWIN – as a result, the Funds shall be deposited or
                                            returned, unless otherwise is required by AML/CFT regulations.
                                        </li>
                                    </ul>

                                </li>
                                <li className={classes.letter_item}>To withdraw the Funds from the Account, the User
                                    needs to pass the appropriate procedure using the appropriate functionality of the
                                    Account. GOTOWIN reserves the right to add additional confirmation procedures
                                    related to Withdrawing the Funds.
                                </li>
                                <li className={classes.letter_item}>The Platform may set some restrictions on the
                                    Withdrawal of the Funds and/or on the Transactions – prohibition to initiate the
                                    Withdrawal the Funds and/or the Transactions earlier than the certain period after
                                    the change of the User’s profile/data in (bound to) the Account, including change or
                                    restoration of the password, as well as change of the authorization method. Also,
                                    the Platform or a financial institution (electronic money issuer, payment service
                                    provider, bank, etc.) may establish restrictions on the Withdrawal of the Funds for
                                    a certain period in case of Depositing the Account using certain methods (including
                                    reported/considered at the discretion of GOTOWIN as bringing AML/CFT or security
                                    risks). Confirmed Withdrawal is irreversible and cannot be cancelled.
                                </li>
                                <li className={classes.letter_item}>GOTOWIN is not entitled to initiate
                                    Withdrawal/Transaction of the Funds from the User’s Account without the relevant
                                    order of the User, except as otherwise stipulated by this User Agreement.
                                </li>
                                <li className={classes.letter_item}>GOTOWIN reserves the right to annul the appropriate
                                    Digital assets on the User’s Account in case if they were delisted from the Platform
                                    if the User has not initiated their Withdrawal to an external wallet (address)
                                    within the period determined by GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>Funds can be transferred with the purpose of making
                                    Deposit, performing Transactions, Withdrawal using the services of third parties
                                    (financial institutions, etc.). In case if User deposits or withdraws the Funds
                                    using third-party services, the initiated operation is performed using the
                                    tools/assets/means used in accordance with the offers (terms and conditions) of the
                                    third party, accepted by the User, the service of which the User is using to perform
                                    the operation, provided that such the terms and conditions are compliant with this
                                    User Agreement.
                                </li>
                                <li className={classes.letter_item}>By initiating operations through the Platform using
                                    the services of a third party, the User grants the right and instructs to transfer
                                    to such third party information, including Personal data, necessary to perform the
                                    initiated operations using the tools/assets/means used in accordance with the offers
                                    (terms and conditions) of the third party, accepted by the User. Responsibility for
                                    operations performed using the services of a third party lies with the User.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN does not bear any responsibility for the
                                    actions of such third party. The User is solely responsible for the payment of all
                                    commissions and fees related to such transfer of the Funds, and also assumes risks
                                    associated with the indication of incorrect payment details.
                                </li>
                                <li className={classes.letter_item}>
                                    Cancellations and refunds
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>Once an Order to exchange Fiat money to
                                            Digital assets has been executed it cannot be cancelled or recalled. All
                                            Orders are final and cannot be refunded once the Digital assets have been
                                            credited to the User’s Account. Once an amount of funds has been sent to the
                                            User’s Account it cannot be recalled or retrieved under any circumstances.
                                        </li>
                                        <li className={classes.filled_item}>If the User makes a Deposit in Fiat money
                                            and then exchanges the Fiat money to Digital assets the transaction of Fiat
                                            money depositing cannot be recalled or retrieved under any circumstances. In
                                            this case, the services are deemed to be duly provided to the User.
                                        </li>
                                        <li className={classes.filled_item}>GOTOWIN's obligation towards the User will
                                            be absolutely discharged upon depositing the Digital assets to his/her
                                            Account and the User shall have no claim or right against GOTOWIN upon such
                                            Transaction.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>

                        <li>
                            Crypto Lending
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>Crypto Lending is an instrument that allows Users to
                                    earn an income by lending Digital assets to GOTOWIN using one of the available
                                    plans. The plans differ by earning rates, lending periods and the minimum/maximum
                                    lending amounts.
                                </li>
                                <li className={classes.letter_item}>After the lending period in the chosen plan ends,
                                    the User’s Funds with the accrued earnings are transferred to the User’s Account.
                                </li>
                                <li className={classes.letter_item}>The income is accrued in the Digital currency in
                                    which the plan was opened.
                                </li>
                                <li className={classes.letter_item}>GOTOWIN never recommends, endorses, advocates or
                                    sponsors any of the Digital assets, cryptocurrencies, pairs or transactions,
                                    investments appearing on, or made through the Platform. The User shall acknowledge
                                    the substantial risks associated with digital currency markets, transactions,
                                    investments (investment/assets management services).
                                </li>
                                <li className={classes.letter_item}>The Crypto Lending section of the Platform may also
                                    contain information about third parties’ proposals (proposals of legal
                                    entities/teams, managing Digital assets and/or legal entities/teams, who created
                                    Digital assets, or providing third-party investments management/assets management
                                    services).
                                </li>
                                <li className={classes.letter_item}>GOTOWIN is not authorized and does not give any
                                    financial, tax, employment, legal or investment advice. Any price information,
                                    quotes, forecasts, return estimates or indications of past performance are for
                                    information purposes only and do not guarantee future performance and do not
                                    constitute an offer to buy or sell or any solicitation of an offer to buy or sell
                                    any Digital asset, cryptocurrency, pair or other assets, nor to enter into any
                                    Transaction with Digital assets, cryptocurrency or to use investment services.
                                </li>
                                <li className={classes.letter_item}>The User agrees that the Platform shall not serve as
                                    the primary basis for any decision to enter into any Transaction or to use third
                                    parties services, including represented in the Crypto Lending section of the
                                    Platform, and GOTOWIN shall not be, or be deemed to be, the User’s financial advisor
                                    or fiduciary. The User hereby acknowledges that any reliance upon any Data or other
                                    content of the Platform shall be at the User’s sole and exclusive risk.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Suspicious operations
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>If the User has discovered suspicious operations or
                                    activities, including, but not limited to, Depositing and/or Withdrawing of the
                                    Funds to/from the User’s Account and/or placing/executing the Orders that are
                                    unknown to the User and/or were not initiated by the User, the User must immediately
                                    notify GOTOWIN thereof and follow our instructions. GOTOWIN reserves the right to
                                    freeze the Funds on the Account until the end of the investigation.
                                </li>
                                <li className={classes.letter_item}>GOTOWIN reserves the right to freeze, cancel or
                                    revoke an operation (including Withdrawal of the Funds and/or the Transaction of the
                                    Funds), which has already been performed, upon the request of the financial
                                    institution involved in settlement (performing) of the Transaction and/or based on
                                    the result (conclusion) of the investigation related to the suspicious operation
                                    report. In such cases, the User must cooperate with GOTOWIN to determine the reasons
                                    and the grounds for such action.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Fees
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>For Services provided on the Website and/or the
                                    Platform (and/or via mobile application) GOTOWIN applies the appropriate Fees. The
                                    User irrevocably authorizes GOTOWIN to charge (debit) applicable Fees from his/her
                                    Account.
                                </li>
                                <li className={classes.letter_item}>If the User does not perform at least one
                                    Transaction, Depositing or Withdrawing the Funds during six (6) calendar months,
                                    such User’s Account will be considered inactive (hereinafter - the “Inactive
                                    Account”).
                                </li>
                                <li className={classes.letter_item}>To all the Inactive Accounts GOTOWIN may apply a
                                    special fee (hereinafter - the “Inactive Account Fee”).
                                </li>
                                <li className={classes.letter_item}>To all the Inactive Accounts GOTOWIN may apply a
                                    GOTOWIN will try to
                                    preliminarily notify the User about applying the Inactive Account Fee but such fee
                                    may be applied by GOTOWIN regardless of sending/reception of the notice from
                                    GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>If the amount of Funds on the User’s Account is less
                                    than the amount of the Inactive Account Fee, GOTOWIN debits the entire balance of
                                    Funds from such Account. If the Inactive Account is empty it can be terminated
                                    (closed) by GOTOWIN without permission (consent) of its owner.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Client's risks
                            <div style={{marginLeft: "-35px" ,marginTop:'20px'}}>
                                10.1 The Client is fully aware of the following:
                            </div>
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The Company and the Seller are not responsible for the Client's lost funds

                                </li>
                                <li className={classes.letter_item}>
                                    The Company and the Seller are not responsible for the purchased crypto assets

                                </li>
                                <li className={classes.letter_item}>
                                    conducting Trading operations with financial instruments is accompanied by
                                    significant
                                    risks. Before using the Company's services, a Client should analyze his/her
                                    financial capabilities;

                                </li>
                                <li className={classes.letter_item}>
                                    Trading operations carried out through the Trading Platform are not transactions
                                    concluded on an official exchange. They are over-the-counter and therefore carry
                                    a higher risk for the
                                    Client than official exchange transactions;
                                </li>
                                <li className={classes.letter_item}>
                                    any information and/or recommendations they receive on the Website from the
                                    Company's representatives or
                                    partners are not a direct offer to make a Trade or financial transaction;
                                </li>
                                <li className={classes.letter_item}>
                                    may suffer financial losses as a result of failures and/or interruptions in the
                                    operation of computer
                                    hardware, software, unstable Internet connection, power outages or other
                                    technical factors;
                                </li>

                                <li className={classes.letter_item}>in market conditions that differ from normal,
                                    the time of processing of his/her
                                    Trading Orders may be increased, as a result of which the Client may incur
                                    losses. In addition, sharp fluctuations in the Quotes
                                    may result in the Client's losses when a Trade is concluded at the Quotation
                                    Price that differs from the
                                    Quotation Price displayed on the Trading Platform.
                                </li>
                            </ul>

                            <div style={{marginLeft: "-30px",marginTop:'20px'}}>
                                10.2. In some countries, use of the Company's services may be restricted or
                                prohibited by law. The Client
                                assumes all risks associated with analysis of the legislation of their country, or their
                                country of
                                residence, for such restrictions or prohibitions, as well as responsibility for
                                using the services of the Company in countries where they are restricted or prohibited.
                            </div>
                            <div style={{marginLeft: "-30px",marginTop:'20px'}}>
                                10.3. The Client acknowledges that the Company does not guarantee receipt by the
                                Client of profit in any amount or the absence of losses in the course of the Client
                                using the services.
                            </div>
                        </li>


                        <li style={{marginTop:'20px'}}>
                            Orders and Transactions
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>The Platform allows the User to create
                                    (initiate)
                                    the Orders to buy or to sell Digital assets. By creating (initiating) the Order
                                    the
                                    User makes an offer to all other Users to conclude a Transaction on the terms
                                    and
                                    conditions specified in the relevant Order. GOTOWIN unilaterally sets the
                                    interface
                                    for creating (initiating) the Orders, determines possible types of the Orders
                                    and
                                    which parameters of the Order shall be determined by the User, who initiates it.
                                </li>
                                <li className={classes.letter_item}>The User agrees that the Order may be executed
                                    both
                                    in full and by parts.
                                </li>
                                <li className={classes.letter_item}>To create (initiate) the Order the User shall
                                    have
                                    enough Funds on the Account to meet (to execute) his/her obligations
                                    corresponding
                                    with the Order (as well as other active Orders opened by the User).
                                </li>
                                <li className={classes.letter_item}>The User recognizes that the Order should only
                                    be
                                    submitted after careful consideration and the User understands and accepts the
                                    consequences of its execution. The User agrees that as soon as the Order is
                                    executed, such Transaction is irreversible and may not be cancelled.
                                    Transactions
                                    will be executed instantly upon the matching of the seller's and the buyer's
                                    Orders
                                    without prior notice to the seller and the buyer and will be considered to have
                                    taken place at the execution date and time.
                                </li>
                                <li className={classes.letter_item}>The User acknowledges and agrees that in case
                                    the
                                    destination address is not specified and/or is incorrectly indicated and/or if
                                    the
                                    reference number (for example, memo) is incorrectly specified; and/or if the
                                    Deposit
                                    is made from the network (Token standard) which is not supported by GOTOWIN;
                                    and/or
                                    if the Withdrawal is made to the network (Token standard) which is not supported
                                    by
                                    the recipient; and/or if the network (Token standard) wrongly selected by the
                                    User;
                                    and/or if the wallet addresses specified with the incorrect memo (Destination
                                    tag);
                                    and/or if the other details of User’s Transactions specified incorrectly, the
                                    User
                                    may lose the Funds or it may cause delay of the Order execution. In such cases,
                                    the
                                    User himself/herself bears responsibility for his/her inaccurate and incorrect
                                    actions and also carries the risk of losing Funds. GOTOWIN in any case will not
                                    compensate for such losses.
                                </li>
                                <li className={classes.letter_item}>GOTOWIN may set a minimal and maximal Order
                                    amount
                                    and/or other restrictions (limits) for the trade Orders (operations).
                                    Restrictions
                                    (limits) may vary for each trading pair (and/or depending on other details).
                                </li>
                                <li className={classes.letter_item}>The User can use Voucher (if applicable on the
                                    Platform) to transfer Digital assets to/from the Account. The Voucher should be
                                    used
                                    before its expiration date set by GOTOWIN. GOTOWIN shall not be liable and shall
                                    not
                                    accept any liability, obligation or responsibility whatsoever for any loss or
                                    damage
                                    arising from the User's use of the Voucher purchased from any third parties or
                                    acquired in any other way. To avoid doubts, the User is solely responsible for
                                    ensuring that the Voucher they acquired is genuine, valid and redeemable.
                                </li>
                                <li className={classes.letter_item}>All operations on the User’s Account, including
                                    those related to making Deposits, Withdrawals, creating/executing the Orders are
                                    displayed in the User’s Account.
                                </li>
                                <li className={classes.letter_item}>The pending Order not canceled by the User, who
                                    has
                                    made it, is valid until executed. Nevertheless, GOTOWIN reserves the right to
                                    set
                                    time limits for the pending Orders.
                                </li>
                            </ul>

                        </li>
                        <li>
                            User’s Personal data
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    Rules for the collection, storage and protection of Personal data received by
                                    GOTOWIN from the Users are
                                    governed by the Privacy Policy. Please refer to this document.
                                </li>
                            </ul>

                        </li>

                        <li>
                            Prevention of the illegal use of the Website and Platform
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    By accessing or using the Platform and/or the Services, the User agrees to
                                    comply
                                    with the requirements of
                                    all Laws, regulations, intellectual property rights or other rights of third
                                    parties
                                    and not to commit
                                    offenses and to be responsible for his/her behavior when using our Platform and
                                    Services. Without limiting
                                    the foregoing, the User agrees not to:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>provide (submit) false, inaccurate or
                                            misleading information (documents);
                                        </li>
                                        <li className={classes.filled_item}>use the Services (the Platform) for
                                            fraud
                                            and/or for any other illegal operations, including using credit and
                                            debit
                                            cards obtained illegally;
                                        </li>
                                        <li className={classes.filled_item}>use the Services (the Platform) to pay,
                                            support or otherwise participate in any illegal gambling, fraud, money
                                            laundering, terrorist activity or other illegal actions (activities);
                                        </li>
                                        <li className={classes.filled_item}>use the Services (the Platform) for
                                            financing operations or activities, for which administrative, criminal
                                            or
                                            civil liability is provided for in accordance with the applicable Laws;
                                        </li>
                                        <li className={classes.filled_item}>use the Services (the Platform) in a way
                                            that may disrupt, adversely affect or prevent other Users from the full
                                            use
                                            of the Services (the Platform) or somehow damage, disable, overload or
                                            disrupt the functioning of the Services (the Platform);
                                        </li>
                                        <li className={classes.filled_item}>use any robots, crawlers, scrapers or
                                            other
                                            automated tools or interfaces that were not provided by GOTOWIN to
                                            access
                                            the Services or to extract data;
                                        </li>
                                        <li className={classes.filled_item}>use or try to use the Account of another
                                            User;
                                        </li>
                                        <li className={classes.filled_item}>use the Services (the Platform)
                                            bypassing
                                            the procedure stipulated by this User Agreement or bypassing/exceeding
                                            the
                                            User’s level of access to the Platform; try to access any area of the
                                            Services, the Website or the Platform, to which the User does not have
                                            access rights;
                                        </li>
                                        <li className={classes.filled_item}>change the software used by the Website
                                            or
                                            the Platform in any way, take any actions aimed at changing the
                                            functionality and operability of the Website, the Platform disabling or
                                            interfering with the operation of the Website;
                                        </li>
                                        <li className={classes.filled_item}>insult in words or perform any other
                                            actions
                                            violating rights and freedoms of other Users and/or third parties;
                                        </li>
                                        <li className={classes.filled_item}>copy and/or disseminate any objects or
                                            intellectual property published on the Website or used by the Platform;
                                            copy
                                            or otherwise use parts of the program (code) of the Website, the
                                            Platform,
                                            as well as design of the Website; use Personal data of third parties
                                            without
                                            their permission;
                                        </li>
                                        <li className={classes.filled_item}>develop any third-party applications
                                            interacting with the Services without our prior written consent.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    In case of detection of the suspicious Transactions from the Users, access to
                                    the
                                    Account may be limited
                                    (suspended) for verification for a term up to 30 Business days.
                                </li>

                                <li className={classes.letter_item}>
                                    The User agrees that in case of a breach of this User Agreement, GOTOWIN is
                                    entitled
                                    to suspend or terminate
                                    the User’s Account.
                                </li>
                            </ul>

                        </li>
                        <li>
                            Warning of the risks and acceptance of risks by the User
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    Trading with, Transactions, holding of Digital assets are related to significant
                                    risks. Prices may fluctuate on a daily basis. Such price fluctuations can
                                    increase
                                    or decrease the value of the User’s assets at any time. Any currency, whether
                                    virtual or not, can undergo significant fluctuations in value, as well as
                                    completely
                                    depreciate. There is an inherent risk of losses as a result of purchase, sale,
                                    or
                                    any trading in the market.
                                </li>
                                <li className={classes.letter_item}>
                                    Trading with Digital assets is also related to special risks that are not
                                    usually
                                    peculiar to Fiat money and/or goods and/or commodity (not virtual/digital)
                                    assets.
                                    Unlike most Fiat money guaranteed by governments, Digital assets are unique
                                    types of
                                    assets supported by technology and trust. There is no central bank that could
                                    issue
                                    more currency or take measures to protect the value of Digital assets in a
                                    crisis.
                                </li>
                                <li className={classes.letter_item}>
                                    Trading with Digital assets is often subject to irrational (or rational)
                                    “bubbles”
                                    or loss of confidence, which can lead to a drop in demand relative to supply.
                                    For
                                    example, confidence in Digital assets may fall due to unexpected changes imposed
                                    by
                                    software developers or other persons, government measures, creation of superior
                                    competing alternative Digital assets, as well as deflationary or inflationary
                                    spirals. Confidence can also be reduced due to technical problems: if the
                                    anonymity
                                    of the system is compromised, if assets are lost or stolen, or if hackers or
                                    governments can prevent any Transactions.
                                </li>
                                <li className={classes.letter_item}>
                                    There may also be additional risks we did not foresee or define in this User
                                    Agreement.
                                </li>
                                <li className={classes.letter_item}>
                                    The User understands that all operations with Digital assets are irreversible
                                    and
                                    that the Funds received as a result of the Transaction can be returned only
                                    under a
                                    separate additional agreement/deal with the appropriate Person. The User cannot
                                    cancel, recall or change any Order with completed or executed status. The User
                                    bears
                                    responsibility for the accurateness and correctness of the Transaction details
                                    (network/network standard/wallet address/memo or destination tag) and carries
                                    the
                                    risk of losing funds, no losses will be compensated by GOTOWIN in such cases.
                                </li>
                                <li className={classes.letter_item}>
                                    The User warrants that he/she is aware of the basic principles of dealing with
                                    Digital assets, as well as of characteristics of Digital assets affecting their
                                    value and he/she is also aware of the relevant risks, in particular, volatility
                                    and
                                    fluctuations in their value. The User must understand that there is a high
                                    probability not to receive a fair and accurate price for the Digital assets when
                                    trading.
                                </li>
                                <li className={classes.letter_item}>
                                    By accepting this User Agreement, the User acknowledges and accepts any risks
                                    associated with the Transactions, agrees to comply with this User Agreement,
                                    recognizes and accepts the mentioned and any other risks.
                                </li>
                                <li className={classes.letter_item}>
                                    The User declares to be aware of and understand and agree that GOTOWIN can’t
                                    directly or indirectly be liable for, and/or have any obligations with respect
                                    to or
                                    in any other way guarantee the performance or payment of any Transaction
                                    concluded
                                    by the User on the Platform and using blockchain and/or third parties’
                                    services/technology (in part of functionality, proper performance, reliability,
                                    etc.
                                    of such blockchain/technology), and neither GOTOWIN nor Third-party provider is
                                    liable to the User or any other Person for such Transactions performed through
                                    the
                                    Platform.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWINT is not a broker, an agent or a consultant and does not have fiduciary
                                    relationships or obligations to the User.
                                </li>
                            </ul>
                        </li>

                        <li>
                            Intellectual property and limited use
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    GOTOWIN is the sole owner (except to the extent owned by third-party licensors)
                                    of
                                    all rights, titles and interests in and to the Platform, the Website, the Data,
                                    and
                                    each component thereof, trademarks, all custom modifications, work products,
                                    deliverables, or other materials created by or on behalf of GOTOWIN, and all
                                    intellectual property rights with respect thereto, and all rights not explicitly
                                    granted in this User Agreement are reserved by GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>
                                    The User shall not obtain any rights in or to the intellectual property rights,
                                    except for those limited rights licensed to him/her by GOTOWIN. The User shall
                                    take
                                    all steps necessary to maintain the confidentiality of all documents and
                                    material
                                    provided by GOTOWIN or any of its Third-party providers with respect to the
                                    Platform
                                    and each component thereof.
                                </li>
                                <li className={classes.letter_item}>
                                    The User shall not:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            alter, maintain, enhance or otherwise modify the Platform;
                                        </li>
                                        <li className={classes.filled_item}>
                                            disassemble, decompile, reverse-engineer, copy, bug fix, correct,
                                            update,
                                            transfer, broadcast or create derivative based on the Platform nor
                                            otherwise
                                            take express action to develop the equivalent of the Platform (similar
                                            Platform).
                                        </li>
                                    </ul>
                                    <li className={classes.letter_item}>
                                        Subject to the User’s compliance with the terms and conditions of this User
                                        Agreement, AML/CFT Policy and procedures, Privacy policy, Fees the User is
                                        granted a limited, revocable, non-exclusive, non-transferable license to
                                        access
                                        and use the Platform, the Website (the term may be set/limited/altered by
                                        GOTOWIN) for purposes set out in, and in a manner consistent with, this User
                                        Agreement, AML/CFT Policy and procedures, Privacy Policy.
                                    </li>
                                    <li className={classes.letter_item}>
                                        The User acknowledges and agrees that GOTOWIN shall use information
                                        regarding
                                        the User’s Personal data (information) in accordance with its Privacy
                                        policy, as
                                        such policy may be amended from time to time by GOTOWIN.
                                    </li>
                                </li>
                            </ul>
                        </li>

                        <li>
                            Use of the Services, the Website, security, information
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The User acknowledges and agrees that GOTOWIN shall have sole discretion and
                                    absolute control over, and the right to modify at any time, the Website and the
                                    Platform, as well as the exclusive right to make any changes to their
                                    functionality,
                                    configuration, appearance, and content.
                                </li>
                                <li className={classes.letter_item}>
                                    We do not guarantee that the Website, the Services, and/or the Platform will be
                                    available all the time for use without the absence of any delays, failures,
                                    errors,
                                    or loss of transmitted information. We do not guarantee that the Services (the
                                    Platform) will be available via the mobile application.
                                </li>
                                <li className={classes.letter_item}>
                                    We will make reasonable efforts to ensure that the Users can access the Website,
                                    the
                                    Services, and/or the Platform in accordance with this User Agreement. However,
                                    we
                                    may suspend the use of the Website and/or the Platform for maintenance and will
                                    use
                                    reasonable efforts to notify the Users. The User acknowledges that this (prior
                                    noticing) may not be possible in an emergency, and the User assumes risks
                                    associated
                                    with the fact that he/she cannot always use the Website and/or the Platform or
                                    perform urgent Transactions using his/her Account.
                                </li>
                                <li className={classes.letter_item}>
                                    Any use of the Internet may be subject to a virus attack and/or a communication
                                    failure. GOTOWIN accepts no responsibility for any damage or interruption caused
                                    by
                                    computer viruses, spyware, Trojan horses, worms, or other malware that can
                                    affect
                                    the User’s system, computer, or other equipment, or any phishing, spoofing, or
                                    other
                                    virus attacks. GOTOWIN recommends that the User always uses reliable and
                                    affordable
                                    software to scan and prevent viruses. The User should also be careful when
                                    viewing
                                    text messages and e-mails that allegedly come from GOTOWIN, as SMS and e-mails
                                    are
                                    also vulnerable to phishing and spoofing, as well as some viruses.
                                    It is advisable that the User enters his/her Account only through the Website
                                    (to
                                    avoid fraud/phishing websites the User must carefully check the address of the
                                    Platform each time he/she uses the Services, the Platform) and avoid messages
                                    from
                                    unverified senders offering him/her entry options.
                                </li>

                                <li className={classes.letter_item}>
                                    Despite the fact that we intend to provide accurate and timely information on
                                    the
                                    Website, the Website (including, without limitation, content thereof) may not
                                    always
                                    be completely accurate, complete or current and may also contain technical
                                    inaccuracies or typos.
                                </li>
                                <li className={classes.letter_item}>
                                    In an effort to continue to provide the User with the most complete and accurate
                                    information possible, information may, within limits permitted by the applicable
                                    Laws, be amended or updated without a prior notice, including, without
                                    limitation,
                                    in relation to our policies, products, and the Services. Accordingly, the User
                                    must
                                    verify all information before relying on it (the User must get acknowledged with
                                    the
                                    up-to-date version of User Agreement before each using the Services/the
                                    Platform)
                                    and all decisions based on the information posted on the Website are the User’s
                                    sole
                                    responsibility (we are not responsible for them).
                                </li>
                                <li className={classes.letter_item}>
                                    If the User uploads any content to the Website, including, without limitation,
                                    any
                                    text, picture or other material, the User represents and warrants that such
                                    content
                                    will not consist of: false, misleading or illegally obtained information;
                                    copyrighted material the User is not entitled to publicly post; obscene,
                                    abusive,
                                    illegal content or any other content that can damage or jeopardize GOTOWIN’s
                                    reputation; or anything prohibited by any applicable Law.
                                </li>
                                <li className={classes.letter_item}>
                                    Without exempting the User from the above liability, GOTOWIN may, at its sole
                                    discretion, delete any content violating the above requirements, in addition to
                                    any
                                    further actions GOTOWIN may deem necessary GOTOWIN is not obligated to check any
                                    such content and assumes no responsibility in this regard.
                                </li>
                                <li className={classes.letter_item}>
                                    The User acknowledges and agrees to the fact that GOTOWIN cannot and does not
                                    confirm or guarantee the authenticity, identity or reliability of any content
                                    and
                                    information posted by or attributed to any User of the Website; thus, the User
                                    relies on any content of the other Users solely at his/her discretion and risk.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Restriction, suspension or termination
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The User can terminate this User Agreement with GOTOWIN and close his/her
                                    Account at
                                    any time after having settled all incomplete Transactions (the User participates
                                    in), having paid applicable Fees and executed all other obligations, which
                                    either
                                    directly or indirectly arose from his/her use of the Services (the Platform).
                                </li>
                                <li className={classes.letter_item}>
                                    Notwithstanding any other provision of this User Agreement, the User confirms
                                    that
                                    GOTOWIN is entitled to restrict the User’s access, set limits on the User and/or
                                    temporarily suspend the Account and/or the User’s access to the Website, the
                                    Platform, the Services (including the ability to place the Orders and perform
                                    the
                                    Transactions), in whole or in part, or to refuse to enter into, to participate
                                    in
                                    any or all Transactions, to block the Funds on the Account if in GOTOWIN's sole
                                    discretion any of the following circumstances occur or GOTOWIN considers such
                                    circumstance to be likely to occur or if any of the following circumstances is
                                    possible in the opinion of GOTOWIN:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            complete or partial failure of the Website and/or the Platform,
                                            including
                                            failure of any of the technologies constituting the Website and/or the
                                            Platform or any communication channels within the Website and/or the
                                            Platform or between the Website and/or the Platform and any other Person
                                            or
                                            counterparty or any other circumstance when GOTOWIN considers, at its
                                            discretion, that GOTOWIN is not able to provide access to the Website
                                            and/or
                                            to the Platform;
                                        </li>
                                        <li className={classes.filled_item}>
                                            a breach in the security of the Website and/or the Platform;
                                        </li>
                                        <li className={classes.filled_item}>
                                            when there is any suspicion of a breach or an actual breach of this User
                                            Agreement, AML/CFT Policy, Privacy Policy, or any applicable Laws and
                                            regulations;
                                        </li>
                                        <li className={classes.filled_item}>
                                            in order to comply with Law (including, but not limited to, a ban or
                                            restriction of any Digital asset);
                                        </li>
                                        <li className={classes.filled_item}>
                                            detection of unusual and/or suspicious activity on the Account;
                                            detection of
                                            unauthorized access to the Account;
                                        </li>
                                        <li className={classes.filled_item}>
                                            in connection with the procedural actions of Governmental authorities in
                                            relation to a specific Account and/or the User, criminal investigation,
                                            or
                                            any legal process; by a court decision or decision of a Governmental
                                            authority; if the User’s Account and activities related to it have
                                            become
                                            the subject of judicial and administrative proceedings;
                                        </li>
                                        <li className={classes.filled_item}>
                                            in connection with market conditions or conditions in relation to a
                                            particular Digital asset or pair, which justifies this as a necessary
                                            measure in the opinion of GOTOWIN.
                                        </li>

                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    Any action taken by GOTOWIN in accordance with this section will continue for a
                                    term
                                    determined at the discretion of GOTOWIN. The User agrees that any evasion of or
                                    any
                                    attempt to evade access restrictions, limits, or temporary suspension in
                                    accordance
                                    with this section of this User Agreement constitutes a material breach of this
                                    User
                                    Agreement; and taking any action in accordance with this section is a right and
                                    not
                                    an obligation of GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>
                                    In addition, the User acknowledges and agrees that in case of any of the
                                    circumstances listed in this section, GOTOWIN may cancel the Transaction the
                                    User
                                    has previously initiated or performed using the Platform.
                                </li>
                                <li className={classes.letter_item}>
                                    The User agrees that GOTOWIN is entitled to immediately suspend the Account,
                                    block
                                    any Funds on the Account, to suspend the access to the Services (to the
                                    Platform)
                                    and/or terminate the Account, in the following cases:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            GOTOWIN has detected on the Account activity related to money
                                            laundering,
                                            financing of terrorism; breaking by the User the applicable Anti-Money
                                            Laundering, Countering Financing of Terrorism Laws and regulations;
                                        </li>
                                        <li className={classes.filled_item}>
                                            the User’s Account and activities related to it have become the subject
                                            of
                                            criminal investigation;
                                        </li>
                                        <li className={classes.filled_item}>
                                            using the Account by UN, EU, or USA sanctioned person;
                                        </li>
                                        <li className={classes.filled_item}>
                                            when there is an actual breach by the User of this User Agreement,
                                            Privacy
                                            Policy, or any applicable Laws and regulations;
                                        </li>
                                        <li className={classes.filled_item}>
                                            GOTOWIN is required to do so by a court order or an order of an
                                            authorized
                                            Governmental authority.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    In case of termination of this User Agreement due to fraudulent activity,
                                    breaking
                                    Anti-Money Laundering,
                                    Countering Financing of Terrorism Laws and regulations, a material breach by the
                                    User of this User Agreement
                                    (including, but not limited to using the Services by Sanctioned Person) or
                                    within
                                    the investigation of
                                    fraudulent Transactions and combating money laundering, GOTOWIN is entitled to
                                    cancel the data of the User’s
                                    Account and/or to impose (and to charge) a fine in the amount of the entire
                                    balance
                                    of Funds on the User’s
                                    Account.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Representations and warranties
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    On the execution date of this User Agreement and on the date of each using of
                                    the
                                    Services/the Website
                                    (Depositing/Withdrawing any Funds, placing each Order, making/initiating each
                                    Transaction), the User
                                    represents and warrants to GOTOWIN and agree in favor of GOTOWIN, its affiliates
                                    and
                                    their Representatives
                                    that:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            The User has reviewed all the documents (including those published on
                                            the
                                            Website) provided to the User in connection with the Services and the
                                            Platform, and the User understands and agrees that using the Services
                                            provided by GOTOWIN will be governed by these documents as amended from
                                            time
                                            to time. The User must not apply for registration on the Platform in
                                            order
                                            to create the Account or deposit the Funds or place the Order,
                                            perform/initiate Transaction, use other Services available via the
                                            Website
                                            if the User is not aware of how the Services or the Platform operates or
                                            of
                                            risks related to the Services or of the nature of the risks associated
                                            with
                                            it.
                                        </li>
                                        <li className={classes.filled_item}>
                                            The execution of this User Agreement and performance of all obligations
                                            contemplated under this User Agreement have been duly authorized by all
                                            necessary action by the User; and each Person executing this User
                                            Agreement
                                            (or authorized to accept its terms electronically or otherwise) and
                                            entering
                                            into each Transaction (or using other Services) hereunder on the User’s
                                            behalf has been duly authorized to do so. All information provided by
                                            the
                                            User to GOTOWIN, including, but not limited to, the information provided
                                            by
                                            the User in his/her Account, is reliable, accurate, and not misleading.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    The User shall guarantee that:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            The User is able to make or take delivery of the full amount of the
                                            Funds
                                            required to be delivered as a result of each Transaction the User
                                            entered
                                            in;
                                        </li>
                                        <li className={classes.filled_item}>
                                            Execution by the User of this User Agreement and entering into each
                                            Transaction (and/or using other Services), as well as the User’s
                                            performance
                                            of his/her obligations under this User Agreement and his/her use of the
                                            Services (the Platform) will not violate any applicable Law;
                                        </li>
                                        <li className={classes.filled_item}>
                                            The User has received and will comply with the terms and conditions of
                                            all
                                            licenses, consents, registrations, permits, authorizations, exceptions,
                                            and
                                            memberships necessary to use the Services and the Platform under this
                                            User
                                            Agreement, including Depositing/Withdrawing the Funds,
                                            entering/executing
                                            Transactions on the Platform;
                                        </li>
                                        <li className={classes.filled_item}>
                                            The User has sufficient expertise, experience, and knowledge necessary
                                            to
                                            make informed decisions regarding using the Services/the Platform, and
                                            the
                                            User will not rely on any message or statement (written or oral) of User
                                            represents and warrants to GOTOWIN an as investment advice or
                                            recommendations to enter into any Transaction; the User will be prudent
                                            and
                                            careful in determining whether to enter into Transaction or otherwise
                                            perform activities on the Platform (use the Services);
                                        </li>
                                        <li className={classes.filled_item}>
                                            Person accessing the Platform acts as a principal, and not on behalf of
                                            any
                                            third party unless this Person is a Representative of the User.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    User represents and warrants to GOTOWIN an represents and warrants that it shall
                                    provide the Services and
                                    shall carry out its obligations with reasonable care and skill.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Limitation of the liability and no advice
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    To the maximal extent permitted under the applicable Law, the Services, the
                                    Platform, the Website, the mobile application, materials, and any product or
                                    other
                                    item provided by or on behalf of User represents and warrants to GOTOWIN an are
                                    provided on an “as is” and “as available” basis and User represents and warrants
                                    to
                                    GOTOWIN an expressly disclaims, and the User waives, any and all other
                                    warranties of
                                    any kind, whether expressed or implied, including, without limitation, implied
                                    warranties of functionality, fitness for a particular purpose or
                                    non-infringement or
                                    warranties arising from the course of performance, course of dealing or use of
                                    the
                                    Services, the Platform, the Website, the mobile application.
                                </li>
                                <li className={classes.letter_item}>
                                    Without limiting the foregoing, User represents and warrants to GOTOWIN an does
                                    not
                                    represent or warrant that the Services, the Platform, the Website, the mobile
                                    application, or materials are accurate, complete, reliable, up-to-date,
                                    error-free,
                                    or free of viruses or other harmful components.
                                </li>
                                <li className={classes.letter_item}>
                                    User represents and warrants to GOTOWIN an does not guarantee that any Order
                                    will be
                                    executed, accepted, recorded or remain open. Except for the express statements
                                    set
                                    forth in this User Agreement, the User hereby acknowledges and agrees that
                                    he/she
                                    has not relied upon any other statement or understanding, whether written or
                                    oral,
                                    with respect to his/her use and access of the Services, the Platform, the
                                    Website,
                                    the mobile application.
                                </li>
                                <li className={classes.letter_item}>
                                    Without limiting the foregoing, the User hereby understands and agrees that User
                                    represents and warrants to GOTOWIN an will not be liable for any losses or
                                    damages
                                    arising out of or relating to:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            any inaccuracy, defect or omission of Digital assets price Data;
                                        </li>
                                        <li className={classes.filled_item}>
                                            any error or delay in the transmission of such Data, interruption in
                                            transmitting/obtaining any such Data;
                                        </li>
                                        <li className={classes.filled_item}>
                                            any damages incurred by another User’s actions, omissions or violation
                                            of
                                            this User Agreement.
                                        </li>
                                    </ul>
                                </li>

                                <li className={classes.letter_item}>
                                    The disclaimer of implied warranties contained herein may not apply if and to
                                    the
                                    extent it is prohibited by the applicable Law.
                                </li>
                                <li className={classes.letter_item}>
                                    To the maximum extent permitted by the applicable Law, in no event will User
                                    represents and warrants to GOTOWIN an’s affiliates, User represents and warrants
                                    to
                                    GOTOWIN an’s and its affiliates’ shareholders, owners, members, directors,
                                    officers,
                                    employees, attorneys, agents, representatives, suppliers, or contractors be
                                    liable
                                    for any incidental, indirect, consequential or similar damages or liabilities
                                    whatsoever (including, without limitation, damages for loss of data,
                                    information,
                                    revenue, profits or other benefits) arising out of or in connection with the
                                    Services, the Platform, the Website, the mobile application, any performance or
                                    non-performance of the Services, the Platform, the Website, the mobile
                                    application,
                                    or any other product or other item provided by or on behalf of User represents
                                    and
                                    warrants to GOTOWIN an.
                                </li>
                                <li className={classes.letter_item}>
                                    Notwithstanding the foregoing, in no event will the liability of User represents
                                    and
                                    warrants to GOTOWIN an, its affiliates and their shareholders, owners, members,
                                    directors, officers, employees, attorneys, agents, representatives, suppliers,
                                    or
                                    contractors arising out of or in connection with using the Services, the
                                    Platform,
                                    the Website, the mobile application, any performance or non-performance of the
                                    Services, the Platform, the Website, the mobile application, or any other
                                    product or
                                    other item provided by or on behalf of User represents and warrants to GOTOWIN
                                    an or
                                    its affiliates exceed the amount of Fees paid by you to User represents and
                                    warrants
                                    to GOTOWIN an under this User Agreement in the six-month period immediately
                                    preceding the event giving rise to the claim for liability.
                                </li>
                                <li className={classes.letter_item}>
                                    Without prejudice to the foregoing, User represents and warrants to GOTOWIN an
                                    makes
                                    no representations or warranties regarding the timeliness, accuracy or
                                    completeness
                                    of any Data or other information on the Platform or results the User receives
                                    when
                                    accessing or using the Platform. User represents and warrants to GOTOWIN an does
                                    not
                                    bear any responsibility for claims related to any software, technology or
                                    equipment,
                                    the Platform, existing technology, Data or any other information, materials,
                                    Digital
                                    assets or the fact that the Platform meets the User’s requirements or that
                                    access to
                                    it must be continuous, timely, safe, complete, accurate, free from errors and
                                    defects.
                                </li>
                                <li className={classes.letter_item}>
                                    The User acknowledges that the software and equipment he/she uses may not
                                    support
                                    certain functions of the Platform.
                                </li>
                                <li className={classes.letter_item}>
                                    Neither User represents and warrants to GOTOWIN an nor any third party providing
                                    information on the Website, the Platform recommends, endorses, protects or acts
                                    as a
                                    guarantor of any Digital asset, trading pair or Transaction that is present or
                                    performed on the Platform. The User acknowledges significant risks associated
                                    with
                                    the Digital assets markets and trading Transactions. User represents and
                                    warrants to
                                    GOTOWIN an does not provide financial, tax, legal, investment or other
                                    recommendations. Any information on prices, quotes, forecasts, profitability
                                    estimates or historical indicators is intended for informational purposes only
                                    and
                                    does not guarantee future results and is not an offer to buy or sell, or a
                                    recommendation to buy or sell any Digital asset or to perform any Transaction.
                                    The
                                    User agrees that the Platform is not and cannot be considered the main reason
                                    for
                                    his/her decision to perform any Transaction, and User represents and warrants to
                                    GOTOWIN an is not and cannot be considered the User’s financial consultant or
                                    fiduciary trustee. By entering into this User Agreement, the User acknowledges
                                    that
                                    any use of the Data or other content of the Platform is solely at the User’s
                                    responsibility.
                                </li>
                                <li className={classes.letter_item}>
                                    The User understands and agrees that, provided that we have taken reasonable
                                    precautions, provided our Services properly and performed all of our obligations
                                    under this User Agreement, User represents and warrants to GOTOWIN an will be
                                    exempted from the liability for any direct or indirect losses, any lost profit,
                                    data, ability to use the Platform, operational downtime, loss of business
                                    reputation, costs on the replacement of the Services or downtime incurred to the
                                    User, the User’s affiliates and any other Person as a result of execution of or
                                    in
                                    connection with this User Agreement, even if the User, the User’s affiliate or
                                    any
                                    other Person had not previously been notified of the possibility of such losses,
                                    etc.
                                </li>
                                <li className={classes.letter_item}>
                                    Nothing in this User Agreement shall and can be construed as excluding or
                                    limiting
                                    the liability of any of
                                    the parties for:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            Fraud or intentional misrepresentation;
                                        </li>
                                        <li className={classes.filled_item}>
                                            Other actions, the liability for which cannot be excluded or limited by
                                            virtue of the Law.
                                        </li>
                                    </ul>
                                </li>


                                <li className={classes.letter_item}>
                                    The Platform may contain links to third-party websites and direct the Users to
                                    other
                                    websites. Such websites are not under the control of the User. GOTOWIN does not
                                    represent or warrant the approval of these websites. User represents and
                                    warrants to
                                    GOTOWIN that they do not provide any warranties or representations and are not
                                    responsible for the accuracy, content, terms of use, privacy policy, legality,
                                    reliability, perception, relevance, compliance with moral standards, and other
                                    aspects related to such websites.
                                </li>
                                <li className={classes.letter_item}>
                                    External websites have separate and independent terms and conditions of use and
                                    related policies. We advise Users to familiarize themselves with the rules,
                                    policies, terms, and conditions of each website they visit. The User is
                                    responsible
                                    for taking precautions to ensure that everything they choose to use is free from
                                    viruses, worms, Trojan horses, and other malware.
                                </li>
                                <li className={classes.letter_item}>
                                    By performing an operation, the User agrees to and independently bears all risks
                                    of
                                    Transactions. No claims regarding the cancellation of operations can be filed
                                    against User represents and warrants to GOTOWIN. Unless otherwise prescribed by
                                    this
                                    User Agreement for special cases, User represents and warrants to GOTOWIN does
                                    not
                                    accept or process applications for the return and/or cancellation of operations
                                    from
                                    anyone.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Indemnification

                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The User agrees to defend, indemnify and hold harmless User represents and
                                    warrants
                                    to GOTOWIN an, its
                                    affiliates and relevant employees, officers, directors and shareholders against
                                    all
                                    and any losses from
                                    property damage as a result of personal injury, death or other injuries
                                    resulting
                                    from negligence or
                                    misbehavior of the User or any Person, for whom the User is legally liable.
                                </li>
                                <li className={classes.letter_item}>
                                    The User agrees to defend, indemnify and hold harmless User represents and
                                    warrants
                                    to GOTOWIN an against
                                    any losses, damage, expenses, claims, litigation, fine, including court expenses
                                    incurred by User represents
                                    and warrants to GOTOWIN an, which are a direct or indirect consequence of:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>

                                            the User’s misuse of the Website/the Services/the Platform or the User’s
                                            use
                                            of the Website/the Services/the
                                            Platform;
                                        </li>
                                        <li className={classes.filled_item}>
                                            the User’s inability to fully and timely perform any of his/her
                                            obligations
                                            under this User Agreement,
                                            including the User’s failure to perform obligations related to any
                                            Transaction or Order;
                                        </li>
                                        <li className={classes.filled_item}>
                                            any of the User’s representations or warranties provided in accordance
                                            with
                                            this User Agreement is or has
                                            become false or incorrect;
                                        </li>
                                        <li className={classes.filled_item}>
                                            any violation by the User of any Law, rule, regulation or third party
                                            rights;
                                        </li>
                                        <li className={classes.filled_item}>
                                            using the Platform, the User’s Account by any other Person (except the
                                            authorized Representative of a legal
                                            entity), using the User’s password or any other User’s Account data
                                            (credentials) regardless of whether it
                                            was done with or without the User’s knowledge.
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li>
                            Applicable Law and dispute resolution
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    This User Agreement is governed by and construed in accordance with the laws of
                                    England and Wales.
                                </li>
                                <li className={classes.letter_item}>
                                    In case of disputes on the issues specified in this User Agreement, the Parties
                                    shall take all possible measures to resolve them through negotiations.
                                </li>
                                <li className={classes.letter_item}>
                                    If the Parties fail to reach an agreement through negotiation, any dispute
                                    arising
                                    out of or in connection with this User Agreement shall be considered and finally
                                    resolved in accordance with the Rules of the London Court of International
                                    Arbitration (LCIA). The place of arbitration shall be London, United Kingdom.
                                    The
                                    language of the arbitration shall be English. Such a decision shall be final and
                                    binding on both parties and may be used or prepared for enforcement in any court
                                    having jurisdiction; if necessary, an application may be submitted to the
                                    appropriate competent court.
                                </li>
                                <li className={classes.letter_item}>
                                    The Parties agree that information on the arbitration, including, but not
                                    limited
                                    to, information on the content of any arbitral award, is confidential and shall
                                    not
                                    be disclosed to third parties without the written consent of the Parties unless
                                    otherwise stipulated by the Law.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Confidentiality and disclosure of information
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The User agrees not to disclose any Confidential information relating to User
                                    represents and warrants to GOTOWIN an or its affiliates received in connection
                                    with
                                    the conclusion of this User Agreement or any investigation conducted in
                                    connection
                                    with this User Agreement and, if applicable, the User will also ensure the
                                    performance of this obligation by his/her officials, employees, and consultants,
                                    to
                                    whom such information has been disclosed. Obligations stipulated by this section
                                    do
                                    not apply to Confidential information which:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            was lawfully in the User’s possession prior to entering this User
                                            Agreement;
                                        </li>
                                        <li className={classes.filled_item}>
                                            voluntarily disclosed to the User by third parties if such Persons do
                                            not
                                            breach any obligations not to disclose such information;
                                        </li>
                                        <li className={classes.filled_item}>
                                            voluntarily released by User represents and warrants to GOTOWIN an;
                                        </li>
                                        <li className={classes.filled_item}>
                                            is already known to the public.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    User represents and warrants to GOTOWIN an will not share or otherwise transmit
                                    information about the Users and/or potential users of the Website and/or the
                                    Platform, with the exception of its Representatives, the appropriate employees
                                    (in
                                    accordance to the applicable personal data protection Laws and regulations) in
                                    the
                                    ordinary course of User represents and warrants to GOTOWIN an’s activities, as
                                    well
                                    as for the purposes of implementation of User represents and warrants to GOTOWIN
                                    an’s banking or credit relations.
                                </li>
                                <li className={classes.letter_item}>
                                    User represents and warrants to GOTOWIN an may also transfer the User’s Personal
                                    data to the law enforcement agencies, data protection authorities, government
                                    officials, Governmental authorities if:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            this is required by Governmental authorities on the basis of a subpoena,
                                            court order, or decision, or other legal procedure;
                                        </li>
                                        <li className={classes.filled_item}>
                                            User represents and warrants to GOTOWIN an believes that such disclosure
                                            is
                                            required to prevent losses or financial loss;
                                        </li>
                                        <li className={classes.filled_item}>
                                            disclosure is necessary to report alleged illegal activity;
                                        </li>
                                        <li className={classes.filled_item}>
                                            disclosure is necessary to investigate breaches of this User Agreement
                                            or
                                            any applicable Law.
                                        </li>
                                        <li className={classes.filled_item}>
                                            this is required by Law;
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    Privacy Policy has the priority other than this section of the User Agreement.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Notices
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    Except as expressly stipulated by this User Agreement and the applicable Law,
                                    all
                                    notifications, messages, and documents related to fulfillment by the Parties of
                                    the
                                    obligations arising out of this User Agreement shall be sent and considered
                                    received
                                    by the Parties if they are e-mailed from the authorized address of one of the
                                    Parties to the authorized address of the other Party. Authorized addresses are:
                                </li>
                                <li className={classes.letter_item}>
                                    for the User: e-mail address or postal address, specified in the User’s Account
                                    (personal cabinet);
                                </li>
                                <li className={classes.letter_item}>
                                    for User represents and warrants to GOTOWIN an: the appropriate e-mail address,
                                    specified on the Website or postal address of the company, managing the Website,
                                    specified on the Website.
                                </li>
                                <li className={classes.letter_item}>
                                    If, in accordance with the above provision, any notification, request or other
                                    messages to User represents and warrants to GOTOWIN an was delivered or made
                                    after 5
                                    p.m. (UTC) and/or not on Business day such notification, request or other
                                    messages
                                    shall be deemed delivered or received at 9 a.m. (UTC) on the next Business day.
                                </li>
                                <li className={classes.letter_item}>
                                    User represents and warrants to GOTOWIN an may provide the User through the
                                    Platform
                                    with information, notifications, and confirmations regarding the Orders, the
                                    Transactions, the Services, the Platform, and the use thereof. Such information,
                                    notifications, and confirmations shall be deemed received by the User as soon as
                                    they become available to the User through the Platform.
                                </li>
                                <li className={classes.letter_item}>
                                    User represents and warrants to GOTOWIN an social media (Facebook, Telegram,
                                    Twitter, Medium, etc.), links to which are indicated on the Website home page
                                    and in
                                    the footer, are GOTOWIN official sources of communication.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Entire agreement, amendments and severability
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    This User Agreement and any other documents referred to in it constitute an
                                    entire
                                    agreement between the Parties and supersede any previous agreements, stipulated
                                    terms and conditions, or agreements between them relating to the subject matter
                                    of
                                    this User Agreement. Each of the Parties acknowledges that when concluding this
                                    User
                                    Agreement, it does not rely on any statements, representations, or warranties
                                    (“representations”) of any Person (regardless of whether it is a Party of this
                                    User
                                    Agreement), except as expressly specified in this User Agreement or other
                                    documents
                                    specified in this User Agreement.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN is entitled to unilaterally amend the terms and conditions of this User
                                    Agreement, Privacy Policy, AML/CFT Policy and procedures, as well as Fees and
                                    limits. Such amendments take effect upon the expiry of three (3) days from the
                                    date
                                    of posting a new version of the relevant documents on the Website.
                                </li>
                                <li className={classes.letter_item}>
                                    With each subsequent visit to the Website before using the User’s Account, the
                                    User
                                    shall familiarize himself/herself with a new version of the above documents.
                                    Continued use of the Website and/or the Platform, through the User’s Account,
                                    will
                                    mean the User’s acceptance of the terms and conditions of a new version of the
                                    mentioned above documents.
                                </li>
                                <li className={classes.letter_item}>
                                    If the User does not agree to the terms and conditions of new versions of the
                                    above-mentioned documents, the User must stop using the Website and the
                                    Platform,
                                    including by closing all incomplete Transactions with GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>
                                    If any provision of this User Agreement is or becomes (whether or not it is such
                                    on
                                    the basis of any decision or otherwise) invalid, illegal, or unenforceable in
                                    any
                                    way in accordance with the applicable Law, the validity, legality, and
                                    enforceability of the remaining provisions contained herein shall not in any way
                                    be
                                    affected or impaired.
                                </li>
                                <li className={classes.letter_item}>
                                    If any court or Governmental authority finds that any provision of this User
                                    Agreement (or part of any provision) is invalid, illegal, or unenforceable, that
                                    provision or part thereof shall be considered deleted to the necessary extent,
                                    and
                                    this shall not affect the validity, legality, and enforceability of the
                                    remaining
                                    provisions of this User Agreement.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Change of control and assignment
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    If GOTOWIN is acquired by or merged with a third party or GOTOWIN’s assets
                                    and/or
                                    business (in whole or in part) are acquired by a third party (in any of these
                                    circumstances), GOTOWIN reserves the right to transfer or to assign the
                                    information,
                                    which GOTOWIN has received from the User, including the User’s Personal data and
                                    other information as part of such acquisition, merger, sale, transfer or other
                                    change of control.
                                </li>
                                <li className={classes.letter_item}>
                                    The User must not assign the rights and obligations under this User Agreement in
                                    any
                                    way without the prior written consent of GOTOWIN, and any alleged assignment in
                                    violation of this clause is invalid. GOTOWIN may assign rights and obligations
                                    under
                                    this User Agreement (in whole or in part) to other entity(ies) in connection
                                    with
                                    the transfer of all or part of GOTOWIN’s assets or business to GOTOWIN’s
                                    affiliate
                                    or any third party with prior notice at least five Business days before. By
                                    accepting this User Agreement, the User gives the irrevocable consent to the
                                    aforementioned assignment and/or transfer, including transfer of the User’s
                                    Personal
                                    data and other information, related to the User, as well as transfer of any
                                    Funds on
                                    the User Account by GOTOWIN as part of such assignment.
                                </li>
                                <li className={classes.letter_item}>
                                    Data recording
                                </li>
                                <li className={classes.letter_item}>
                                    The User acknowledges and agrees that any telephone conversations and other
                                    communications between the User and GOTOWIN, including GOTOWIN technical support
                                    service, may, at the discretion of GOTOWIN, be recorded with or without using an
                                    automatic sound notification device. In addition, the User unconditionally
                                    agrees
                                    and authorizes GOTOWIN to use such records and any transcripts thereof as
                                    evidence
                                    in connection with any dispute or lawsuit that may arise or any issue arising
                                    out of
                                    or in connection with this User Agreement, the Services, any Order or
                                    Transaction.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Data recording
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    The User acknowledges and agrees that any telephone conversations and other
                                    communications between the User
                                    and GOTOWIN, including GOTOWIN technical support service, may, at the discretion
                                    of
                                    GOTOWIN, be recorded
                                    with or without using an automatic sound notification device. In addition, the
                                    User
                                    unconditionally agrees
                                    and authorizes GOTOWIN to use such records and any transcripts thereof as
                                    evidence
                                    in connection with any
                                    dispute or lawsuit that may arise or any issue arising out of or in connection
                                    with
                                    this User Agreement, the
                                    Services, any Order or Transaction.
                                </li>
                            </ul>

                        </li>
                        <li>
                            Delisting Policy
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    GOTOWIN is entitled to delist any coin/token from the Platform for any reason
                                    specified in the coin/token
                                    listing agreement. Having made such a decision, GOTOWIN shall send a delisting
                                    notification to the
                                    coin/token issuer (or to the team/legal entity managing the appropriate project,
                                    or
                                    to the appropriate
                                    project owner(s), or to the Person who was the initiator of listing) forteen
                                    (14)
                                    calendar days prior to the
                                    start of the Delisting procedure.
                                </li>
                                <li className={classes.letter_item}>
                                    V makes the decision to delist coin/token following the next
                                    criteria/circumstances:
                                    <ul className={classes.filled_list}>
                                        <li className={classes.filled_item}>
                                            the coin/token is no longer supported by the team, issuer, community,
                                            etc.;
                                        </li>
                                        <li className={classes.filled_item}>
                                            blockchain or related technology becomes compromised or defective or has
                                            serious technical or security problems/issues (including if it became
                                            known
                                            from public sources);
                                        </li>
                                        <li className={classes.filled_item}>
                                            due to the implementation of new regulatory standards and other
                                            compliance
                                            issues;
                                        </li>
                                        <li className={classes.filled_item}>
                                            the coin/token faces significant legal issues related to compliance with
                                            applicable Laws and regulations;
                                        </li>
                                        <li className={classes.filled_item}>
                                            violation of the GOTOWIN User Agreement or the appropriate listing
                                            agreement;
                                        </li>
                                        <li className={classes.filled_item}>
                                            in cases prescribed by the appropriate listing agreement;
                                        </li>
                                        <li className={classes.filled_item}>
                                            multiple complaints (or suspicious activity reports) related to the
                                            coin/token from the Users;
                                        </li>
                                        <li className={classes.filled_item}>
                                            if it is necessary to prevent and/or stop fraud, manipulation, security
                                            breaches or other unlawful actions, hacking attacks.
                                        </li>
                                    </ul>
                                </li>
                                <li className={classes.letter_item}>
                                    The start of the Delisting procedure is marked by disabling Deposits and trading
                                    of
                                    the coin/token, specifying a time period for Withdrawal of the coins/tokens, and
                                    sending the Delisting notice to Users that possess such coins/tokens on their
                                    Accounts.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN will send the Delisting notices to Users that have such coins/tokens on
                                    their Accounts about the coin/token Delisting by means of e-mail notification
                                    and/or
                                    by social media post(s). Users bear the sole responsibility for regularly
                                    checking
                                    updates on the coin/token Delisting.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN shall give to the Users a certain time period, which will be specified
                                    in
                                    the Delisting notice to Users, to withdraw coins/tokens from their GOTOWIN
                                    Accounts
                                    to external wallets. The time period, stated in the Delisting notice to Users,
                                    shall
                                    be 30 calendar days from the date of issuing. After the end of such period Users
                                    won’t be able to see the balance of coin/token which is undergoing the Delisting
                                    procedure in the GOTOWIN User’s Accounts.
                                </li>
                                <li className={classes.letter_item}>
                                    If the User does not withdraw the specified coins/tokens within the time period
                                    indicated in the Delisting notice, GOTOWIN shall give him/her an additional 120
                                    calendar days term (hereinafter - the “Penalty period”) to withdraw coins/tokens
                                    from his/her GOTOWIN Account with an appropriate penalty that will be
                                    automatically
                                    charged by GOTOWIN.
                                </li>
                                <li className={classes.letter_item}>
                                    On the last day of the time period indicated in the Delisting notice, GOTOWIN
                                    shall
                                    send the Final delisting notice to the Users that still possess the coin/token
                                    which
                                    is undergoing the Delisting procedure by e-mail notification. Final delisting
                                    notice
                                    shall contain information on the amount of such coin/token on GOTOWIN User’s
                                    Account
                                    and the information about the penalty that will be automatically applied in case
                                    the
                                    User didn't withdraw such coins/tokens from their GOTOWIN Accounts before the
                                    start
                                    of the Penalty period.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN has the right and is freely entitled to remove the coin/token from the
                                    Platform after the expiration of the Withdrawal period specified in the
                                    Delisting
                                    notice to Users. In that case, the technical support of coin/token (as well as
                                    the
                                    technical possibility to keep coins/tokens on the wallet of the platform) is
                                    terminated, and all balances of Users in delisted coin/token will be annulled
                                    without compensation.
                                </li>
                                <li className={classes.letter_item}>
                                    To withdraw the coin/token which is undergoing the Delisting procedure during
                                    the
                                    Penalty period, User shall contact GOTOWIN Support Team at support@whitebit.com,
                                    via
                                    online chat, or by creating a ticket on GOTOWIN User’s Account and follow its
                                    instructions.
                                </li>
                                <li className={classes.letter_item}>
                                    During the Penalty period, GOTOWIN applies an appropriate penalty which is 25%
                                    of
                                    the amount of coin/token which is undergoing the Delisting procedure and which
                                    User
                                    possesses on the first day of the Penalty period. GOTOWIN charges such a penalty
                                    once every 30 calendar days from the start of such Penalty period.
                                </li>
                                <li className={classes.letter_item}>
                                    During the Penalty period, once for 30 calendar days, GOTOWIN shall send a
                                    notice
                                    about a penalty that will be automatically charged. GOTOWIN shall send such
                                    notices
                                    till the end of the Penalty period or till the time the User’s balance in the
                                    coin/token which is undergoing the Delisting procedure is less than the minimum
                                    limits for Withdrawing or equal to zero.
                                </li>
                                <li className={classes.letter_item}>
                                    GOTOWIN has the right and is freely entitled to remove the coin/token from the
                                    Platform after the expiration of the Withdrawal period specified in the
                                    Delisting
                                    notice to Users and the end of the Penalty period (if it was given to User). In
                                    that
                                    case, the technical support of coin/token (as well as the technical possibility
                                    to
                                    keep coins/tokens on the wallet of the platform) is terminated, and all balances
                                    of
                                    Users in coin/token which is undergoing the Delisting procedure will be annulled
                                    without compensation.
                                </li>
                                <li className={classes.letter_item}>
                                    In cases if GOTOWIN, due to the technical or other changes or arisen technical
                                    issues in appropriate blockchains (major technical issues or updates), can't
                                    guarantee the Withdrawal of the appropriate Digital assets (related to such
                                    blockchain) within 30 calendar days, GOTOWIN reserves the right to shorten this
                                    period. In this case, GOTOWIN shall issue no less than 3 (three) warnings to the
                                    Users per e-mail and/or per the official social media channels.
                                </li>
                            </ul>
                        </li>
                        <li>
                            Final provisions
                            <ul className={classes.letter_list}>
                                <li className={classes.letter_item}>
                                    This User Agreement is valid until one of the Parties terminates it. The User
                                    may
                                    terminate this User Agreement at any time (after fulfilling the appropriate
                                    demands
                                    stipulated by this User Agreement) by ceasing the use of the Services (the
                                    Platform)
                                    and removing all copies of any components of the software from all of his/her
                                    devices and equipment.
                                </li>
                                <li className={classes.letter_item}>
                                    In addition to cases specially stipulated by this User Agreement, GOTOWIN may
                                    unilaterally terminate this User Agreement at its discretion, with prior, at
                                    least
                                    10 days before, notice to the User.
                                </li>
                            </ul>
                        </li>
                    </ol>
                    Contact us: UAB Clear White Technologies, address: 26, J. Basanavičiaus Street, Vilnius, LT-03224
                    Republic
                    of Lithuania
                </div>
            </div>


            <Footer/>
        </div>
    );
};

export default UserAgreement;
