import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import googlepin from '../../../Icons/placeholder.png'

// Custom red marker icon
const redIcon = new L.Icon({
  iconUrl: googlepin,
  iconSize: [30, 31],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  shadowSize: [41, 41],
});

const MapComponent = () => {
  // Array of specific coordinates (latitude, longitude) for your markers
  const locations = [
    // 15.276118280064159, 76.39714714124743
    { position: [15.276118280064159, 76.39714714124743], address: 'Janatha Automobiles Pvt Ltd' },
    { position: [51.515, -0.1], address: 'Location 2: London' },
    { position: [51.495, -0.08], address: 'Location 3: London' },
    { position: [51.505, -0.09], address: 'Location 1: London' },
    { position: [51.515, -0.1], address: 'Location 2: London' },
    { position: [51.495, -0.08], address: 'Location 3: London' },
  ];

  return (
    // hospete 15.2689, 76.3909
    // Karnataka 15.3173,75.7139
    <MapContainer center={[15.2689,  76.3909]} zoom={13} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.position} icon={redIcon}>
          <Popup>{location.address}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapComponent;
