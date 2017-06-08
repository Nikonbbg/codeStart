var initMap, mapStyle;

mapStyle = [
  {
    "featureType": "landscape",
    "stylers": [
      {
        "saturation": -100
      }, {
        "lightness": 65
      }, {
        "visibility": "on"
      }
    ]
  }, {
    "featureType": "poi",
    "stylers": [
      {
        "saturation": -100
      }, {
        "lightness": 51
      }, {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "road.highway",
    "stylers": [
      {
        "saturation": -100
      }, {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "road.arterial",
    "stylers": [
      {
        "saturation": -100
      }, {
        "lightness": 30
      }, {
        "visibility": "on"
      }
    ]
  }, {
    "featureType": "road.local",
    "stylers": [
      {
        "saturation": -100
      }, {
        "lightness": 40
      }, {
        "visibility": "on"
      }
    ]
  }, {
    "featureType": "transit",
    "stylers": [
      {
        "saturation": -100
      }, {
        "visibility": "simplified"
      }
    ]
  }, {
    "featureType": "administrative.province",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }, {
    "featureType": "water",
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "on"
      }, {
        "lightness": -25
      }, {
        "saturation": -100
      }
    ]
  }, {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "hue": "#ffff00"
      }, {
        "lightness": -25
      }, {
        "saturation": -97
      }
    ]
  }
];

initMap = function(map) {
  var $map, center, coords, marker, title;
  coords = $(map).data('coords').split(',');
  center = {
    lat: parseFloat(coords[0]),
    lng: parseFloat(coords[1])
  };
  title = $(map).data('title') || 'Lilu';
  $map = map;
  map = new google.maps.Map(map, {
    center: center,
    zoom: parseFloat(coords[2]) || 18,
    styles: mapStyle
  });
  marker = new google.maps.Marker({
    position: center,
    map: map,
    draggable: false,
    title: title,
    icon: {
      url: 'img/point.png',
      size: new google.maps.Size(44, 78),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(22, 78)
    }
  });
  $($map).addClass('initialized');
};

initMap($('.tab.active .map')[0]);
