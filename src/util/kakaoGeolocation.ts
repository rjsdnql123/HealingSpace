//내 위치 찾기
export default function kakaoGeolocation() {
  const { kakao } = window;
  var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
  let container = document.getElementById("map");
  var geocoder = new kakao.maps.services.Geocoder();
  let options = {
    center: new window.kakao.maps.LatLng(33.450701, 126.570667),
    level: 6,
  };
  var ps = new kakao.maps.services.Places();

  var map = new kakao.maps.Map(container, options);
  if (navigator.geolocation) {
    // GeoLocation을 이용해서 접속 위치를 얻어옵니다
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다

      // 내 좌표로 이동 시킨다.
      map.setCenter(locPosition);
    });
  } else {
    // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    map.setCenter(locPosition);
  }

  //좌표로 행정동 표시하기
  //   kakao.maps.event.addListener(map, "idle", function () {
  //     console.log("행정동 표시 해주기");
  //     searchAddrFromCoords(map.getCenter(), displayCenterInfo);
  //   });
  var timer: any;
  kakao.maps.event.addListener(map, "bounds_changed", function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      console.log("여기에 ajax 요청");
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    }, 5000);
  });

  function searchAddrFromCoords(
    coords: { getLng: () => any; getLat: () => any },
    callback: (result: any, status: any) => void
  ) {
    // 좌표로 행정동 주소 정보를 요청합니다
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  }
  function displayCenterInfo(result: string | any[], status: any) {
    if (status === kakao.maps.services.Status.OK) {
      console.log("주소 뭐떠");
      for (var i = 0; i < result.length; i++) {
        // 행정동의 region_type 값은 'H' 이므로
        if (result[i].region_type === "H") {
          console.log(result[i], "이거주소");
          ps.keywordSearch(result[i].address_name + "심리상담", placesSearchCB);
          break;
        }
      }
    }
  }

  function placesSearchCB(data: any, status: any, pagination: any) {
    if (status === kakao.maps.services.Status.OK) {
      // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
      // LatLngBounds 객체에 좌표를 추가합니다
      var bounds = new kakao.maps.LatLngBounds();

      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }

      // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      // map.setBounds(bounds);
    }
  }

  // 지도에 마커를 표시하는 함수입니다
  function displayMarker(place: any) {
    // 마커를 생성하고 지도에 표시합니다
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, "click", function () {
      // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
      infowindow.setContent(
        '<div style="padding:5px;font-size:12px;">' +
          place.place_name +
          "<div>" +
          place.phone +
          "</div>" +
          "</div>"
      );
      infowindow.open(map, marker);
    });
  }
}
