import styles from "./record.module.less";
import { getStrTime } from "@/utils/getStrTime";
import CalendarCom from "react-calendar";

interface CalendarProps {
  setTime: (v: string) => void;
  lists: {
    description: string;
    id: number;
    recordTime: string;
  }[];
}

export default function Calendar({ setTime, lists }: CalendarProps) {
  return (
    <div className={styles.date}>
      <CalendarCom
        className={styles.calendar}
        onChange={(time: Date) => setTime(getStrTime(time))}
        locale={"en"}
        tileContent={({ date }) => {
          const strTime = getStrTime(date);
          const content =
            lists && lists.find((c) => getStrTime(new Date(c.recordTime)) === strTime);
          return <div className={styles.tile_context}>{content && content.description}</div>;
        }}
      />
    </div>
  );
}
