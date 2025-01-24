import styles from "./Room.module.scss";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import drop from "../../assets/room/drop.png";
import right from "../../assets/room/right.png";
import room1 from "../../assets/room/room1.jpg";
import room2 from "../../assets/room/room2.jpg";
import room3 from "../../assets/room/room3.jpg";
import room4 from "../../assets/room/room4.jpg";
import room5 from "../../assets/room/room5.jpg";
import room6 from "../../assets/room/room6.jpg";
import room7 from "../../assets/room/room7.jpg";
import room8 from "../../assets/room/room8.jpg";
import room9 from "../../assets/room/room9.jpg";
import living1 from "../../assets/room/living1.jpg";
import living2 from "../../assets/room/living2.jpg";
import kitchen1 from "../../assets/room/kitchen1.jpg";
import kitchen2 from "../../assets/room/kitchen2.jpg";
import kitchen3 from "../../assets/room/kitchen3.jpg";
import pool1 from "../../assets/room/pool1.jpg";
import pool2 from "../../assets/room/pool2.jpg";
import pool3 from "../../assets/room/pool3.jpg";
import bathroom1 from "../../assets/room/bathroom1.jpg";
import outdoor1 from "../../assets/room/outdoor1.jpg";
import outdoor2 from "../../assets/room/outdoor2.jpg";
import outdoor3 from "../../assets/room/outdoor3.jpg";
import outdoor4 from "../../assets/room/outdoor4.jpg";
import outdoor5 from "../../assets/room/outdoor5.jpg";
import outdoor6 from "../../assets/room/outdoor6.jpg";
import outdoor7 from "../../assets/room/outdoor7.jpg";

function Room() {
  const [isCurrent, setIsCurrent] = useState("room1");
  const [isKitchen, setIsKitchen] = useState(false);
  const [isLiving, setIsLiving] = useState(false);
  const [isPool, setIsPool] = useState(false);
  const [isFirst, setIsFirst] = useState(false);
  const [isSecond, setIsSecond] = useState(false);
  const [isThird, setIsThird] = useState(false);
  const [isFirstBathroom, setIsFirstBathroom] = useState(false);
  const [isSecondBathroom, setIsSecondBathroom] = useState(false);
  const [isOutdoor, setIsOutdoor] = useState(false);
  const [roomArr, setRoomArr] = useState<any>([]);

  useEffect(() => {
    if (!isCurrent) return;
    if (isCurrent === "room1") {
      setRoomArr([room1, room2]);
    }
    if (isCurrent === "room2") {
      setRoomArr([room3, room4]);
    }
    if (isCurrent === "room3") {
      setRoomArr([room5, room6, room7, room8, room9]);
    }
    if (isCurrent === "living") {
      setRoomArr([living1, living2]);
    }
    if (isCurrent === "kitchen") {
      setRoomArr([kitchen1, kitchen2, kitchen3]);
    }
    if (isCurrent === "pool") {
      setRoomArr([pool1, pool2, pool3]);
    }
    if (isCurrent === "bathroom1") {
      setRoomArr([bathroom1]);
    }
    if (isCurrent === "bathroom2") {
      setRoomArr([bathroom1]);
    }
    if (isCurrent === "outdoor") {
      setRoomArr([
        outdoor1,
        outdoor2,
        outdoor3,
        outdoor4,
        outdoor5,
        outdoor6,
        outdoor7,
      ]);
    }
  }, [isCurrent]);

  return (
    <>
      <Header />
      <div
        className={`${styles.roomContainer} ${isMobile ? styles.isMobile : ""}`}
      >
        <div className={styles.roomWrap}>
          {/* <div className={styles.kitchenRoomWrap}></div>
          <div className={styles.livingRoomWrap}></div>
          <div className={styles.poolRoomWrap}></div>
          <div className={styles.firstRoomWrap}></div>
          <div className={styles.secondRoomWrap}></div>
          <div className={styles.thirdRoomWrap}></div>
          <div className={styles.bathRoomWrap}></div> */}
          <div className={styles.roomImgWrap}>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
            >
              <div className={styles.stayInfoWrap}>
                <span>stay dohui</span>
              </div>
            </ScrollAnimation>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Autoplay, Navigation]}
              loop
            >
              {roomArr &&
                roomArr.map((item: any, idx: any) => (
                  <SwiperSlide key={idx}>
                    <img src={item} alt="main" />
                  </SwiperSlide>
                ))}
            </Swiper>
            {/* <div className={styles.leftMenuWrap}>
              <img src={right} alt="navi" />
            </div>
            <div className={styles.rightMenuWrap}>
              <img src={right} alt="navi" />
            </div> */}
          </div>
          <div className={styles.slideMenuWrap}>
            <div
              className={isCurrent === "room1" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("room1");
              }}
            >
              Room1
            </div>
            <div
              className={isCurrent === "room2" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("room2");
              }}
            >
              Room2
            </div>
            <div
              className={isCurrent === "room3" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("room3");
              }}
            >
              Room3
            </div>
            <div
              className={isCurrent === "living" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("living");
              }}
            >
              Living
            </div>
            <div
              className={isCurrent === "kitchen" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("kitchen");
              }}
            >
              Kitchen
            </div>
            <div
              className={isCurrent === "pool" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("pool");
              }}
            >
              Pool
            </div>
            <div
              className={isCurrent === "bathroom1" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("bathroom1");
              }}
            >
              Bathroom1
            </div>
            <div
              className={isCurrent === "bathroom2" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("bathroom2");
              }}
            >
              Bathroom2
            </div>
            <div
              className={isCurrent === "outdoor" ? styles.select : ""}
              onClick={() => {
                setIsCurrent("outdoor");
              }}
            >
              Outdoor
            </div>
          </div>
          <div className={styles.roomInfoWrap}>
            <div className={styles.roomExplanWrap}>
              * 도희는 방3, 화장실2, 실내 풀장, 부엌, 거실, 야외로 이루어진 복층
              구조의 시설입니다.
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsFirst((prev) => !prev);
                }}
              >
                <span>Room1</span>
                {/* <img
                  src={drop}
                  alt="drop"
                  style={{
                    transform: isFirst ? "rotate(270deg)" : "rotate(90deg)",
                  }}
                /> */}
              </div>
              <div
                className={`${styles.infoContent} ${
                  isFirst ? styles.open : ""
                }`}
              >
                슈퍼싱글, 거울, 드라이기
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsSecond((prev) => !prev);
                }}
              >
                <span>Room2</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isSecond ? styles.open : ""
                }`}
              >
                슈퍼싱글, 거울, 드라이기
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsThird((prev) => !prev);
                }}
              >
                <span>Room3</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isThird ? styles.open : ""
                }`}
              >
                슈퍼싱글, 거울, 드라이기, 테라스, 테라스 테이블, 테라스 의자2
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsLiving((prev) => !prev);
                }}
              >
                <span>Living</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isLiving ? styles.open : ""
                }`}
              >
                쇼파, 빔프로젝트, 청소기
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsKitchen((prev) => !prev);
                }}
              >
                <span>Kitchen</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isKitchen ? styles.open : ""
                }`}
              >
                물(인당 500ml 1병), 냄비, 세제, 수세미, 식탁, 의자8
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsPool((prev) => !prev);
                }}
              >
                <span>Pool</span>
              </div>
              <div
                className={`${styles.infoContent} ${isPool ? styles.open : ""}`}
              >
                튜브, 공
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsFirstBathroom((prev) => !prev);
                }}
              >
                <span>Bathroom1</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isFirstBathroom ? styles.open : ""
                }`}
              >
                친환경 어메니티(칫솔, 면도기), 치약
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsSecondBathroom((prev) => !prev);
                }}
              >
                <span>Bathroom2</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isSecondBathroom ? styles.open : ""
                }`}
              >
                친환경 어메니티(칫솔, 면도기), 치약
              </div>
            </div>
            <div className={styles.infoFrame}>
              <div
                className={styles.infoTitle}
                onClick={() => {
                  setIsOutdoor((prev) => !prev);
                }}
              >
                <span>Outdoor</span>
              </div>
              <div
                className={`${styles.infoContent} ${
                  isOutdoor ? styles.open : ""
                }`}
              >
                바베큐장, 테이블, 의자
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Room;
