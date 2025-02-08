import React, { useEffect } from 'react';
import { useMainPageMW } from "./mainPageMW";
import Header from '../header/Header';
import { hero } from './playerModel';
import { Link, Route, Routes } from 'react-router-dom';
import styles from "./MainPage.module.scss";
import Players from "../players/Players";
import ContactUs from "../contactUs/Contactus";
import HeroCard from '../../componants/HeroCard';


const MainPage = () => {
    const { heros, fetchAllHeros } = useMainPageMW<hero[]>([]);

    useEffect(() => {
        fetchAllHeros();
        console.log("Players updated:", heros);
    }, []);

    return (
        <div>
            <h1>All Heroes:</h1>
            <Header />
            <div>
                {heros.heros?.length > 0 ? (
                    heros.heros.map((hero: hero, index) => (
                        <div key={index} className="player-card">
                            <h1>{hero.fullName}</h1>
                            <p>Position: {hero.position}</p>
                            <p>Age: {hero.age}</p>
                            <p>Team: {hero.team}</p>
                            <p>Rating: {hero.totalRating}</p>
                            <p>Total rating: {hero.totalRatingCount}</p>
                            <p>----------------------------------</p>
                        </div>
                    ))
                ) : (
                    <h1>No players available</h1>
                )}
            </div>
        </div>
    );
  }
      {/* הנתיבים מוצגים בתוך MainPage */}
      // <HeroCard id='dwa' age={5} fullName='me' img='aaaaaaa' myCard={true} position='forward' team='my team' totalRating={5} totalRatingCount={1} />
      // <HeroCard id='wwwww' age={5} fullName='me' img='aaaaaaa' myCard={true} position='forward' team='my team' totalRating={5} totalRatingCount={1} />

export default MainPage;
