import { useState } from "react";
import styles from "./Extras.module.css";
import { images } from "@assets/images";

const faqList = [
  {
    question: "Can the Stanley Thermoses be used for cold beverages?",
    answer:
      " Stanley vacuum bottle retain heat just well as they do cold,so you can perfectly use your Stanley thermos for hot, cold or even iced beverages.",
  },
  {
    question: "Are Stanley Products Microwave Safe?",
    answer:
      "Most of the Stanley Products are made using Stainless Steel. Even items where Stainless Steel is not the main body material there may still be Stainless Steel in the hinges, handles and other places. As a result, it is not recommended that you put your Stanley products in the microwave. Doing so can result in damage to your product and appliance.",
  },
  {
    question: "Are Stanley Products Dishwasher Safe?",
    answer:
      "The bottom of your Stanley product will indicate if it is dishwasher safe. For these products it is always recommend that you put them on the top rack. Please hand-wash any items that are not dishwasher safe.",
  },
  {
    question: "Are Stanley Products Rust-Proof?",
    answer:
      "Stanley products are made of high-grade rush-proof stainless steel and will last a lifetime when properly cared for. If you are noticing corrosion that appears to be rust, it could be free-iron particles, dirt or residue that has contaminated the surface. To remove these particles, a standard, non-abrasive household cleaner can be used to free contaminants from the surface. These cleaners can be applied with bristle brushes, sponges, or clean cloths. A Stainless-Steel cleaner or polish can also be used. Soaking the product in a mixture of warm water and baking soda, white vinegar or lemon juice might also help. Repeat as necessary to get the desired result. After using cleaners, always wash your bottle thoroughly as recommended in our care and use instructions.",
  },
];

export const Extras = () => {
  const [openIndex, setOpenIndex] = useState(false);

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
            {faqList.map((item, index) => (
              <div key={index}>
                <div
                  className={`${styles.question} ${
                    openIndex === index ? styles.selected : " "
                  }`}
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <p>{item.question}</p>
                  <img
                    src={images.dropdown}
                    alt="Dropdown"
                    className={openIndex === index ? styles.open : " "}
                  />
                </div>
                {openIndex === index && (
                  <p className={styles.answer}>{item.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
