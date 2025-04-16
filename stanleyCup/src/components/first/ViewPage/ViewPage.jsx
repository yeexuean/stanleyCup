import { useState } from "react";
import styles from "./ViewPage.module.css";
import { images } from "@assets/images";
import { StanleyCupModel } from "../../stanleyCupModel";
import { Link } from "react-router-dom";

const colorOptions = [
  { name: "Berry Truffle", hex: "#BD3A88" },
  { name: "Raspberry", hex: "#C63773" },
  { name: "Dark Plum", hex: "#7C2F4F" },
  { name: "Pink Blush", hex: "#F6A3D2" },
  { name: "Bubblegum", hex: "#FB3F8E" },
  { name: "Cotton Candy", hex: "#FF87B9" },
];

export const ViewPage = () => {
  const [selectedColor, setSelectedColor] = useState("Berry Truffle");
  return (
    <section className={styles.container}>
      <Link to="/" className={styles.prevPage}>
        <div className={styles.grayBG}></div>
      </Link>

      <div className={styles.header}>
        <h2>the valentine's day quencher h2.0 flowstate tumblr | 0.8L</h2>
        <p>$47.00</p>
        <div className={styles.modelContainer}>
          <StanleyCupModel />
        </div>
      </div>

      <div className={styles.colorContainer}>
        <div className={styles.colorOptions}>
          <p>{selectedColor}</p>
          <div className={styles.colorRow}>
            {colorOptions.map((color, index) => (
              <div
                key={index}
                className={`${styles.colorChoice} ${
                  selectedColor === color.name ? styles.selected : " "
                }`}
                style={{ backgroundColor: color.hex }}
                onClick={() => setSelectedColor(color.name)}
              ></div>
            ))}
          </div>
        </div>

        <button className={styles.button}>
          <img src={images.basket} alt="Add to Cart basket" />
        </button>
      </div>

      <div className={styles.extras}>
        <div className={styles.extraThing}>
          <img src={images.ar} alt="AR icon" />
          <div className={styles.extraDescription}>
            <h4>Preview in AR</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>

        <div className={styles.extraThing}>
          <img src={images.customised} alt="AR icon" />
          <div className={styles.extraDescription}>
            <h4>Customise your Stanley Cup</h4>
            <p>Lorem ipsum</p>
          </div>
        </div>
      </div>
    </section>
  );
};
