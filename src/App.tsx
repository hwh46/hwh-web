import styles from "@/app.module.less";
import Nav from "./view/Nav";
import Provider from "./Provider";
import { Thecontext } from "@/ThemeContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import bb from "./assets/bb.jpg";

function App() {
  const { pathname } = useLocation();
  const { theme } = useContext(Thecontext);

  return (
    <div className={styles._}>
      {pathname !== "/login" && <Nav />}
      <div className={styles.bgc} style={{ backgroundImage: `url(${bb})` }}>
        <Provider />
      </div>
    </div>
  );
}

export default App;
