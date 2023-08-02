import {useNavigate} from "react-router-dom";

export const useAppNavigation = () => {
    const navigate = useNavigate();

    const navigateToLogin = () => navigate('/login');
    const navigateToSignIn = () => navigate('/register');
    const navigateToProfile = () => navigate('/profile');
    const navigateToHome = () => navigate('/');
    const navigateToResetPassword = () => navigate('/reset-mail')
    const navigateToUser = () => navigate('/profile')

    return {
        navigateToLogin,
        navigateToSignIn,
        navigateToProfile,
        navigateToHome,
        navigateToResetPassword,
        navigateToUser
    };
};
