import React from 'react';
import useGoogleSearch from '../components/useGoogleSearch';
import { useStateValue } from '../StateProvider';
import { response } from '../response'; //dummy values
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import "./SearchPage.css";
import Search from '../components/Search';
import SearchIcon from '@mui/icons-material/Search';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import ImageSearchIcon from '@mui/icons-material/ImageSearch';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = () => {
    const [state, dispatch] = useStateValue();
    const {data} = useGoogleSearch(state.term);
    // const data = response;
    // console.log(data);
    return (
        <div className='search-page'>
            <div className='search-page-header'>
                <Link to="/">
                    <img className='search-page-logo' src="https://pngimg.com/uploads/google/google_PNG19644.png" alt="google-logo" />
                </Link>
                <div className='search-page-header-body'>
                    <Search hideButtons={true}/>
                    <div className='search-page-options'>
                        <Link to="/"><SearchIcon /><span>All</span></Link>
                        <Link to="/"><OndemandVideoIcon /><span>Video</span></Link>
                        <Link to="/"><ImageSearchIcon /><span>Images</span></Link>
                        <Link to="/"><LocationOnIcon /><span>Maps</span></Link>
                        <Link to="/"><NewspaperIcon/><span>News</span></Link>
                        <Link to="/"><MoreVertIcon /><span>More</span></Link>
                    </div>
                </div>

            </div>
            <div className="search-page-results">
                <p className='result-count'>About {data ? data.searchInformation.formattedTotalResults: 0} results ({data ? data.searchInformation.formattedSearchTime: 0} seconds) </p>
                {data && data.items.map( item => {
                    return (
                        <div key={""} className="search-result">
                            <a target="blank" href={item.link}><h2>{item.title}</h2></a>
                            <p>{item.snippet}</p>
                            <a target="blank" className='search-result-link' href={item.link}>{item.displayLink}</a>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default SearchPage;