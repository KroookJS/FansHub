import { AiOutlinePlus } from "react-icons/ai";
import styles from "./plus.module.css";

export const PlusNavBar = () => {
  return (
    <button className={styles.btnUpload}>
      <AiOutlinePlus />
    </button>
  );
};
