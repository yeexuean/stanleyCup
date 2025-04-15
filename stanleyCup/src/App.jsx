import styles from "./App.module.css";
import { Navbar } from "./components/first/Navbar/Navbar";
import { Product } from "./components/first/Product/Product";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Product />
    </div>
  );
}

export default App;
