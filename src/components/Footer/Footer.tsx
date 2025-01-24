import styles from "./Footer.module.scss";
import kakao from "../../assets/footer/kakao.png";
import insta from "../../assets/footer/insta.png";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrap}>
        <div className={styles.titleWrap}>
          <span>NEMO</span>
        </div>
        <div>
          <span>경상북도 경주 진티길 24, 네모</span>
        </div>
        <div>
          <span>01-1000-1000</span>
        </div>
        <div className={styles.socialWrap}>
          <span>© 2025. nemo All rights reserved.</span>
          <div>
            <img onClick={() => alert("준비중 입니다")} src={kakao} alt="sns" />
            <img
              onClick={() =>
                window.open(
                  "https://www.instagram.com/house.nemo?igsh=dnM1NnBmb2U0OThy&utm_source=qr"
                )
              }
              src={insta}
              alt="sns"
            />
            {/* 네이버예약아이콘 실시간예약아이콘 */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
