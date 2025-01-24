import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Recommend.module.scss";
import rec1 from "../../assets/recommend/rec1.jpg";
import rec2 from "../../assets/recommend/rec2.jpg";
import rec3 from "../../assets/recommend/rec3.jpg";
import rec4 from "../../assets/recommend/rec4.jpg";
import rec5 from "../../assets/recommend/rec5.jpg";
import rec6 from "../../assets/recommend/rec6.jpg";
import { isMobile } from "react-device-detect";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";

function Recommend() {
  return (
    <div>
      <Header />
      <div
        className={`${styles.recContainer} ${isMobile ? styles.isMobile : ""}`}
      >
        <div className={styles.recWrap}>
          <div className={styles.recFrame}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recImgWrap}>
                <img src={rec1} alt="" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recInfoWrap}>
                <span className={styles.title}>불국사</span>
                <span className={styles.time}>차량 5분 / 도보 13분</span>
                <span className={styles.content}>
                  역사의 깊이를 느낄 수 있는 곳이에요.
                  <br /> 불교의 신비로운 매력을 경험해요.{isMobile && <br />}
                  봄에는 예쁜 겹벚꽃이 피어요 피크닉 하기에 좋아요.
                </span>
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.recFrame2}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recInfoWrap}>
                <span className={styles.title}>토함지</span>
                <span className={styles.time}>차량 5분 / 도보 18분</span>
                <span className={styles.content}>
                  문화와 자연이 아름답게 어우러진 곳이에요.
                  <br /> 짙은 초록나무와 물에 비치는 단풍이 정말 이뻐요.
                  {isMobile && <br />}
                  산책길을 따라 아름다운 자연을 즐겨요.
                </span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recImgWrap}>
                <img src={rec2} alt="" />
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.recFrame}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recImgWrap}>
                <img src={rec3} alt="" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recInfoWrap}>
                <span className={styles.title}>황리단길</span>
                <span className={styles.time}>
                  차량 25분 / 버스 10번, 11번 50분
                </span>
                <span className={styles.content}>
                  한국 전통 가옥과 돌담길이 어우러진 인기 코스에요.
                  <br />
                  황리단길을 따라 걸으며 한국의 정취를 느껴봐요.
                </span>
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.recFrame2}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recInfoWrap}>
                <span className={styles.title}>월정교</span>
                <span className={styles.time}>
                  차량 25분 / 버스 10번, 11번 50분
                </span>
                <span className={styles.content}>
                  물길을 가로지르는 한국 전통 건축물이 아름다워요.
                  <br /> 노오란 은행 물결과 돌다리를 담아보세요.
                </span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recImgWrap}>
                <img src={rec4} alt="" />
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.recFrame}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recImgWrap}>
                <img src={rec5} alt="" />
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recInfoWrap}>
                <span className={styles.title}>황룡원</span>
                <span className={styles.time}>차량 11분 / 버스 11번 25분</span>
                <span className={styles.content}>
                  아름다운 연못과 정원이 어우러진 곳이에요.
                  <br /> 벚꽃 명소로 유명하지만 목탑과 주변 분위기의 조화가
                  사계절 매력적이에요.
                </span>
              </div>
            </ScrollAnimation>
          </div>
          <div className={styles.recFrame2}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recInfoWrap}>
                <span className={styles.title}>산림환경연구원</span>
                <span className={styles.time}>
                  차량 20분 / 버스 10번, 711번 30분
                </span>
                <span className={styles.content}>
                  신선한 공기와 푸른 숲속 경관이 아름다워요.
                  <br /> 자연 속에서 평화와 고즈넉함을 느껴봐요.
                </span>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
              repeat={false}
            >
              <div className={styles.recImgWrap}>
                <img src={rec6} alt="" />
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Recommend;
