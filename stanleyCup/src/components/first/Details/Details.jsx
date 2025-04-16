import styles from "./Details.module.css";
import { images } from "@assets/images";

export const Details = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>details & specifications</h2>
        <img src={images.dropdown} alt="Dropdown button" />
      </div>

      <div className={styles.content}>
        <p>
          Share the love with the sweetest Valentine's Day Quencher. Wrapped in
          luscious berry hues, it's perfect for gifting and even includes a
          heart-shaped card. Pops of iridescent metallics and a berry-tinted lid
          and straw make it as indulgent as the treat it's named for.
        </p>
        <p style={{ marginTop: "1rem" }}>
          The 0.8L Quencher H2.0 FlowState Tumbler keeps your drink ice cold for
          hours, thanks to double-wall vacuum insulation. The versatile
          FlowState 3-position lid has three sip settings: one for the reusable
          straw, one without and the option to rotate the silicone cover shut.
          It fits right in your car cupholder when you're headed to your
          heart-day celebration
        </p>
        <p style={{ marginTop: "1rem" }}>
          *Not Eligible For Promotions or Resell. Multiple & Large Orders Are
          Subject To Cancellation.
        </p>
      </div>

      <div className={styles.specsContainer}>
        <ul className={styles.specs}>
          <li>18/8 recycled stainless steel</li>
          <li>Double-wall vacuum insulation</li>
          <li>FlowState 3-position lid</li>
          <li>Reusable straw</li>
          <li>Car cup holder compatible</li>
          <li>Dishwasher safe</li>
          <li>BPA-free</li>
        </ul>
      </div>

      <div className={styles.dimensions}>
        <p>Weight:</p>
        <p>0.54</p>
      </div>

      <div className={styles.dimensions}>
        <p>Dimensions:</p>
        <p>9 x 13.8 x mm</p>
      </div>
    </section>
  );
};
