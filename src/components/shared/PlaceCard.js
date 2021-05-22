import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from './Button';
import DeleteModal from './DeleteModal';
import MapModal from './MapModal';

const PlaceCard = ({
  title, description, imageUrl, address, location, creator,
}) => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [displayMapModal, setDisplayMapModal] = useState(false);
  const userID = useSelector((state) => state.auth.userID);

  const canEdit = userID === creator;

  const showDeleteModal = () => {
    setDisplayDeleteModal(true);
  };

  const hideDeleteModal = () => {
    setDisplayDeleteModal(false);
  };

  const showMapModal = () => {
    setDisplayMapModal(true);
  };

  const hideMapModal = () => {
    setDisplayMapModal(false);
  };

  // Deleting place from database
  const deletePlace = () => {
    console.log('Deleting place');
    setDisplayDeleteModal(false);
  };

  return (
    <>
      {
        displayDeleteModal
        && (
        <DeleteModal
          hideModal={hideDeleteModal}
          deleteButtonClickHandler={deletePlace}
        />
        )
      }{
        displayMapModal
        && (
          <MapModal
            hideModal={hideMapModal}
            title={title}
            address={address}
            location={location}
          />
        )
      }
      <div className="place-card card">
        <div className="place-card__image-container">
          <img
            src={imageUrl}
            alt={title}
            className="place-card__image"
          />
        </div>
        <div className="place-card__content">
          <h4 className="place-card__title">{title}</h4>
          <h5 className="place-card__address">{address}</h5>
          <p className="place-card__description">{description}</p>
          <div className="place-card__buttons">
            <Button clickHandler={showMapModal}>View On Map</Button>
            {
            canEdit && (
              <>
                <Link to="/:userId/:placeId">
                  <Button className="btn-warning">Edit</Button>
                </Link>
                <Button
                  className="btn-danger"
                  clickHandler={showDeleteModal}
                >Delete
                </Button>
              </>
            )
          }
          </div>
        </div>
      </div>
    </>
  );
};

export default PlaceCard;
