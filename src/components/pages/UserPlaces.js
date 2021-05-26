import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import PlaceList from '../shared/PlaceList';

const UserPlaces = () => {
  const [loadedPlace, setLoadedPlace] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { userId } = useParams();

  // Call api
  useEffect(() => {
    setLoading(true);
    const getAllPlacesByUserID = async () => {
      const response = await fetch(`http://localhost:5000/api/places/user/${userId}`);
      const responseData = await response.json();
      setLoadedPlace(responseData.places);
      setLoading(false);
    };

    getAllPlacesByUserID();
  }, [userId]);

  if(userId === 'null' || userId === 'undefined') {
    history.push('/');
  }

  const onDelete = (deletedPlaceId) => {
    setLoadedPlace((prevPlace) => prevPlace.filter((place) => place.id !== deletedPlaceId));
  };

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && loadedPlace && (
      <PlaceList
        places={loadedPlace}
        onDelete={onDelete}
      />
      )}
    </>
  );
};

export default UserPlaces;
