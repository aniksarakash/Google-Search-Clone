import React, { useState } from 'react';
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import { Button } from '@mui/material';
import { useHistory } from 'react-router-dom';
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';

const Search = (props) => {

    const [input, setInput] = useState("");
    const history = useHistory();
    const {hideButtons} = props;
    const [state, dispatch] = useStateValue();

    console.log("The state is", state);
    console.log("The input is ", input);
    const handleInput = e => {
        e.preventDefault();
        console.log("The input inside handle input", input);
        dispatch({
            type:actionTypes.SET_SEARCH_TERM,
            term:input
        })
        history.push("/search")
    }

    return (
        <form className='search' onSubmit={handleInput}>
            <div className='search-input'>
                <SearchIcon className='gg'></SearchIcon>
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onSubmit={handleInput} />
                <MicIcon/>
            </div>
            { !hideButtons &&
            <div className='search-buttons'>
                <Button type='submit' onClick={handleInput} variant='outlined'>Google Search</Button>
                <Button variant='outlined'>I am feeling lucky</Button>
            </div>
            }
        </form>
    );
};

export default Search;