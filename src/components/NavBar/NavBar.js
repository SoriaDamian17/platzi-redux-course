import React from 'react';
import { Link } from '@reach/router';
import Search from '../Search';

const NavBar = ({text, suggestions, onChangeText, onChangeSelection, onClick}) => (
    <div id="ui-control-navbar">
        <nav className="navbar navbar-dark bg-primary">
            <Link className="navbar-brand" to="/">
                <img src="/docs/4.4/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt="" />
                Cursera
            </Link>
            <Search 
                text={text}
                suggestions={suggestions}
                onChangeText={onChangeText}
                onChangeSelection={onChangeSelection}
                onClick={onClick}
            />
        </nav>
    </div>
);

export default NavBar;