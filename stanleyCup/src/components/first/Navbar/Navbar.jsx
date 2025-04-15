import styles from "./Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.logo}
        src="../assets/images/stanleyLogo.svg"
        alt="Stanley Logo"
      ></img>

      <div className={styles.menuBtn}>
        <img
          className={styles.menu}
          src="../assets/images/searchIcon.svg"
          alt="Search Bar"
        ></img>

        <img
          className={styles.menu}
          src="../assets/images/cartIcon.svg"
          alt="Shopping Cart"
        ></img>

        <img
          className={styles.menu}
          src="../assets/images/hamburgerIcon.svg"
          alt="Hamburger Menu"
        ></img>
      </div>
    </nav>
  );
};
