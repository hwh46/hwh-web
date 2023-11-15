import styles from "./record.module.less";
import { Input, message } from "antd";
import { ChangeEvent, useEffect, useState } from "react";
import { RecordAll } from "@/api/record";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store";
import { updateAsync } from "@/store/reducers/Record";
import { getStrTime } from "@/utils/getStrTime";

interface ViewProps {
  time: string;
  lists: RecordAll[];
}

export default function RecordView({ time }: ViewProps) {
  const { lists } = useSelector((state: RootState) => state.recordList);
  const { TextArea } = Input;
  const [textValue, setTextValue] = useState<string>("");
  const [flag, setFlag] = useState<boolean>(false);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    let timer: number;
    try {
      if (flag) {
        timer = setTimeout(() => {
          dispatch(updateAsync({ recordTime: time, description: textValue }));
          setFlag(false);
        }, 2000);
      }
    } catch (e: any) {
      message.error(e);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [flag, textValue]);

  useEffect(() => {
    if (lists) {
      const current = lists.find((item) => getStrTime(new Date(item.recordTime)) === time);
      if (current) {
        setTextValue(current.description);
      } else {
        setTextValue("");
      }
    }
  }, [time, lists]);

  const handle = (e: ChangeEvent<{ value: string }>) => {
    setTextValue(e.target.value);
    setFlag(true);
  };

  return (
    <>
      <div className={styles.header}>{time}</div>
      <div className={styles.content}>
        <TextArea
          value={textValue}
          onChange={handle}
          className={styles.text}
          placeholder={"输入想输入的哦"}
          autoSize={{ minRows: 10, maxRows: 10 }}
          bordered={false}
        />
      </div>
    </>
  );
}
