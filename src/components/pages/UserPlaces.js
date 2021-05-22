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
  }, []);

  if(userId === 'null' || userId === 'undefined') {
    history.push('/');
  }

  return (
    <>
      {loading && <h1>Loading...</h1>}
      {!loading && loadedPlace && <PlaceList places={loadedPlace} />}
    </>
  );
};

export default UserPlaces;
