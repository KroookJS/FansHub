import React, { FC } from "react";
import { AiFillHome, AiTwotoneThunderbolt } from "react-icons/ai";

import { MdOutlineFavoriteBorder } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import { PlusNavBar } from "./ui/PlusNavBar";

import styles from "./NavBarModel.module.css";

const iconStyle = {
  width: "35px",
  fontSize: "24px",
  color: "rgb(246 223 180);",
};

type TProps = {
  count?: number;
};
const NavBarModelMemo: FC<TProps> = () => {
  return (
    <div className={styles.navBarModelConrainer}>
      <AiFillHome style={iconStyle} />

      <AiTwotoneThunderbolt style={iconStyle} />

      <PlusNavBar />

      <div style={{ position: "relative" }}>
        <MdOutlineFavoriteBorder style={iconStyle} />
        <div className={styles.iconCount}>3</div>
      </div>

      <CgProfile style={iconStyle} />
    </div>
  );
};

export const NavBarModel = React.memo(NavBarModelMemo);
