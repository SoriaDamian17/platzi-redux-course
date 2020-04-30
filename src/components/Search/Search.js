import React, { useState } from 'react';

import './Search.scss';

const Search = ({text, suggestions, onChangeText, onChangeSelection}) => {

    const [isOpen, setOpen] = useState(false);

    return (
        <div id="ui-control-search">
            <form className="form-inline mt-2 mt-md-0">
                <input 
                    className="form-control mr-sm-2"
                    type="text"
                    placeholder="Search"
                    aria-label="Search"
                    value={text}
                    onChange={(event) => {
                        const newText = event.target.value;

                        onChangeText(newText);

                        if (!isOpen && newText) {
                            setOpen(true);
                        } else if (isOpen && !newText) {
                            setOpen(false);
                        }
                    }}
                    onKeyPress={(event) => {
                        if (event.key === 'Enter' && text) {
                            onChangeSelection(text);
                            event.preventDefault();
                        }
                    }}
                    />
                {isOpen &&
                <div className="container-results">
                    <div className="list-group">
                        {suggestions.map(suggestion => <span key={suggestion.id} className="list-group-item list-group-item-action">{suggestion.title}</span>)}
                    </div >
                </div>
                }
            </form>
        </div>
    );
};

export default Search;