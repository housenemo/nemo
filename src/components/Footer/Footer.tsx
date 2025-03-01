import styles from "./Footer.module.scss";
// import kakao from "../../assets/footer/kakao.png";
// import insta from "../../assets/footer/insta.png";
import calendar from "../../assets/calendarG.png";
import insta from "../../assets/instaG.png";
import kakao from "../../assets/kakaoG.png";
import { useNavigate } from "react-router";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerWrap}>
        <div className={styles.titleWrap}>
          <span>네모</span>
        </div>
        <div>
          <span>경상북도 경주 진티길 24, 네모</span>
        </div>
        <div>
          <span>328-09-02947</span>
        </div>
        <div>
          <span>© 2025. nemo All rights reserved.</span>
        </div>
        <div className={styles.socialWrap}>
          <img
            onClick={() => window.open("https://pf.kakao.com/_PEdKn")}
            src={kakao}
            alt="sns"
          />
          <img
            onClick={() =>
              window.open(
                "https://www.instagram.com/house.nemo?igsh=dnM1NnBmb2U0OThy&utm_source=qr"
              )
            }
            src={insta}
            alt="sns"
          />
          <img
            onClick={() =>
              window.open(
                "https://map.naver.com/p/entry/place/1383941351?lng=129.3284443&lat=35.7815837&placePath=%2Froom%3Fac%3D1%26adm_lat%3D35.567097%26adm_long%3D129.376618%26bizId%3D1383941351%26debug%3D0%26deviceType%3Dpc%26lgl_lat%3D35.583017%26lgl_long%3D129.376925%26lgl_rcode%3D10200122%26ngn_country%3DKR%26nlu_query%3D%257B%2522qr%2522%253A%255B%257B%2522query%2522%253A%2522%25EA%25B2%25BD%25EC%25A3%25BC%2520%25EB%2584%25A4%25EB%25AA%25A8%2520%25ED%2592%2580%25EB%25B9%258C%25EB%259D%25BC%2522%252C%2522c_score%2522%253A0.711036%252C%2522score%2522%253A1.08711%252C%2522qr_category%2522%253A7%252C%2522qr_type%2522%253A36%257D%252C%257B%2522query%2522%253A%2522%25EB%2584%25A4%25EB%25AA%25A8%2520%25ED%2595%2598%25EC%259A%25B0%25EC%258A%25A4%2522%252C%2522c_score%2522%253A0.645%252C%2522score%2522%253A-3.399%252C%2522qr_category%2522%253A4%252C%2522qr_type%2522%253A31%257D%255D%252C%2522nluQuery%2522%253A%2522%25EA%25B2%25BD%25EC%25A3%25BC%2520%25EB%2584%25A4%25EB%25AA%25A8%25ED%2595%2598%25EC%259A%25B0%25EC%258A%25A4%2522%257D%26nqx_theme%3D%257B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522accommodation%2522%252C%2522source%2522%253A%2522TOS%2522%257D%252C%2522sub%2522%253A%255B%257B%2522name%2522%253A%2522location%2522%257D%255D%257D%257D%26r1%3D%25EC%259A%25B8%25EC%2582%25B0%25EA%25B4%2591%25EC%2597%25AD%25EC%258B%259C%26r2%3D%25EB%25B6%2581%25EA%25B5%25AC%26r3%3D%25ED%259A%25A8%25EB%25AC%25B8%25EB%258F%2599%26rcode%3D10200123%26rev%3D45%26sm%3Dtab_hty.top%26spq%3D0%26ssc%3Dtab.nx.all%26target%3Dpc%26where%3Dnexearch%26x%3D129.376618%26y%3D35.567097&searchType=place&c=15.00,0,0,0,dh"
              )
            }
            src={calendar}
          />
          {/* 네이버예약아이콘 실시간예약아이콘 */}
        </div>
        <div className={styles.copyWrap}>
          <span>© 2025. nemo All rights reserved.</span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
