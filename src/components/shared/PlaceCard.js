import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Button from './Button';
import DeleteModal from './DeleteModal';
import MapModal from './MapModal';
import ErrorModal from './ErrorModal';

const PlaceCard = ({
  title, description, imageUrl, address, location, creator, placeId, onDelete,
}) => {
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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
  const deletePlace = async () => {
    setLoading(true);
    console.log('Deleting place');

    try {
      const response = await fetch(`http://localhost:5000/api/places/${placeId}`, {
        method: 'DELETE',
      });

      const responseData = response.json();

      if(!response.ok) {
        throw new Error(responseData.message);
      }

      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }

    onDelete(placeId);
    setDisplayDeleteModal(false);
    setLoading(false);
  };

  return (
    <>
      {loading && <h1>Loading ...</h1>}
      {
        error && (
        <ErrorModal
          errorMessage={error}
          hideModal={() => setError(null)}
        />
        )
      }
      {
        displayDeleteModal
        && (
        <DeleteModal
          hideModal={hideDeleteModal}
          deleteButtonClickHandler={deletePlace}
        />
        )
      }
      {
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
                <Link to={`/${userID}/${placeId}`}>
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
