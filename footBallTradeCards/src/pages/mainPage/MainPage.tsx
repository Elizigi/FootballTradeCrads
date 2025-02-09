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
                <div className={styles.cards}>
                {heros.heros?.length > 0 ? (
                      heros.heros.map((hero: hero, index) => (
                        <div key={index} className="player-card">
                            <HeroCard id='dwa' age={5} fullName={hero.fullName} img={hero.img} myCard={true} position={hero.position} team={hero.team} totalRating={hero.totalRating} totalRatingCount={hero.totalRatingCount} />
                        </div>
                    ))
                ) : (
                    <h1>No players available</h1>
                )}
              </div>
      </div>
    )
}

export default MainPage;
