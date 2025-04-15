import styles from "./Navbar.module.css";
import { images } from "@assets/images";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.logo} src={images.logo} alt="Stanley Logo"></img>

      <div className={styles.menuBtn}>
        <img className={styles.menu} src={images.search} alt="Search Bar"></img>

        <img
          className={styles.menu}
          src={images.cart}
          alt="Shopping Cart"
        ></img>

        <img
          className={styles.menu}
          src={images.hamburger}
          alt="Hamburger Menu"
        ></img>
      </div>
    </nav>
  );
};
