import { useEffect } from "react";

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  useEffect(() => {
    window.kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new window.kakao.maps.LatLng(35.7815837, 129.3284443),
        level: 3,
      };
      const map = new window.kakao.maps.Map(container, options);

      var markerPosition = new kakao.maps.LatLng(35.7815837, 129.3284443);

      var marker = new kakao.maps.Marker({
        position: markerPosition,
      });

      marker.setMap(map);

      var iwContent =
          '<div style="padding:5px;font-size:11px;font-weight:600;text-align:center;">경북 경주시 진티길 24 NEMO <br><a href="https://map.naver.com/p/entry/place/1383941351?lng=129.3284443&lat=35.7815837&placePath=%2Froom%3Fac%3D1%26adm_lat%3D35.567097%26adm_long%3D129.376618%26bizId%3D1383941351%26debug%3D0%26deviceType%3Dpc%26lgl_lat%3D35.583017%26lgl_long%3D129.376925%26lgl_rcode%3D10200122%26ngn_country%3DKR%26nlu_query%3D%257B%2522qr%2522%253A%255B%257B%2522query%2522%253A%2522%25EA%25B2%25BD%25EC%25A3%25BC%2520%25EB%2584%25A4%25EB%25AA%25A8%2520%25ED%2592%2580%25EB%25B9%258C%25EB%259D%25BC%2522%252C%2522c_score%2522%253A0.711036%252C%2522score%2522%253A1.08711%252C%2522qr_category%2522%253A7%252C%2522qr_type%2522%253A36%257D%252C%257B%2522query%2522%253A%2522%25EB%2584%25A4%25EB%25AA%25A8%2520%25ED%2595%2598%25EC%259A%25B0%25EC%258A%25A4%2522%252C%2522c_score%2522%253A0.645%252C%2522score%2522%253A-3.399%252C%2522qr_category%2522%253A4%252C%2522qr_type%2522%253A31%257D%255D%252C%2522nluQuery%2522%253A%2522%25EA%25B2%25BD%25EC%25A3%25BC%2520%25EB%2584%25A4%25EB%25AA%25A8%25ED%2595%2598%25EC%259A%25B0%25EC%258A%25A4%2522%257D%26nqx_theme%3D%257B%2522theme%2522%253A%257B%2522main%2522%253A%257B%2522name%2522%253A%2522accommodation%2522%252C%2522source%2522%253A%2522TOS%2522%257D%252C%2522sub%2522%253A%255B%257B%2522name%2522%253A%2522location%2522%257D%255D%257D%257D%26r1%3D%25EC%259A%25B8%25EC%2582%25B0%25EA%25B4%2591%25EC%2597%25AD%25EC%258B%259C%26r2%3D%25EB%25B6%2581%25EA%25B5%25AC%26r3%3D%25ED%259A%25A8%25EB%25AC%25B8%25EB%258F%2599%26rcode%3D10200123%26rev%3D45%26sm%3Dtab_hty.top%26spq%3D0%26ssc%3Dtab.nx.all%26target%3Dpc%26where%3Dnexearch%26x%3D129.376618%26y%3D35.567097&searchType=place&c=15.00,0,0,0,dh" style="color:skyblue" target="_blank">예약하기</a></div>', // 인포윈도우에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
        iwPosition = new kakao.maps.LatLng(35.7815837, 129.3284443); //인포윈도우 표시 위치입니다

      var infowindow = new kakao.maps.InfoWindow({
        position: iwPosition,
        content: iwContent,
      });

      infowindow.open(map, marker);
    });
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
}
