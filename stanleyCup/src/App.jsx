import styles from "./App.module.css";
import { Navbar } from "./components/first/Navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
    </div>
  );
}

export default App;
