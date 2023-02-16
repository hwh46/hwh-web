import styles from "@/app.module.less";
import Nav from "./view/Nav";
import Provider from "./Provider";
import { ThemeContext } from "@/ThemeContext";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <ThemeContext>
      <div className={styles._}>
        {pathname !== "/login" && <Nav />}
        <Provider />
      </div>
    </ThemeContext>
  );
}

export default App;
