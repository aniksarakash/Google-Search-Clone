import React from 'react';
import "./home.css"
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import { Avatar } from '@mui/material';
import Search from "../components/Search";

const Home = () => {
    return (
        <div className='home-container'>
            <div className="header">
                <div className="header-left">
                    <Link to="/about">About</Link>
                    <Link to="/about">Store</Link>
                </div>
                <div className='header-right'>
                    <Link to="/about">Gmail</Link>
                    <Link to="/about">Images</Link>
                    <Link to="/about"><AppsIcon fontSize='small'/></Link>
                    <Link to="/about"><Avatar/></Link>
                </div>
            </div>
            <div className="body">
                <img src="https://pngimg.com/uploads/google/google_PNG19644.png" alt="google logo" />
                <Search hideButtons = {false}/>
            </div>
        </div>
    );
};

export default Home;