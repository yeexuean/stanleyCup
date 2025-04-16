import styles from "./ViewPage.module.css";
import { images } from "@assets/images";

export const ViewPage = () => {
  return (
    <section className={styles.container}>
      <div>
        <img src={images.stanleyCup} />
      </div>
    </section>
  );
};
