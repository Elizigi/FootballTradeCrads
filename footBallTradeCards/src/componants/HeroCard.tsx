import { FC } from "react";
import styles from "./HeroCardStyle.module.scss";
import { PopupData } from "../model/PopupData";
import RateDeleteVM from "./RateDeleteVM";

interface HeroProps {
  id: string;
  myCard: boolean;
  fullName: string;
  img: string;
  team: string;
  age: number;
  position: string;
  totalRating: number;
  totalRatingCount: number;
  setPopup: (data: PopupData) => void; // Accept a function that takes data
}

const HeroCard: FC<HeroProps> = ({
  id,
  myCard,
  fullName,
  team,
  img,
  age,
  position,
  totalRating,
  totalRatingCount,
  setPopup,
}) => {

  const {deleteToServer}=RateDeleteVM();


  function calculateRating() {
    const rating = Math.round(totalRating / totalRatingCount);

    return [...Array(5)].map((_, i) => (
      <span key={i + 1} className={i < rating ? styles.gold : styles.gray}>
        ★
      </span>
    ));
  }



  function rateCard() {
    console.log("Rating card:", id);
    setPopup({id:id,name:fullName});
  }

  return (
    <div className={styles.cardWrapper} key={id}>
      <div className={styles.heroCard}>
        <h2 className={styles.cardHeader}>{fullName}</h2>
        <img src={img} alt={fullName+"image"} />
        <p>Age: {age}</p>
        <p>Team: {team}</p>
        <p>Position: {position}</p>
        <div className={styles.rating}>{calculateRating()}</div>
      </div>

      {myCard && (
        <button className={styles.delete} onClick={()=>deleteToServer(id)}>
          Delete
        </button>
      )}
    
      <button className={styles.rate} onClick={rateCard}>
        Rate
      </button>
    </div>
  );
};

export default HeroCard;
