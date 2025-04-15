import styles from "./App.module.css";
import { Navbar } from "./components/first/Navbar/Navbar";
import { Product } from "./components/first/Product/Product";
import { Details } from "./components/first/Details/Details";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className={styles.App}>
      <Navbar />
      <Product />
      <Details />
    </div>
  );
}

export default App;
