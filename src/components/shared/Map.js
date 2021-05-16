import 'leaflet/dist/leaflet.css';
import {
  Map as LeafletMap, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import mapMarker from '../../assets/mapMarker.svg';

const icon = L.icon({
  iconUrl: mapMarker,
  iconRetinaUrl: mapMarker,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon',
});

const Map = ({ location, title }) => {
  const coordinate = [location.lat, location.lng];

  return (
    <>
      <LeafletMap
        center={coordinate}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker
          position={coordinate}
          icon={icon}
        >
          <Popup>
            {title}
          </Popup>
        </Marker>
      </LeafletMap>,
    </>
  );
};

export default Map;
