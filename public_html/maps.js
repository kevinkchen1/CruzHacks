// Initialize and add the map
function initMap() {
    // The location of UCSC Arboretum
    const ucsc = { lat: 36.98230, lng: -122.05923};
    // The map, centered at UCSC Arboretum
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4, // how much to zoom in on map (0 zoomed out maxs)
      center: ucsc,
    });
    // The marker, positioned at UCSC Arboretum
    const marker = new google.maps.Marker({
      position: ucsc,
      map: map,
    });
  }
  
  window.initMap = initMap;
  