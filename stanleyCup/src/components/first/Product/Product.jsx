import styles from "./Product.module.css";
import { images } from "@assets/images";

export const Product = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        the valentine's day quencher H2.0 flowstate tumblr | 0.8L
      </h1>

      <p className={styles.priceHeader}>$47.00</p>

      <div className={styles.productImageContainer}>
        <img
          className={styles.productImage}
          src={images.stanleyCup}
          alt="Stanley Cup"
        />
      </div>

      <button className={styles.button3D}>
        <img src={images.view3d} alt="3D ICON"></img>
        <p>View in 3D</p>
      </button>

      <div className={styles.pageIndicator}>
        <div className={styles.pageIndicatordots}></div>
        <div className={styles.pageIndicatordots}></div>
        <div className={styles.pageIndicatordots}></div>
        <div className={styles.pageIndicatordots}></div>
        <div className={styles.pageIndicatordots}></div>
      </div>

      <div className={styles.colourName}>
        <p>Color: Berry Truffle</p>
      </div>

      {/* different color options */}
      <div className={styles.colorOptionsContainer}>
        <div className={styles.colourOptions}>
          <img src={images.stanleyCup} alt="Stanley Cup" />
        </div>

        <div className={styles.colourOptions}>
          <img src={images.stanleyCup} alt="Stanley Cup" />
        </div>

        <div className={styles.colourOptions}>
          <img src={images.stanleyCup} alt="Stanley Cup" />
        </div>

        <div className={styles.colourOptions}>
          <img src={images.stanleyCup} alt="Stanley Cup" />
        </div>
      </div>

      <div className={styles.priceColumn}>
        <div className={styles.quantityOptions}>
          <p>QTY</p>
          <select className={styles.quantitySelect}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>

        <p className={styles.priceBottom}>$47.00</p>
      </div>

      <button className={styles.addToCart}>add to cart</button>

      <div className={styles.temperature}>
        <div className={styles.temperatureRow}>
          <img src={images.hot} />
          <p>N/A</p>
        </div>

        <div className={styles.temperatureRow}>
          <img src={images.cold} alt="Cold" />
          <p>9 HRS</p>
        </div>

        <div className={styles.temperatureRow}>
          <img src={images.ice} alt="Ice" />
          <p>40 HRS</p>
        </div>
      </div>
    </section>
  );
};
