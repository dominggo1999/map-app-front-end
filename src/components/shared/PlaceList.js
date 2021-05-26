import PlaceCard from './PlaceCard';

const PlaceList = ({ places, onDelete }) => {
  if(places.length === 0) {
    return (
      <div className="container">
        <div className="card message">
          <h1>No Place Yet</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="user-places">
      <div className="container">
        {
            places && places.map(({ id, ...restProps }) => (
              <PlaceCard
                key={id}
                {...restProps}
                placeId={id}
                onDelete={onDelete}
              />
            ))
          }
      </div>
    </div>
  );
};

export default PlaceList;
