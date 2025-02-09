import { useEffect } from "react";
import { useMainPageMW } from "./mainPageMW";
import Header from "../header/Header";
import styles from "./MainPage.module.scss";
import HeroCard from "../../componants/HeroCard";

const MainPage = () => {
  const { heros, fetchAllHeros } = useMainPageMW();

  useEffect(() => {
    fetchAllHeros();
    console.log("Players updated:", heros);
  },);

  return (
    <div>
      <h1>All Players:</h1>
      <Header />
      <div className={styles.cards}>
        {heros.length > 0 ? (
          heros.map((hero) => (
            <div key={hero._id} className="player-card">
              <HeroCard
                id="dwa"
                age={hero.age}
                fullName={hero.fullName}
                img={hero.img}
                myCard={hero.myCard}
                position={hero.position}
                team={hero.team}
                totalRating={hero.totalRating}
                totalRatingCount={hero.totalRatingCount}
              />
            </div>
          ))
        ) : (
          <h1>No players available</h1> //  הוספנו אלמנט שיחזור אם אין שחקנים
        )}
      </div>
    </div>
  );
};

export default MainPage;
