import styles from "@/app.module.less";
import Nav from "./view/Nav";
import Provider from "./Provider";
import { ThemeContext } from "@/ThemeContext";
import "react-calendar/dist/Calendar.less";

function App() {
  return (
    <ThemeContext>
      <div className={styles._}>
        <Nav />
        <Provider />
      </div>
    </ThemeContext>
  );
}

export default App;
