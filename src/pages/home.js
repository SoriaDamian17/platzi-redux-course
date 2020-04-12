import React from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';

import '../styles/home.scss';

const Home = ({suggestions}) => {

    console.log(suggestions);

    return (
        <Layout title="Home">
            <div className="main-container">
                {suggestions}
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
    };
};

export default connect(mapStateToProps)(Home);