import React, { Suspense } from 'react';
import { Router } from '@reach/router';
import { Provider } from 'react-redux';
import store from './redux/store';

import './styles/Globalstyles.scss';

const NotFound = React.lazy(() => import('./pages/not-found'));
const Home = React.lazy(() => import('./pages/home'));

export const App = () => (

    <Provider store={store}>
        <Suspense fallback={<div />}>
            <Router>
                <NotFound default />
                <Home path="/" />
            </Router>
        </Suspense>
    </Provider>
);
