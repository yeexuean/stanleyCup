import styles from "./Extras.module.css";
import { images } from "@assets/images";

export const Extras = () => {
  return (
    <section className={styles.container}>
      <div className={styles.addon}>
        <h2>add-ons</h2>
        <div className={styles.addonRow}>
          <img className={styles.bootsImages} src={images.bootStraw} />

          <img className={styles.bootsImages} src={images.bootStraw} />

          <img className={styles.bootsImages} src={images.bootStraw} />
        </div>
      </div>

      <div className={styles.reviewContainer}>
        <h2>reviews</h2>
        <p className={styles.reviewSubheading}>Review this Product</p>
        <div className={styles.starsReview}>
          <img className={styles.starBox} src={images.stars} />
          <img className={styles.starBox} src={images.stars} />
          <img className={styles.starBox} src={images.stars} />
          <img className={styles.starBox} src={images.stars} />
          <img className={styles.starBox} src={images.stars} />
        </div>
        <p className={styles.firstReview}>
          Be the first to review this product
        </p>

        <div className={styles.questionContainer}>
          <h2>questions</h2>
          <div className={styles.questionBox}>
            <div className={styles.question}>
              <p>Is this cup suitable for hot drinks?</p>
              <img src={images.dropdown} />
            </div>

            <div className={styles.question}>
              <p>Is this cup leakproof?</p>
              <img src={images.dropdown} />
            </div>

            <div className={styles.question}>
              <p>Can you get in engraved?</p>
              <img src={images.dropdown} />
            </div>

            <div className={styles.question}>
              <p>How long can cold water last?</p>
              <img src={images.dropdown} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
