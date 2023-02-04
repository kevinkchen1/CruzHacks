function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13.4,
    // center of ucsc map - music building
    center: {lat: 36.993285007853096, lng: -122.06058681478636},
  });

  const lampostImg = document.createElement("img");
  lampostImg.width = "50"; // define lampost image size (width)
  lampostImg.height = "55"; // define lampost image size (height)
  lampostImg.src = "../assets/imgs/lampost.png"; // import lampost image


  const infoWindow = new google.maps.InfoWindow({
    content: lampostImg,
    disableAutoPan: true,
  });

 
  // Create an array of alphabetical characters used to label the markers.
  // Add some markers to the map.
  const markers = locations.map((position, i) => {
    const marker = new google.maps.Marker({
      position,
    });

    // markers can only be keyboard focusable when they have click listeners
    // open info window when marker is clicked
    marker.addListener("click", () => {
      infoWindow.open(map, marker);
    });
    return marker;
  });

  // Add a marker clusterer to manage the markers.
  new markerClusterer.MarkerClusterer({ markers, map });
}

const locations = [
  // Science and Engineering Library
  { lat: 36.99935359168222, lng: -122.06081091399794 },
  // DINING HALLS
  // C9/10 Dining Hall
  { lat: 37.00097045577836, lng: -122.05773734043908 },
  // Crown Dining Hall
  { lat: 37.000173678672345, lng: -122.0543577892635 },
  // Cowell/Stevenson Dining Hall
  { lat: 36.99703040379368, lng: -122.05303809997403 },
  // Porter Dining Hall
  { lat: 36.99443619677812, lng: -122.06602160182447 },
  // BUS STOPS
  // Empire Grade and Heller Dr
  { lat: 36.98850283477375, lng: -122.06878669554865},
  // Loop - West Remote Entrance
  { lat: 36.98886410138438, lng: -122.06704493609583},
  { lat: 36.9887942048633, lng: -122.06472050925964},
  // Oakes Bus Stop
  { lat: 36.99061672407092, lng: -122.06608932778357},
  { lat: 36.99003828152607, lng: -122.06718903350523},
  // Family Student Housing
  { lat: 36.9918575403007, lng: -122.06681895998592},
  // Porter/Rachel Carson Bus Stop
  { lat: 36.99310088882263, lng: -122.06519515956428},
  { lat: 36.99287380450594, lng: -122.06484647238427 },
  // Kerr Hall Bus Stop
  {lat: 36.99680001834796, lng: -122.06357192855279},
  // Kresge Bus Stop
  { lat: 36.999374896164674, lng: -122.06455945604486},
  {lat: 36.99931491664288, lng: -122.06436097257317},
  // Science Hill Bus Stop
  { lat: 37.00022585054624, lng: -122.06240706140848 },
  { lat: 37.00003734542807, lng: -122.06222467119125 },
  // McLaughlin Dr (UCSC - College 9 & 10 / Health Ctr)
  { lat:36.99985660499242, lng: -122.05836293573715 },
  { lat: 37.00001940528173, lng: -122.0582824694648 },
  // McLaughlin Dr (UCSC - Crown & Merrill College)
  { lat: 36.999167685364704, lng: -122.05521615679648 },
  // Bookstore Bus Stop
  { lat: 36.997572812174745, lng: -122.0550589701197 },
  { lat: 36.99678877181611, lng: -122.05542375053913 },
  // East Field House Stop
  { lat: 36.99434609150224, lng: -122.05554783925446},
  // East Remote Bus Stop
  { lat: 36.99149532093058, lng: -122.05466878749002},
  { lat: 36.99156387600054, lng: -122.05495846607036 },
  // Hagar Dr & Village Rd (UCSC - The Farm) Stop
  { lat: 36.98602534051601, lng: -122.05353391517569 },
  { lat: 36.98562683429232, lng: -122.05356610168464 },
  // Coolidge Dr & Hagar Ct (UCSC - Lower Campus)
  { lat: 36.981735664745045, lng: -122.05217698570723 },
  { lat: 36.981564254809946, lng: -122.0517585610912 },
  // PATHS
  // Science Hill to C9/10
  // Bridge to C9/C10
  { lat: 37.000050, lng: -122.061823  },
  { lat: 37.000163, lng: -122.061374  },
  { lat: 37.000099, lng: -122.060242  },
  { lat: 36.999810, lng: -122.058659  },
  // Cowell Student Health Center (by C9/C10)
  { lat: 36.999790720983604, lng: -122.05746809916785},
  { lat: 37.000082, lng: -122.057125},
  { lat: 36.999765, lng: -122.055993},
  { lat: 36.99717145714735, lng: -122.05259380708841},
  { lat: 36.99675694783826, lng: -122.05163721666824},
  { lat: 36.99498050584373, lng: -122.05425271242856},
  { lat: 36.99373844274689, lng: -122.05443770117074},
  { lat: 36.99675558052765, lng: -122.05200709884053},
  { lat: 36.9972754959928, lng: -122.05361560152298},
  { lat: 36.99868025184651, lng: -122.05462966014194},
  { lat: 36.99881642577906, lng: -122.05501254952493},
];

window.initMap = initMap;