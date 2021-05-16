import Backdrop from './Backdrop';
import Button from './Button';
import Map from './Map';

const MapModal = ({
  hideModal, title, address, location,
}) => {
  return (
    <>
      <div className="container">
        <Backdrop clickHandler={hideModal} />
        <div className="map-modal card">
          <h3 className="map-modal__header">
            {title}
          </h3>
          <p className="map-modal__address">{address}</p>
          {/* Map here */}
          <div className="map-modal__map">
            <Map
              location={location}
              title={title}
            />
          </div>
          <div className="map-modal__buttons">
            <Button clickHandler={hideModal}>Close</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MapModal;
