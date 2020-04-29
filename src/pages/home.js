import React, { useState } from 'react';
import { connect } from 'react-redux';
import findSuggestions from '../redux/actions/findSuggestions';
import findResults from '../redux/actions/findResults';
import Alert from '../components/Alert';
import Card from '../components/Card';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import '../styles/home.scss';

const Home = ({suggestions, results, findSuggestions, findResults}) => {

    const [text, setText] = useState('');

    function onChangeText(textVal) {
        setText(textVal);
        findSuggestions(textVal);
    }

    function onChangeSelection(textVal) {
        setText(textVal);
        findResults(textVal);
    }

    return (
        <Layout title="Home">
            <NavBar 
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
            />
            <div className="container mt-5">
                {results.length === 0 ?
                    <Alert />
                    :
                    results.map(result => <Card title={result.title}/>)
                }
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
        results: state.results
    };
};

const mapDispatchToProps = {
    findSuggestions,
    findResults
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);