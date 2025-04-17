import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./Product.module.css";
import { images } from "@assets/images";
import { Link } from "react-router-dom";

const colorVariants = {
  "Berry Truffle": [
    images.stanleyCup,
    images.cup2,
    images.cup3,
    images.cup4,
    images.cup5,
  ],
  "Light Pink": [
    images.stanleyCup,
    images.cup2,
    images.cup3,
    images.cup4,
    images.cup5,
  ],
  "Dark Purple": [
    images.stanleyCup,
    images.cup2,
    images.cup3,
    images.cup4,
    images.cup5,
  ],
  "Cotton Candy": [
    images.stanleyCup,
    images.cup2,
    images.cup3,
    images.cup4,
    images.cup5,
  ],
  Raspberry: [
    images.stanleyCup,
    images.cup2,
    images.cup3,
    images.cup4,
    images.cup5,
  ],
  "Dark Plum": [
    images.stanleyCup,
    images.cup2,
    images.cup3,
    images.cup4,
    images.cup5,
  ],
};

export const Product = () => {
  const [selectedColor, setSelectedColor] = useState("Berry Truffle");
  const [swiperInstance, setSwiperInstance] = useState(null);
  const paginationEL = `.${styles.customPagination}`;

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>
        the valentine's day quencher H2.0 flowstate tumblr | 0.8L
      </h1>

      <p className={styles.priceHeader}>$47.00</p>

      {/* image swipe section */}
      <div className={styles.productImageContainer}>
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            el: paginationEL,
          }}
          spaceBetween={20}
          slidesPerView={1}
          className={styles.swiperContainer}
        >
          {colorVariants[selectedColor].map((img, i) => (
            <SwiperSlide key={i}>
              <img
                className={styles.productImage}
                src={img}
                alt={`Angle ${i + 1}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className={styles.customPagination}></div>

      <Link to="/3d-view" className={styles.button3D}>
        <img src={images.view3d} alt="3D icon" />
        <p>View in 3D</p>
      </Link>

      {/* <div className={styles.pageIndicator}>
        {colorVariants[selectedColor].map((_, i) => (
          <div
            key={i}
            className={`${styles.pageIndicatordots} ${
              currentIndex === i ? styles.active : " "
            }`}
          />
        ))}
      </div> */}

      <div className={styles.colourName}>
        <p>Color: {selectedColor}</p>
      </div>

      {/* different color options */}
      <div className={styles.colorOptionsContainer}>
        {Object.keys(colorVariants).map((colorName) => (
          <div
            key={colorName}
            className={`${styles.colorOption} ${
              selectedColor === colorName ? styles.selected : " "
            }`}
            onClick={() => {
              swiperInstance?.slideTo(0);
              setSelectedColor(colorName);
            }}
          >
            <img
              src={colorVariants[colorName][0]}
              alt={colorName}
              className={styles.colorImage}
            />
          </div>
        ))}
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
