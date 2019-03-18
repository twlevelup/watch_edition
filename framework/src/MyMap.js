// import Map from 'ol/Map.js';
// import View from 'ol/View.js';
// import TileLayer from 'ol/layer/Tile.js';
// import BingMaps from 'ol/source/BingMaps.js';
//const Handlebars = require('handlebars');
//require("handlebars.element").default(Handlebars);

class MyMap extends HTMLElement {
    constructor() {
      console.log("wassup");
        // constructCustomElement(MyMap);
        super();
        var shadow = this.attachShadow({mode: 'open'});
        
        let s = document.createElement('div');
        s.id = 'map';
        s.className = 'map';
        this.renderMap(s);
        shadow.append(s);
    }

    renderMap(s){
      console.log("rendering map...");
      var layers = [];
      layers.push(new TileLayer({
          visible: false,
          preload: Infinity,
          source: new BingMaps({
            key: 'AvCh6GkfMxiH6-hQigzgd-iBa2lIcq-N-0bwCbzl2276l3GBFEgccQxpCmEHfxP5',
            imagerySet: 'Road'
          })
      }));
      
      var map = new Map({
        layers: layers,
        loadTilesWhileInteracting: true,
        target: 'map',
        view: new View({
          center: [-6655.5402445057125, 6709968.258934638],
          zoom: 13
        })
      });

      //s.appendChild(map);
    }
}

document.body.appendChild(document.createElement('MyMap'));
//customElements.define('my-map', MyMap);
module.exports = MyMap;
