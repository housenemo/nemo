import styles from "./Header.module.scss";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import { useNavigate } from "react-router-dom";
import menu from "../../assets/main/menu.png";
import calendar from "../../assets/calendar.png";
import { useState } from "react";

function Header() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.headerContainer}>
      <div style={{ height: "50px" }}></div>
      <div className={styles.headerWrap}>
        <div className={styles.title} onClick={() => navigate("/")}>
          <span>NEMO</span>&nbsp;
          <span>HOUSE</span>
        </div>
        <div className={styles.menu}>
          <img onClick={() => alert("준비중 입니다.")} src={calendar} />
          <img onClick={() => setOpen((prev) => !prev)} src={menu} alt="menu" />
        </div>
        {/* 예약 네모로 작게 아이콘해서 오른쪽 날개배너처럼 따라다니게하기 */}
      </div>
      <div className={`${styles.menuWrap} ${open ? styles.openMenuWrap : ""}`}>
        <div onClick={() => navigate("/room")}>공간소개</div>
        <div onClick={() => navigate("/reservation")}>예약안내</div>
        {/* <div></div> */}
      </div>
    </div>
  );
}
export default Header;
