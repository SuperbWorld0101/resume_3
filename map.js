
function initMap() {
  var location = new google.maps.LatLng(42.374908366015966, -71.11818443084599);
  var el = document.getElementById('map');
  var mapOptions = {
    center: location,
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeControlOptions: {
      position: google.maps.ControlPosition.BOTTOM_CENTER
	}
  };
  var mymap = new google.maps.Map(el, mapOptions);
  const contentString = "<h2>Harvard University</h2> a private Ivy League research university in Cambridge, Massachusetts, United States. Founded October 28, 1636, and named for its first benefactor, the Puritan clergyman John Harvard, it is the oldest institution of higher learning in the United States."
  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    ariaLabel: "Harvard University",
  });
  const marker = new google.maps.Marker({
    position: location,
    map: mymap,
    title: "Harvard University",
  });

  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map: mymap,
    });
  });
}


function init() {
  var location = new google.maps.LatLng(42.374908366015966, -71.11818443084599);
  const map = new google.maps.Map(document.getElementById("map2"), {
    center: location,
    zoom: 17,
    heading: 320,
    tilt: 70,
    mapId: "90f87356969d889c",
  });
  const buttons = [
    ["Rotate Left", "rotate", 20, google.maps.ControlPosition.LEFT_CENTER],
    ["Rotate Right", "rotate", -20, google.maps.ControlPosition.RIGHT_CENTER],
    ["Tilt Down", "tilt", 20, google.maps.ControlPosition.TOP_CENTER],
    ["Tilt Up", "tilt", -20, google.maps.ControlPosition.BOTTOM_CENTER],
  ];

  buttons.forEach(([text, mode, amount, position]) => {
    const controlDiv = document.createElement("div");
    const controlUI = document.createElement("button");

    controlUI.classList.add("ui-button");
    controlUI.innerText = `${text}`;
    controlUI.addEventListener("click", () => {
      adjustMap(mode, amount);
    });
    controlDiv.appendChild(controlUI);
    map.controls[position].push(controlDiv);
  });

  const adjustMap = function (mode, amount) {
    switch (mode) {
      case "tilt":
        map.setTilt(map.getTilt() + amount);
        break;
      case "rotate":
        map.setHeading(map.getHeading() + amount);
        break;
      default:
        break;
    }
  };
}


function polyMap() {
  const map = new google.maps.Map(document.getElementById("map3"), {
    zoom: 5,
    center: { lat: 42.374908366015966, lng: -71.11818443084599 },
    mapTypeId: "terrain",
  });
  const triangleCoords = [
    { lat: 43.44, lng: -71.11},
    { lat: 35.66, lng: -68.98 },
    { lat: 50.78, lng: -64.757 },
    { lat: 44.21, lng: -72.10 },
  ];
  const bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
  });

  bermudaTriangle.setMap(map);
}


google.maps.event.addDomListener(window,'load',polyMap);
google.maps.event.addDomListener(window,'load',initMap);
google.maps.event.addDomListener(window,'load',init);
