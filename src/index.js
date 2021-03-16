import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header1.js';

// function Header(props) {
//     return (
//         <header className = 'header'>
//             <h1 className = 'header-text'>The Developer Repository</h1>
//             <img className = 'manImage' src={'/media/man.jpeg'} alt = {'illustration'} />
//         </header>
//     )
// }

function Footer(props) {
    return (
        <header className = 'footer'>
            <h1>Made with by Akshit</h1>
        </header>
    )
}

function SearchBar(props) {
    return (
        <div>
            <p className = 'exploreText'>Explore developer profiles</p>
            <hr className = 'bar-top'></hr>
            <input type="text" placeholder="Search for username" className = "search-outer search-inner"></input>
        </div>
        
    )
}

function AddDeveloperButton(props) {
    return (
        <div>
            <hr className = 'bar-bottom'></hr>
            <p className = 'couldnotfind'>Could not find what you were looking for?</p>
            <input type="button" placeholder="Add Developer Info" className = 'button'></input>
        </div>
        
    )
}

function App(props) {

    return(
        <div>
            <Header />
            <SearchBar />
            <AddDeveloperButton />
            <Footer />
        </div>
    )
}


ReactDOM.render(
 <App />,
 document.getElementById('root')
);



