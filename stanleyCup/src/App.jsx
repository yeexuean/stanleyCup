import styles from "./App.module.css";
import { Navbar } from "./components/first/Navbar/Navbar";
import { Product } from "./components/first/Product/Product";
import { Details } from "./components/first/Details/Details";
import StanleyCupModel from "./components/stanleyCupModel.jsx";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className={styles.App}>
      <Navbar />
      <Product />
      <Details />
      <StanleyCupModel />
    </div>
  );
}

export default App;
