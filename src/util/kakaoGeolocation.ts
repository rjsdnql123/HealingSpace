//내 위치 찾기
declare global {
  interface Window {
    kakao: any;
  }
}
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
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = position.coords.latitude, // 위도
        lon = position.coords.longitude; // 경도

      var locPosition = new kakao.maps.LatLng(lat, lon);

      map.setCenter(locPosition);
    });
  } else {
    var locPosition = new kakao.maps.LatLng(33.450701, 126.570667);

    map.setCenter(locPosition);
  }

  let timer: ReturnType<typeof setTimeout>;
  kakao.maps.event.addListener(map, "idle", function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(function () {
      searchAddrFromCoords(map.getCenter(), displayCenterInfo);
    }, 1000);
  });

  function searchAddrFromCoords(
    coords: { getLng: () => number; getLat: () => number },
    callback: (result: string | any[], status: string) => void
  ) {
    geocoder.coord2RegionCode(coords.getLng(), coords.getLat(), callback);
  }
  function displayCenterInfo(result: string | any[], status: string) {
    if (status === kakao.maps.services.Status.OK) {
      for (let i = 0; i < result.length; i++) {
        if (result[i].region_type === "H") {
          ps.keywordSearch(result[i].address_name + "심리상담", placesSearchCB);
          break;
        }
      }
    }
  }

  function placesSearchCB(data: any, status: string) {
    if (status === kakao.maps.services.Status.OK) {
      var bounds = new kakao.maps.LatLngBounds();

      for (var i = 0; i < data.length; i++) {
        displayMarker(data[i]);
        bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
      }
    }
  }

  function displayMarker(place: any) {
    var marker = new kakao.maps.Marker({
      map: map,
      position: new kakao.maps.LatLng(place.y, place.x),
    });

    kakao.maps.event.addListener(marker, "click", function () {
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
