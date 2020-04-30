import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import { connect } from 'react-redux';
import findSuggestions from '../redux/actions/findSuggestions';
import findCurrentItem from '../redux/actions/findCurrentItem';
import Layout from '../components/Layout';
import NavBar from '../components/NavBar';

import '../styles/detail.scss';

// eslint-disable-next-line no-shadow
const Details = ({id, CurrentItem, suggestions, findCurrentItem, findSuggestions}) => {

    const [text, setText] = useState('');

    useEffect(() => {
        // eslint-disable-next-line radix
        const itemId = parseInt(id);
        findCurrentItem(itemId);
    }, [id]);

    function onChangeText(textVal) {
        setText(textVal);
        findSuggestions(textVal);
    }

    function handleClick(id) {
        window.location.href = `/detail/${id}`;
    }

    return (
        <Layout title="Detail">
            <NavBar 
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onClick={handleClick}
            />
            <div className="container mt-5">
                <nav aria-label="breadcrumb">
                    <div className="breadcrumb">
                        <Link to="/" className="breadcrumb-item active" aria-current="page">Home</Link>
                        <Link to={`/detail/${id}`} className="breadcrumb-item active" aria-current="page">Detail</Link>
                    </div>
                </nav>
                {CurrentItem[0] &&
                    <>
                    <h2>Detail</h2>
                    <div className="row mt-5">
                        <div className="cover col-md-4">
                            <img src={CurrentItem[0].image} className="img-fluid" alt="" />
                        </div>
                        <div className="col-md-8">
                            <h2 className="">{CurrentItem[0].title}</h2>
                            <p>
                                {CurrentItem[0].content}
                            </p>
                        </div>

                    </div>
                    </>
                }
            </div>
        </Layout>
    );
};

const mapStateToProps = (state) => {
    return {
        suggestions: state.suggestions,
        CurrentItem: state.currentItem,
    };
};

const mapDispatchToProps = {
    findCurrentItem,
    findSuggestions
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);