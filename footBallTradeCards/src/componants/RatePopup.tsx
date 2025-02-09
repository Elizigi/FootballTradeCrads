import { FC } from "react";
import styles from "./RatePopup.module.scss";
import { PopupData } from "../model/PopupData";
import RateDeleteVM from "./RateDeleteVM";

type PopupProps = {
  onClose: () => void;
  data: PopupData;
};

const RatePopup: FC<PopupProps> = ({ onClose, data }) => {
    const {rateToServer}=RateDeleteVM();

  function ratePlayer(rating: number) {
    console.log(rating);
    onClose();
    rateToServer(rating, data.id);
  }

  
  return (
    <div className={styles.ratePopup}>
      <h2>rate {data.name}:</h2>
      <div className={styles.starBox}>
        <div className={styles.star}>
          <button className={styles.starButton} onClick={() => ratePlayer(1)}>
            ★
          </button>
          <div className={styles.star}>
            <button className={styles.starButton} onClick={() => ratePlayer(2)}>
              ★
            </button>
            <div className={styles.star}>
              <button
                className={styles.starButton}
                onClick={() => ratePlayer(3)}
              >
                ★
              </button>
              <div className={styles.star}>
                <button
                  className={styles.starButton}
                  onClick={() => ratePlayer(4)}
                >
                  ★
                </button>
                <div className={styles.star}>
                  {" "}
                  <button
                    className={styles.starButton}
                    onClick={() => ratePlayer(5)}
                  >
                    ★
                  </button>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RatePopup;
