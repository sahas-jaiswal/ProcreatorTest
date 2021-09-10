import React from 'react';
import upperWave from '../Assets/SVG/upperHomeWave.svg';
import '../Assets/Styles/HomeScreen.scss';
import upload from '../Assets/Images/upload.png';
import Search from '../Components/SearchBar';
import Cards from '../Components/Cards';
import { BottomTabBar } from '../Components/BottomTabBar';

const HomeScreen = () => {
    return (
        <div className="HomeScreen">
            <div>
                <embed src={upperWave}/>
            </div>
            <div className="home-info">
                <h2>Hello Jessie,</h2>
                <p>at the moment you are have</p>
                <div className="info">
                    <p><span>32.5 GB  </span>of 100 GB free</p>
                    <img src={upload}/>
                </div>
                <progress id="progress" max="100" value="70"> 70% </progress>
            </div>
            <div className="main-frame">
                <Search/>

                <div className="sub-division">
                    <h3 className="division-highlight">FILES</h3>
                    <h3 className="division-highlight">FOLDERS</h3>
                </div>
                <div className="cards-grid">
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    <div>
                        <Cards/>
                    </div>
                    
                </div>
            </div>
            <BottomTabBar/>
        </div>
    )
}

export default HomeScreen;
