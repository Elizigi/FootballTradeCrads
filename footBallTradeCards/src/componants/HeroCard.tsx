import { FC } from "react";
import styles from "./HeroCardStyle.module.scss";

interface HeroProps {
    id:string;
  myCard: boolean;
  fullName: string;
  img: string;
  team: string;
  age: number;
  position: string;
  totalRating: number;
  totalRatingCount: number;
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
}) => {
  function calculateRating() {
    const rating = Math.round(totalRating / totalRatingCount);

    return [...Array(5)].map((_, i) => (
      <span key={i + 1} className={i < rating ? styles.gold : styles.gray}>
        ★
      </span>
    ));
  }

  function deleteCard(id: string) {
    console.log(id);
  }
  function rateCard(id: string) {
    console.log(id);
  }

  return (
    <div className={styles.cardWrapper} key={id}>

      <div className={styles.heroCard}>
        <h2 className={styles.cardHeader}>{fullName}</h2>
        <img src={img} alt={fullName + " image"} />
        <p>{age}</p>
        <p>{team}</p>
        <p>{position}</p>
        <div className={styles.rating}>{calculateRating()}</div>
      </div>


      {myCard ? (
        <button className={styles.delete} onClick={() => deleteCard(id)}>
          delete
        </button>
      ) : (
        ""
      )}

      <button className={styles.rate} onClick={() => rateCard(id)}>rate</button>
    </div>
  );
};

export default HeroCard;
