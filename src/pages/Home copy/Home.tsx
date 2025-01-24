import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import styles from "./Home.module.scss";
import { ScrollAnimation } from "@lasbe/react-scroll-animation";
import stay1 from "../../assets/main/stay1.jpg";
import stay2 from "../../assets/main/stay2.jpg";
import stay3 from "../../assets/main/stay3.jpg";
import stay4 from "../../assets/main/stay4.jpg";
import stay5 from "../../assets/main/stay5.jpg";
import test from "../../assets/room.jpeg";
import wow from "../../assets/wow.jpeg";
import checkin from "../../assets/checkin.png";
import checkout from "../../assets/checkout.png";
import guest from "../../assets/guest.png";
import amenity from "../../assets/amenity.png";
import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { isMobile } from "react-device-detect";

declare global {
  interface Window {
    kakao: any;
  }
}
function Home() {
  const mainArr = [stay1, stay3, stay4, stay5, stay2];
  const stayArr = [test, test, test, test];

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
  //   var markerPosition = new window.kakao.maps.LatLng(35.7815838, 129.3284443);
  //   map.setCenter(new window.kakao.maps.LatLng(35.7815838, 129.3284443));
  //   var centerPosition = map.getCenter();
  //   var marker = new window.kakao.maps.Marker({
  //     position: centerPosition,
  //     image: markerImage,
  //   });

  //   marker.setMap(map);
  // }, []);
  return (
    <>
      <Header />
      <div
        className={`${styles.homeContainer} ${isMobile ? styles.isMobile : ""}`}
      >
        <div className={styles.homeWrap}>
          <div className={`${styles.contentWrap} ${styles.mainWrap}`}>
            <div className={styles.left}>
              <ScrollAnimation
                startingPoint="left"
                duration={2}
                amount="xl"
                delay={0}
                repeat={false}
              >
                <span>
                  스테이 도희
                  <br /> 특별한 경험을,
                  <span className={styles.area}>in Gyeongju</span>
                </span>
              </ScrollAnimation>
              <ScrollAnimation
                startingPoint="right"
                duration={2}
                amount="xl"
                delay={0}
                repeat={false}
              >
                <span>
                  {/* 스테이 도희는 편안한 침실, 아늑한 공간, 감각적인 인테리어로
                  <br />
                  단순히 숙박공간을 제공하는 것을 넘어, 특별한 경험을
                  <br />
                  선사하고자 노력하고 있습니다. */}
                  도희는 단순히 숙박 공간을 제공하는 것을 넘어,
                  <br />
                  머무는 동안 기쁨이 가득한 추억을 선물하고 싶습니다.
                  <br />
                  가족, 친구, 지인과의 추억을 도희와 함께해요
                  <br />
                </span>
              </ScrollAnimation>
            </div>

            <div className={styles.right}>
              <Swiper
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                modules={[Autoplay, Navigation]}
                loop
              >
                {mainArr &&
                  mainArr.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <img src={item} alt="main" />
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          {/* <div className={`${styles.contentWrap} ${styles.infoWrap}`}>
            <ScrollAnimation
              startingPoint="left"
              duration={2}
              amount="xl"
              delay={0}
            >
              <div className={styles.borderWrap}></div>
            </ScrollAnimation>
            <span>도 희</span>
            <span>
              <br />
              길 도, 기쁨 희<br />
              도희에 머무는 동안 기쁨이 가득한 추억을 선물하고 싶습니다
              <br />
              가족, 친구, 지인과의 추억을 도희와 함께해요
              <br />
              도희는 경주 불국사 근처에 위치한 풀빌라 숙소로, <br />
              최대 8명까지 수용가능한 숙박 시설을 제공합니다 :)
            </span>
            <ScrollAnimation
              startingPoint="right"
              duration={2}
              amount="xl"
              delay={0}
            >
              <div className={styles.borderWrap}></div>
            </ScrollAnimation>
          </div> */}

          <div className={`${styles.contentWrap} ${styles.stayWrap}`}>
            {/* {stayArr.map((item, idx) => (
              <img key={idx} src={test} alt="stay" />
            ))} */}
            {/* <Swiper
              slidesPerView={4}
              spaceBetween={15}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Autoplay, Navigation]}
              loop
            >
              {mainArr.map((item, idx) => (
                <SwiperSlide>
                  <img
                    className={styles.roomImg}
                    key={idx}
                    src={item}
                    alt="stay"
                  />
                </SwiperSlide>
              ))}
            </Swiper> */}
            <ScrollAnimation
              startingPoint="bottom"
              duration={2}
              amount="xl"
              delay={0}
            >
              <div className={styles.stayInfoWrap}>
                <div>
                  <img src={guest} alt="guest" />
                  <span>guest</span>
                  <span>기준 4인 / 최대 8인</span>
                </div>
                <div>
                  <img src={checkin} alt="check" />
                  <span>check in</span>
                  <span>15:00</span>
                </div>
                <div>
                  <img src={checkout} alt="check" />
                  <span>check out</span>
                  <span>11:00</span>
                </div>
                <div>
                  <img src={amenity} alt="amenity" />
                  <span>amenity</span>
                  <span>
                    샴푸, 컨디셔너, 바디워시, 일회용세면도구(칫솔, 치약), 수건,
                    드라이기, 에어랩, 튜브, 공기주입기, 캡슐커피, WIFI, TV
                  </span>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className={`${styles.contentWrap} ${styles.mapWrap}`}>
            {/* <div id="map" style={{ width: "80%", height: "400px" }}></div> */}
            {/* <Map
              center={{ lat: 35.7815838, lng: 129.3284443 }}
              style={{ width: '80%', height: '400px' }}
              level={3}
            >
              <MapMarker
                position={{ lat: 35.7815838, lng: 129.3284443 }}
              ></MapMarker>
            </Map> */}
            <p>경상북도 경주 진티길 24, 도희</p>
            <span>
              숙소 찾아오는 방법{isMobile && <br />} ( How to get to the
              accommodation )
            </span>
            <div>
              <span>
                경주역
                <br /> 차량 35분 / 버스 50번, 51번 → 10번, 11번 1시간 10분
              </span>
              <span>
                경주시외•고속버스터미널
                <br /> 차량 25분 / 버스 10번, 11번 40분
              </span>
              <span>
                불국사시외버스터미널
                <br /> 차량 6분 / 버스 11번, 711번 15분
              </span>
            </div>
            <span>주요 관광지{isMobile && <br />} ( Tourist destination )</span>
            <div>
              <span>
                불국사
                <br />
                차량 5분 / 도보 13분
              </span>
              <span>
                토함지
                <br />
                차량 5분 / 도보 18분
              </span>
              <span>
                황리단길
                <br />
                차량 25분 / 버스 10번, 11번 50분
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
