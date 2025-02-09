import { useEffect, useState } from "react";
import { useMainPageMW } from "./mainPageMW";
import Header from "../header/Header";
import styles from "./MainPage.module.scss";
import HeroCard from "../../componants/HeroCard";
import RatePopup from "../../componants/RatePopup";
import { PopupData } from "../../model/PopupData";

const MainPage = () => {
  const { heros, fetchAllHeros } = useMainPageMW();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState<PopupData>({id:"",name:""});

  useEffect(() => {
    fetchAllHeros();
    console.log("Players updated:", heros);
  },[]);


  const openPopup = (data: PopupData) => {
    setPopupData(data); 
    setIsPopupOpen(true);
  };


  return (
    <div>
      <h1>All Players:</h1>
      <Header />
      <div className={styles.cards}>
        {heros.length > 0 ? (
          heros.map((hero) => (
            <div key={hero._id} className="player-card">
              <HeroCard
                id={hero._id}
                age={hero.age}
                fullName={hero.fullName}
                img={hero.img}
                myCard={hero.myCard}
                position={hero.position}
                team={hero.team}
                totalRating={hero.totalRating}
                totalRatingCount={hero.totalRatingCount}
                setPopup={openPopup} 
              />
            </div>
          ))
        ) : (
          <h1>No players available</h1> //  הוספנו אלמנט שיחזור אם אין שחקנים
        )}
      </div>
      {isPopupOpen && <RatePopup  data={popupData} onClose={() => setIsPopupOpen(false)} />}
    </div>
  );
};

export default MainPage;
