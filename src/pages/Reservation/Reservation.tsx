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
                <div className={styles.subTextWrap}>
                  <span>
                    • 체크아웃 시간 초과 시 추가 요금이 발생합니다. <br />
                    &nbsp;&nbsp;&nbsp;위생적인 룸 컨디션을 위한 새단장 시간이
                    필요합니다.
                  </span>
                  <br />
                  <span>
                    • 네모하우스는 비대면 체크인 및 체크아웃으로 진행됩니다. 
                  </span>
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
                  <span>
                    24개월 이하 영아 추가 시 무료, 최대인원에
                    포함됩니다.(침구제공x)
                  </span>
                  <br />
                  <span>• 추가 인원 비용은 시설이용비입니다.</span> <br />
                  <span>
                    • 인원 6인까지 2인당 더블침대 1개씩 제공되며,
                    <br />
                    &nbsp;&nbsp;&nbsp; 7~8인 경우 1인당 싱글침구 1세트씩
                    제공됩니다.
                  </span>
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
                  <span>인스타DM 문의 부탁드립니다.</span>
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
              <div>수건은 1인당 2장씩, 비치타올은 2인당 1장씩 제공됩니다.</div>
              <div>바베큐장 부탄가스는 2개씩 제공됩니다.</div>
              <div>바베큐는 별도의 바베큐장을 이용하여 주시기 바랍니다. </div>
              <div>WI-FI는 1층 1개, 2층 2개로 3개 있습니다.</div>
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("roomDanger")}>
              <span>03. 객실 주의사항</span>
              <img
                src={drop}
                alt="drop"
                style={{
                  transform:
                    currentOpen === "roomDanger"
                      ? "rotate(270deg)"
                      : "rotate(90deg)",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>
            <div
              className={`${styles.content} ${
                currentOpen === "roomDanger" ? styles.contentOpenWrap : ""
              }`}
            >
              <div>반려동물과 객실에 입실하실 수 없습니다.</div>
              <div>
                보호자 동반 없는 미성년자의 예약은 환불 없이 예약 취소됩니다.
              </div>
              <div>
                예약되지 않은 외부인 방문 및 입실 시 환불 없이 퇴실 요청할 수
                있습니다.
              </div>
              <div>객실 내에서는 절대 금연입니다.</div>
              <div>계단 이용 시 주의를 당부드립니다.</div>
              <div>바베큐장 및 야외 이용 시 자갈 미끄럼 주의해 주세요.</div>
              <div>
                유아 및 아동은 보호자의 각별한 주의를 부탁드리며 음주 후에도
                주의해 주세요.
              </div>
              <div>
                개인이 가져온 버너나 숯, 전기그릴, 캠핑용 장비 등의 각종 화기성
                도구는 화재 위험으로 절대 반입 금지입니다.
              </div>
              <div>
                투숙객의 부주의로 인해 발생한 안전사고 및 귀중품 분실 및 파손
                등은 책임지지 않습니다.
              </div>
              <div>
                객실 내에서는 간단한 조리만 가능합니다. 객실 내 냄새가 심한
                청국장, 육류, 생선류 등의 구이 및 튀김류 등은 조리 불가입니다.
              </div>
              <div>
                밤 9시 이후 민원이 발생할 수 있으니 소음 발생을 자제해 주세요.
                스피커 사용 금지 등
              </div>
              <div>
                숙소 비품 및 기타 시설물 파손 혹은 침구류 오염 시 구매 금액으로
                배상해야 됩니다.
              </div>
              <div>
                객실 내 가구 및 소품 위치를 옮기지 않도록 해 주시고, 퇴실 시
                다시 원상복구 바랍니다.
              </div>
              <div>
                사전 협의 없는 상업적 촬영은 불가합니다. 위반 적발 시 환불 없이
                퇴실조치합니다.
              </div>
              <div>퇴실 전 객실 정리를 부탁드립니다.</div>
              <div>
                퇴실 전 창문을 닫고 에어컨 및 보일러 등 전원 OFF를 확인해
                주세요.
              </div>
              <div>숙소 내 쓰레기는 정해진 장소에 분리 배출 부탁드립니다.</div>
              <div>
                음식물 쓰레기는 제공된 봉투에 담아 음식물 쓰레기통에 담아주세요.
              </div>
              <div>사용한 식기류는 설거지해 주세요.</div>
              <div>
                네모하우스는 위치 특성상 자연과 함께 하는 곳이라 각종 벌레들이
                나올 수 있습니다. 창문을 열어 둘 경우 꼭 방충망을 닫아 두시고
                출입문은 최대한 빨리 닫아주세요.
              </div>
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("pool")}>
              <span>04. 수영장 이용안내</span>
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
              <div>수영장 내에서는 반드시 안전 수칙을 준수해 주세요.</div>
              <div>입수 전 반드시 준비운동을 해주세요.</div>
              <div>수영장 필터에 손을 대지 마세요.</div>
              <div>수영장 내 음주 및 취식 금지합니다.</div>
              <div>다이빙 및 점프 등 위험한 행동은 금지합니다.</div>
              <div>수영장 사용 후 물기 제거 후 실내 이용해 주세요.</div>
              <div>음주 후 또는 만성질환자는 수영장 이용 금지합니다.</div>
              <div>별도의 안전 요원이 없으므로 이용 시 주의해 주세요.</div>
              <div>수영장에서 소변 및 코를 풀거나 침을 뱉지 말아 주세요.</div>
              <div>입욕제 및 비누, 기타 세제류 등은 절대 사용 금지입니다.</div>
              <div>
                수영장 내 바닥 및 계단 이용 시 입출수 시 미끄럼 사고 주의해
                주세요.
              </div>
              <div>
                노약자, 영유아 및 어린이 이용 시 보호장비 착용 및 꼭 보호자와
                함께 이용해 주세요.
              </div>
              <div>본인 부주의로 인한 사고는 책임지지 않습니다.</div>
              <div>
                안전사고의 발생에 있어서 민사상/형사상 책임지지 않습니다.
              </div>
            </div>
          </div>
          <div className={styles.contentWrap}>
            <div onClick={() => handleOpen("refund")}>
              <span>05. 환불안내</span>
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
