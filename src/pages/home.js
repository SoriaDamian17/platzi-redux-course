import React, { useState } from 'react';
import { Link  } from '@reach/router';
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

    function handleClick(id) {
        window.location.href = `/detail/${id}`;
    }

    return (
        <Layout title="Home">
            <NavBar 
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
                onClick={handleClick}
            />
            <div className="container mt-5">
                <h2>List Course</h2>
                <div className="row">
                    {results.length === 0 ?
                        <Alert />
                        :
                        results.map(result => <div key={result.id} className="col mt-5">
                            <Link to={`detail/${result.id}`}>
                            <Card image={result.image} title={result.title} description={result.content}/>
                            </Link>
                            </div>)
                    }
                </div>
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