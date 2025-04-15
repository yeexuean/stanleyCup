import styles from "./Details.module.css";
import { images } from "@assets/images";

export const Details = () => {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2>details & specifications</h2>
        <img src={images.dropdown} alt="Dropdown button" />
      </div>

      <p className="styles.content">
        Share the love with the sweetest Valentine's Day Quencher. Wrapped in
        luscious berry hues, it's perfect for gifting and even includes a
        heart-shaped card. Pops of iridescent metallics and a berry-tinted lid
        and straw make it as indulgent as the treat it's named for. <br></br>
        The 0.8L Quencher H2.0 FlowState Tumbler keeps your drink ice cold for
        hours, thanks to double-wall vacuum insulation. The versatile FlowState
        3-position lid has three sip settings: one for the reusable straw, one
        without and the option to rotate the silicone cover shut. It fits right
        in your car cupholder when you're headed to your heart-day celebration
        <br></br>
        *Not Eligible For Promotions or Resell. Multiple & Large Orders Are
        Suject To Cancellation.
      </p>

      <div>
        <p>18/8 recycled stainless steel</p>
        <p>Double-wall vacuum insulation</p>
        <p>FlowState 3-position lid</p>
        <p>Reusable straw</p>
        <p>Car cup holder compatible</p>
        <p>Dishwasher sae\fe</p>
        <p>BPA-free</p>
      </div>

      <div>
        <p>Weight:</p>
        <p>0.54</p>
      </div>

      <div>
        <p>Dimensions:</p>
        <p>9 x 13.8 x mm</p>
      </div>
    </section>
  );
};
