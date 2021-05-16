import { useEffect } from 'react';
import PlaceList from '../shared/PlaceList';

let dummyPlaces = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Emp. State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584,
    },
    creator: 'u2',
  },
  {
    id: 'p3',
    title: 'Tokyo Tower',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl:
      'https://images.pexels.com/photos/3779837/pexels-photo-3779837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Jepang',
    location: {
      lat: 35.6585848,
      lng: 139.7432442,
    },
    creator: 'u1',
  },
];

const UserPlaces = () => {
  // Call api
  useEffect(() => {
    dummyPlaces = dummyPlaces.filter((place) => place.creator === 'u1');
  }, []);

  return (
    <>
      {
        dummyPlaces && <PlaceList places={dummyPlaces} />
      }
    </>
  );
};

export default UserPlaces;
