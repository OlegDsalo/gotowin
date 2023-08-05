import {useNavigate} from "react-router-dom";
import {routes} from "../App";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => navigate(routes.login);
    const navigateToSignIn = () => navigate(routes.register);
    const navigateToProfile = () => navigate(routes.profile);
    const navigateToHome = () => navigate(routes.home);
    const navigateToResetPassword = () => navigate(routes.resetMail)


    const navigateToPrivacyPolicy = () => navigate(routes.privacyPolicy)
    const navigateToUserAgreement = () => navigate(routes.userAgreement)
    const navigateToPrivacyPolicyUA = () => navigate(routes.privacyPolicyUA)


    return {
        navigateToLogin,
        navigateToSignIn,
        navigateToProfile,
        navigateToHome,
        navigateToResetPassword,
        navigateToPrivacyPolicy,
        navigateToUserAgreement,
        navigateToPrivacyPolicyUA,
    };
};
