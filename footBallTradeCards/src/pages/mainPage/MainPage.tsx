import React, { useEffect } from 'react';
import { useMainPageMW } from "./mainPageMW";
import Header from '../header/Header';
import { hero } from './playerModel';

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
};

export default MainPage;
