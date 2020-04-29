import React, { useState } from 'react';
import { connect } from 'react-redux';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import '../styles/home.scss';

const Home = ({suggestions}) => {

    const [text, setText] = useState('');

    function onChangeText(textVal) {
        setText(textVal);
    }

    function onChangeSelection(textVal) {

    }

    return (
        <Layout title="Home">
            <NavBar 
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
            />
            <div className="main-container">
                {suggestions.map(suggestion => suggestion.title)}
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