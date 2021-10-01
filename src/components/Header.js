import React from 'react';
import styled, { StyledComponent } from 'styled-components';
import "./Header.css";


const Header= ()=>{
    return(
        <nav class="navbar">
            <div class="logo">
                    <img src="/images/logo.svg" class="logo-disney"></img> 
            </div>  
            <div class="menu-list">
                    <a href="/">
                        <img src="images/home-icon.svg"></img>
                        <span>HOME</span>
                    </a>
                    <a>
                        <img src="images/search-icon.svg"></img>
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img src="images/watchlist-icon.svg"></img>
                        <span>WATCHLIST</span>
                    </a>
                    <a>
                        <img src="images/original-icon.svg"></img>
                        <span>ORIGINAL</span>
                    </a>
                    <a>
                        <img src="images/movie-icon.svg"></img>
                        <span>MOVIES</span>
                    </a>
                    <a>
                        <img src="images/series-icon.svg"></img>
                        <span>SERIES</span>
                    </a>
        
            </div>        


            <div class="profile">
                   <img src="images/profile.png"></img>
            </div>
        </nav>
    );
};

export default Header;


