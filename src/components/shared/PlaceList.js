import PlaceCard from './PlaceCard';

const PlaceList = ({ places }) => {
  return (
    <div className="user-places">
      <div className="container">
        {
            places.map(({ id, ...restProps }) => (
              <PlaceCard
                key={id}
                {...restProps}
              />
            ))
          }
      </div>
    </div>
  );
};

export default PlaceList;
