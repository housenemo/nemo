import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import main1 from "../../assets/main/main1.jpg";
import main2 from "../../assets/main/main2.jpg";
import main3 from "../../assets/main/main3.jpg";
import mliving1 from "../../assets/main/mliving1.jpg";
import mliving2 from "../../assets/main/mliving2.jpg";
import mroom1 from "../../assets/main/mroom1.jpg";
import mroom2 from "../../assets/main/mroom2.jpg";
import room2 from "../../assets/room/room2.jpg";
import pool2 from "../../assets/room/pool2.jpg";
import room8 from "../../assets/room/room8.jpg";
import kitchen5 from "../../assets/room/kitchen5.jpg";
import nemologo from "../../assets/nemologo.png";
import { useEffect, useMemo, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useNavigate } from "react-router-dom";
import { isDesktop, isEdge } from "react-device-detect";
import { throttle } from "lodash";
import MapBox from "../../hook/Map/Map";

declare global {
  interface Window {
    kakao: any;
  }
}
function Home() {
  const navigate = useNavigate();
  const mainRef = useRef<HTMLDivElement>(null);
  const [mainTop, setMainTop] = useState(true);
  const [progress, setProgress] = useState(0);
  const [page, setPage] = useState(0);

  const throttledScroll = useMemo(
    () =>
      throttle(() => {
        if (!mainRef.current) return;
        if (window.scrollY > mainRef.current.offsetTop) setMainTop(false);
        else setMainTop(true);
      }, 500),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", throttledScroll);
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [throttledScroll]);

  const bannerList = [{ image: mroom2, msg: "", url: "/" }, { image: main1 }];

  const handleSlideChange = (swiper: any) => {
    switch (swiper.realIndex) {
      case 0:
        setPage(swiper.realIndex + 1);
        return setProgress(20);
      case 1:
        setPage(swiper.realIndex + 1);
        return setProgress(40);
      case 2:
        setPage(swiper.realIndex + 1);
        return setProgress(60);
      case 3:
        setPage(swiper.realIndex + 1);
        return setProgress(80);
      case 4:
        setPage(swiper.realIndex + 1);
        return setProgress(100);
    }
  };

  // useEffect(() => {
  //   var container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스
  //   var options = {
  //     //지도를 생성할 때 필요한 기본 옵션
  //     center: new window.kakao.maps.LatLng(35.7815838, 129.3284443), //지도의 중심좌표.
  //     level: 3, //지도의 레벨(확대, 축소 정도)
  //   };

  //   var map = new window.kakao.maps.Map(container, options);

  //   var imageSrc =
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkirnWSyEpMCChIBsv9wDrieZ8atiR9bMAvA&s", // 마커이미지의 주소입니다
  //     imageSize = new window.kakao.maps.Size(50, 30), // 마커이미지의 크기입니다
  //     imageOption = { offset: new window.kakao.maps.Point(19, -5) };

  //   var markerImage = new window.kakao.maps.MarkerImage(
  //     imageSrc,
  //     imageSize,
  //     imageOption
  //   );
  //   var markerPosition = new window.kakao.maps.LatLng(129.3284443, 35.7815837);
  //   map.setCenter(new window.kakao.maps.LatLng(129.3284443, 35.7815837));
  //   var centerPosition = map.getCenter();
  //   var marker = new window.kakao.maps.Marker({
  //     position: centerPosition,
  //     image: markerImage,
  //   });

  //   marker.setMap(map);
  // }, []);

  return (
    <>
      <Header mainTop={mainTop} />
      <div
        className={`${styles.homeContainer} ${
          isDesktop ? styles.isDesktop : ""
        }`}
      >
        <div className={styles.homeWrap}>
          <div className={styles.mainBannerWrap}>
            <div className={styles.bannerWrap}>
              <Swiper
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={(swiper: any) => handleSlideChange(swiper)}
                loop={true}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
              >
                {bannerList.map((item, idx) => (
                  <SwiperSlide
                    key={idx}
                    onClick={() => {
                      if (item.url) navigate(item.url);
                    }}
                  >
                    <img src={item.image} alt="mainBanner1" />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* <div className={styles.paginationWrap}>
              <div className={styles.pageWrap}>
                <div>
                  {page}/{bannerList.length}
                </div>
              </div>
            </div> */}
            {/* {isDesktop && (
              <div className={styles.progressWrap}>
                <div className={styles.progressbarWrap}>
                  <div
                    className={styles.progressbar}
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>
            )} */}
            <div ref={mainRef} className={styles.logoWrap}>
              <img src={nemologo} alt="nemologo" />

              {/* <span>NEMOHOUSE</span> */}
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div className={styles.mapWrap}>
              {/* <div
                id="map"
                style={{
                  width: "100vw",
                  height: "100vh",
                }}
              ></div> */}
              {/* <Map
                center={{ lat: 129.3284443, lng: 35.7815837 }}
                style={{ width: "1000px", height: "600px" }}
                level={3}
              ></Map> */}
              <MapBox />
            </div>
            {/* <div className={styles.infoWrap}>
              <ScrollAnimation
                startingPoint="left"
                duration={5}
                amount="xl"
                delay={0}
                repeat={false}
              >
                <div className={styles.title}>
                  <span>
                    네모하우스,
                    <br />
                    특별한 여행의 시작
                  </span>
                  <span>in Gyeongju</span>
                </div>
              </ScrollAnimation>
              <div className={styles.turnTitle}>
                <div className={styles.sliderContainer}>
                  <div className={styles.sliderWrapper}>
                    <div className={styles.slidingText}>
                      <p>
                        <span>NEMO &nbsp;</span> HOUSE&nbsp;
                      </p>
                      <p>
                        <span>NEMO &nbsp;</span> HOUSE&nbsp;
                      </p>
                      <p>
                        <span>NEMO &nbsp;</span> HOUSE&nbsp;
                      </p>
                    </div>
                    <div className={styles.slidingTextDelayed}>
                      <p>
                        <span>NEMO &nbsp;</span> HOUSE&nbsp;
                      </p>
                      <p>
                        <span>NEMO &nbsp;</span> HOUSE&nbsp;
                      </p>
                      <p>
                        <span>NEMO &nbsp;</span> HOUSE&nbsp;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ScrollAnimation
                startingPoint="right"
                duration={5}
                amount="xl"
                delay={0}
                repeat={false}
              >
                <div className={styles.infoText}>
                  <span>네모</span>는 단순히 숙박 공간을 제공하는 것을 넘어,
                  <br /> 머무는 동안 기쁨이 가득한 추억을 선물하고 싶습니다
                  <br /> 가족, 친구들과 함께하는 소중한 순간을 <span>네모</span>
                  와 함께해요
                </div>
              </ScrollAnimation>
            </div>
            <div className={styles.imgListWrap}>
              <div className={styles.roomWrap}>
                <ScrollAnimation
                  startingPoint="left"
                  duration={3}
                  amount="xl"
                  delay={0}
                  repeat={true}
                >
                  <img src={kitchen5} alt="room" />
                </ScrollAnimation>
                <ScrollAnimation
                  startingPoint="right"
                  duration={3}
                  amount="xl"
                  delay={0}
                  repeat={true}
                >
                  <div className={styles.titleWrap}>
                    <span>Kitchen and Living</span>
                  </div>
                </ScrollAnimation>
              </div>
              <div className={styles.kitchenWrap}>
                <ScrollAnimation
                  startingPoint="left"
                  duration={3}
                  amount="xl"
                  delay={0}
                  repeat={true}
                >
                  <div className={styles.leftWrap}>
                    <img src={mroom2} alt="room" />
                  </div>
                </ScrollAnimation>
                <ScrollAnimation
                  startingPoint="right"
                  duration={3}
                  amount="xl"
                  delay={0}
                  repeat={true}
                >
                  <div className={styles.rightWrap}>
                    <img src={room8} alt="room" />
                    <div className={styles.titleWrap}>
                      <span>Room </span>
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
              <ScrollAnimation
                startingPoint="right"
                duration={3}
                amount="xl"
                delay={0}
                repeat={true}
              >
                <div className={styles.poolWrap}>
                  <div className={styles.poolImgWrap}>
                    <img src={main1} alt="room" />
                    <img src={main3} alt="room" />
                    <img src={pool2} alt="room" />
                  </div>
                  <div className={styles.titleWrap}>
                    <span>Pool and Outdoor</span>
                  </div>
                </div>
              </ScrollAnimation>
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
