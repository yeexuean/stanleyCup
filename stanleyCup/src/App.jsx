import { BrowserRouter, Routes, Route } from "react-router-dom";
import styles from "./App.module.css";
import { Home } from "./pages/Home";
import { View3D } from "./pages/View3D";

function App() {
  return (
    <div style={{ minHeight: "100vh" }} className={styles.App}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/3d-view" element={<View3D />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
