import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const PageTitle = ({ title }) => {
    const location = useLocation();

    const pageTitle = "GOW | · "+title
    useEffect(() => {
        document.title = pageTitle;
    }, [pageTitle, location.pathname]);

    return null;
};

export default PageTitle;
