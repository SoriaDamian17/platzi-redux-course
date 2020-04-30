import React, {useEffect} from 'react';

import './Layout.scss';

const Layout = ({ title, children }) => {

    useEffect(() => {
        document.title = title;
    }, []);

    return (
        <div className="layout">
            {children}
        </div>
    );
};

export default Layout;