import { FC } from "react";
import styles from "./HeroCardStyle.module.scss"

interface HeroProps {
    myCard:boolean;
    fullName: string;
    img: string;
    team: string;
    age: number;
    position: string;
    totalRating: number;
    totalRatingCount: number;
  }
const HeroCard:FC<HeroProps> = ({myCard,fullName,team,img,age,position,totalRating,totalRatingCount}) => {
    function calculateRating() {
        const rating = Math.round(totalRating / totalRatingCount); // Round rating

        return [...Array(5)].map((_, i) => (
          <span key={i+1}  className={i < rating ? styles.gold : styles.gray }>
            ★
          </span>
        ));
      
    }
  return (
    <div className={styles.heroCard}>
        {myCard? <h1>delete</h1>:""}
      <h2  className={styles.cardHeader}>{fullName}</h2>
      <img src={img} alt={fullName+" image"} />
      <p>{age}</p>
      <p>{team}</p>
      <p>{position}</p>
      <div className={styles.rating}>{calculateRating()}</div>
    </div>
  )
}

export default HeroCard
