// create a map
const map = L.map('my-map').setView([
    30.268606149999997,
    -97.74320738193495], 13);
  
  // Retina displays require different mat tiles quality
  const isRetina = L.Browser.retina;
  
  const baseUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}.png?apiKey={apiKey}";
  const retinaUrl = "https://maps.geoapify.com/v1/tile/osm-bright/{z}/{x}/{y}@2x.png?apiKey={apiKey}";
  
  // Add map tiles layer. Set 20 as the maximal zoom and provide map data attribution.
  L.tileLayer(isRetina ? retinaUrl : baseUrl, {
    attribution: 'Powered by <a href="https://www.geoapify.com/" target="_blank">Geoapify</a> | <a href="https://openmaptiles.org/" target="_blank">© OpenMapTiles</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap</a>',
    apiKey: '78a2da46af4b455abc0c8999786a21aa',
    maxZoom: 20,
    id: 'osm-bright',
  }).addTo(map);
  
  


//////////////////ADDS PINS/////////////////////
L.marker([30.268606149999997,
    -97.74320738193495]).addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  