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
  const [currentMenu, setCurrentMenu] = useState("room");
  const [roomArr, setRoomArr] = useState<any>([]);
  const [page, setPage] = useState(0);

  const [openMenu, setOpenMenu] = useState("room");
  const menu = [
    {
      id: "room",
      title: "Room",
      content: "더블침대, TV, 에어컨, 스탠드 조명, 거울, 드라이기, 행거",
    },
    {
      id: "bathroom",
      title: "Bathroom",
      content: "샴푸, 컨디셔너, 바디워시, 칫솔, 치약, 비누, 바디타올",
    },
    {
      id: "kitchen",
      title: "Kitchen",
      content:
        "식탁, 의자, 식기 세트, 냉장고, 전자레인지, 커피포트, 일리 커피머신, 커피 캡슐, 밥솥",
    },
    {
      id: "living",
      title: "Living",
      content: "TV, 청소기, 유아용 식탁 의자, 테이블, 와이파이",
    },
    {
      id: "pool",
      title: "Pool",
      content: "성인 튜브, 아동 튜브, 킥판",
    },
    {
      id: "outdoor",
      title: "Outdoor",
      content: "바베큐장, 테라스, 마당",
    },
  ];

  const handleMenu = (clickMenu: any) => {
    setCurrentMenu(clickMenu);
    setOpenMenu(openMenu === clickMenu ? null : clickMenu);
  };

  useEffect(() => {
    if (!currentMenu) return;
    if (currentMenu === "room") {
      setRoomArr([room1, room2]);
    }
    if (currentMenu === "bathroom") {
      setRoomArr([bathroom1]);
    }
    if (currentMenu === "kitchen") {
      setRoomArr([kitchen1, kitchen2, kitchen3]);
    }
    if (currentMenu === "living") {
      setRoomArr([living1]);
    }
    if (currentMenu === "pool") {
      setRoomArr([pool1]);
    }
    if (currentMenu === "outdoor") {
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
  }, [currentMenu]);

  useEffect(() => {
    if (openMenu !== null) return;
    setRoomArr([
      room1,
      room2,
      bathroom1,
      kitchen1,
      kitchen2,
      kitchen3,
      living1,
      pool1,
      outdoor1,
      outdoor2,
      outdoor3,
      outdoor4,
      outdoor5,
      outdoor6,
      outdoor7,
    ]);
  }, [openMenu]);

  const handleSlideChange = (swiper: any) => {
    switch (swiper.realIndex) {
      case 0:
        return setPage(swiper.realIndex + 1);
      case 1:
        return setPage(swiper.realIndex + 1);
      case 2:
        return setPage(swiper.realIndex + 1);
      case 3:
        return setPage(swiper.realIndex + 1);
      case 4:
        return setPage(swiper.realIndex + 1);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.roomContainer}>
        <div className={styles.roomWrap}>
          <div className={styles.roomImgWrap}>
            <div className={styles.paginationWrap}>
              <div className={styles.pageWrap}>
                <div>
                  {page}/{roomArr.length}
                </div>
              </div>
            </div>
            {openMenu && (
              <div className={styles.menuArrayWrap}>
                <div className={styles.menuWrap}>
                  <div>{openMenu}</div>
                </div>
              </div>
            )}
            <Swiper
              key={currentMenu}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              modules={[Autoplay, Navigation]}
              onSlideChange={(swiper: any) => handleSlideChange(swiper)}
              loop
            >
              {roomArr &&
                roomArr.map((item: any, idx: any) => (
                  <SwiperSlide key={idx}>
                    <img src={item} alt="main" />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>

          <div className={styles.roomInfoWrap}>
            {menu.map((item) => (
              <div key={item.id} className={styles.infoFrame}>
                <div
                  className={styles.infoTitle}
                  onClick={() => handleMenu(item.id)}
                >
                  <span>{item.title}</span>
                  <img
                    src={drop}
                    alt="drop"
                    style={{
                      transform:
                        openMenu === item.id
                          ? "rotate(270deg)"
                          : "rotate(90deg)",
                      transition: "transform 0.5s ease",
                    }}
                  />
                </div>
                <div
                  className={`${styles.infoContent} ${
                    openMenu === item.id ? styles.open : ""
                  }`}
                >
                  {item.content}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.explanWrap}>
            <div>
              <span>*&nbsp;</span>
              <span>
                네모는 방3, 화장실2, 주방, 거실, 실내 풀장, 야외로 이루어진 복층
                구조의 시설입니다.
              </span>
            </div>
            <div>
              <span>*&nbsp;</span>
              <span>구비된 물품은 다음과 같으며 변경될 수 있습니다.</span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Room;
