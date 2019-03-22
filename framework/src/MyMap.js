import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export default class Map extends HTMLElement {
    constructor() {
      console.log("wassup");
        super();
        this.renderMap();
    }
    
    renderMap(){
      console.log("rendering map");
      this.map = L.map('map',{
        center: [33.8,151.20],
        zoom: 0,
        zoomControl: true
      })
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    }
}
