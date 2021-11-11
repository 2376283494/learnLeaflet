// Import stylesheets
import './style.css';
import { Map, TileLayer, control, Marker, Icon } from 'leaflet';

// Write Javascript code!
const map = new Map('map');

const layer = new TileLayer(
  'http://webrd0{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',
  {
    subdomains: '1234',
  }
);

const layer2 = new TileLayer(
  'http://t0.tianditu.gov.cn/vec_w/wmts?layer=vec&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=db570c16fed16fd9b07d5aa487ce3e60',
  {}
);

const layer3 = new TileLayer(
  'http://t0.tianditu.gov.cn/cva_w/wmts?layer=cva&style=default&tilematrixset=w&Service=WMTS&Request=GetTile&Version=1.0.0&Format=tiles&TileMatrix={z}&TileCol={x}&TileRow={y}&tk=db570c16fed16fd9b07d5aa487ce3e60',
  {}
);

map.setView([39.909186, 116.397411], 10);

const base1Maps = {
  '高德地图': layer,
  '天地图No.1': layer2,
  '天地图No.2': layer3,
};

layer2.addTo(map);

control.layers(base1Maps, null).addTo(map);

const marker = new Marker([39.909186, 116.397411], {
  icon: new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [10, 41]
  })
})
marker.addTo(map);


