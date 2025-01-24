import Header from "../../components/Header/Header";
import styles from "./Reservation.module.scss";
import community from "../../assets/community.png";
import card from "../../assets/card.png";
import checkin from "../../assets/checkin.png";
import guest from "../../assets/guest.png";
import pool from "../../assets/pool.png";
import free from "../../assets/free.png";
import drop from "../../assets/room/drop.png";
import Footer from "../../components/Footer/Footer";
import { useState } from "react";

function Reservation() {
  const [currentOpen, setCurrentOpen] = useState("reser");

  const handleOpen = (menu: any) => {
    setCurrentOpen(currentOpen === menu ? null : menu);
  };
  return (
    <div>
      <Header />
      <div className={styles.resContainer}>
        <div className={styles.alertWrap}>
          <span>
            ✔ 네모 이용 시 아래의 안내사항을 반드시 읽어주시기 바랍니다.
          </span>
        </div>
        <div className={styles.resWrap}>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("reser")}>
              <span>01. 예약안내</span>
              <img
                src={drop}
                alt="drop"
                style={{
                  transform:
                    currentOpen === "reser"
                      ? "rotate(270deg)"
                      : "rotate(90deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className={`${styles.content} ${
                currentOpen === "reser" ? styles.contentOpenWrap : ""
              }`}
            >
              <div>
                <div>
                  <span className={styles.grey}>CHECK IN</span>
                  <span> 15:00 / </span>
                  <span className={styles.grey}>CHECK OUT</span>
                  <span> 11:00</span>
                </div>
              </div>
              <div>
                <div>
                  <span className={styles.grey}>기준인원</span>
                  <span> 4인 / </span>
                  <span className={styles.grey}>최대인원</span>
                  <span> 8인</span>
                </div>
                <div className={styles.subTextWrap}>
                  <span>기준인원 초과 시 1인당 20,000원이 부과됩니다.</span>
                  <br />
                  <span>24개월 이하 영아 추가 시 무료</span>
                </div>
              </div>
              <div>
                <div>미온수풀 50,000원</div>
                <div className={styles.subTextWrap}>
                  <span>온도는 계절에 따라 상이합니다. (28도 - 32도)</span>
                  <br />
                  <span> 이용 가능 시간 ~ 21:00</span>
                </div>
              </div>
              <div>
                <div>무료 이용 시설</div>
                <div className={styles.subTextWrap}>
                  <span>바베큐장</span>
                </div>
              </div>
              <div>
                <div>
                  <span className={styles.grey}>인스타</span>
                  <span> @house.nemo / </span>
                  <span className={styles.grey}>카카오톡</span>
                  <span> 준비중</span>
                </div>
                <div className={styles.subTextWrap}>
                  <span className={styles.grey}>전화 응대가 어렵습니다. </span>
                  <span>문자 또는 인스타DM 문의 부탁드립니다.</span>
                </div>
              </div>
              {/* <div>
                <div>계좌 안내</div>
                <div className={styles.subTextWrap}>
                  <span>농협 356-1057-6745-03</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("room")}>
              <span>02. 객실 이용안내</span>
              <img
                src={drop}
                alt="drop"
                style={{
                  transform:
                    currentOpen === "room" ? "rotate(270deg)" : "rotate(90deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className={`${styles.content} ${
                currentOpen === "room" ? styles.contentOpenWrap : ""
              }`}
            >
              <div>반려동물과 객실에 입실하실 수 없습니다.</div>
              <div>21:00시 이후 고성방가 및 소란행위 자제부탁드립니다.</div>
              <div>
                보호자 동반 없는 미성년자의 예약은 환불 없이 예약 취소됩니다.
              </div>
              <div>
                예약되지 않는 외부인 입실시 환불 없이 퇴실 요청할 수 있습니다.
              </div>
              <div>
                밤 10시 이후 스피커 사용 시 민원이 발생할 수 있으니
                삼가부탁드립니다.
              </div>
              <div>
                객실 내 비치된 비품(집기, 가구 등)들의 파손, 분실 시 비용을
                청구합니다.
              </div>
              <div>
                건물내 전체 금연구역입니다. 흡연 적발 시 퇴실 및 청소업체 비용
                청구됩니다.
              </div>
              <div>
                사전 협의 없는 상업적 촬영은 불가합니다. 위반 적발시 환불 없이
                퇴실조치 합니다.
              </div>
              <div>
                퇴실 전 사용한 식기는 설거지 해주시고, 쓰레기는 종류별로
                분리배출 부탁드립니다.
              </div>
              <div>
                객실 내 가구 및 소품은 위치를 옮기지 않도록 해 주시고, 퇴실 시
                다시 원상복구 바랍니다.
              </div>
              <div>
                투숙객의 부주의로 인해 발생한 안전사고 및 귀중품 분실 및 파손
                등은 책임지지 않습니다.
              </div>
              <div>
                화재사고 예방을 위해 객실 내 설치된 시설 외 휴대용 버너 등의
                화기(폭죽, 향초 포함) 사용은 금지합니다.
                <br />
                적발 시 과태료 10만원 부과됩니다.
              </div>
              <div>
                실내에서는 기름이 많이 사용되는 튀김요리, 냄새가 많이 나는
                요리(생선, 고기 등)의 조리는 객실 내에서 불가합니다.
              </div>
              <div>
                주기적으로 방역이 실시되고 있으나, 자연에 위치한 특성상 벌레
                혹은 곤충 등이 실내에 유입될 수 있습니다. <br /> 예민하신 분들은
                예약에 신중을 기해 주시기 바랍니다. 이로 인한 환불은 불가합니다.
              </div>
              <div>
                최상의 객실 컨디션을 위해 충분한 청소, 정리 시간이 필요합니다.
                <br />
                다음 고객을 위해 퇴실 시간은 반드시 지켜주세요.
                <br /> 11시 이후 퇴실 시 추가요금이 발생할 수 있으니 시간에 맞춰
                퇴실 부탁드립니다.
              </div>
              <div>예약 취소 시 환불규정에 의해 환불됩니다.</div>
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("pool")}>
              <span>03. 수영장 이용안내</span>
              <img
                src={drop}
                alt="drop"
                style={{
                  transform:
                    currentOpen === "pool" ? "rotate(270deg)" : "rotate(90deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className={`${styles.content} ${
                currentOpen === "pool" ? styles.contentOpenWrap : ""
              }`}
            >
              <div>
                수영장 이용수칙을 반드시 지켜주시고 안전사고에 꼭 ! 주의하시기
                바랍니다.
              </div>
              <div>
                저희 숙소는 수영장 이용수칙을 어기고 안전 부주의에 의한 사고는
                어떠한 민형사상 책임을 지지 않습니다.
              </div>
              <div>유아동반시 반드시 보호자 동반하에 수영해주기 바랍니다.</div>
              <div>입수 전 반드시 준비운동을 합니다.</div>
              <div>다이빙 ,점프 등 위험한 행동은 금지합니다.</div>
              <div>음주자 또는 만성질환자는 절대 수영 불가합니다.</div>
              <div>노약자와 어린이는 꼭 보호자와 동반 입수합니다.</div>
              <div>모든 음식물은 반입 금지입니다.</div>
              <div>
                기계적인 결함으로 인해 미온수 수영을 못하실 경우 50,000원
                환불해드리고 있습니다.
              </div>
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("refund")}>
              <span>04. 환불안내</span>
              <img
                src={drop}
                alt="drop"
                style={{
                  transform:
                    currentOpen === "refund"
                      ? "rotate(270deg)"
                      : "rotate(90deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className={`${styles.content} ${
                currentOpen === "refund" ? styles.contentOpenWrap : ""
              } ${styles.refundWrap}`}
            >
              <div>
                <div>
                  <span>예약일 변경 및 결제 당일 취소하는 경우에도</span>
                  <br />
                  <span>예약 확정 후에는 동일한 환불 규정이 적용됩니다.</span>
                  <br />
                  <span className={styles.red}>
                    예약 시 신중하게 생각하시고 결정 해주시기 바랍니다.
                  </span>
                </div>
              </div>
              <div className={styles.refund}>
                <div className={styles.top}>
                  <div className={styles.grey}>이용일</div>
                  <div>10일전</div>
                  <div>9일전</div>
                  <div>8일전</div>
                  <div>7일전</div>
                  <div>6일전</div>
                  <div>5일전</div>
                  <div>4일전 ~ 당일취소</div>
                </div>
                <div className={styles.bottom}>
                  <div className={styles.grey}>환불액</div>
                  <div>100%</div>
                  <div>90%</div>
                  <div>80%</div>
                  <div>70%</div>
                  <div>60%</div>
                  <div>50%</div>
                  <div className={styles.red}>환불불가</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Reservation;
