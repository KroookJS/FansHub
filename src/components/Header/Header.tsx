import styles from "./Header.module.css";
import { AiOutlineLogin } from "react-icons/ai";

export const Header = () => {
  return (
    <header className={styles.headerEl}>
      <main className={styles.container}>
        <div className={styles.wrapperHeader}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 style={{ fontSize: 20, cursor: "pointer", fontWeight: 500 }}>
              Tok
            </h2>
            <h2 className={styles.logoColor}>Fans</h2>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              paddingRight: 7,
            }}
          >
            <AiOutlineLogin
              style={{
                fontSize: 27,
                color: "var(--colors-btn)",
                background: "#e3edf608",
                boxShadow: "0 0 10px",
                borderRadius: 30,
                padding: 5,
              }}
            />
          </div>
        </div>
      </main>
    </header>
  );
};
