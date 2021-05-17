import { useState } from 'react';
import { OpenStreetMapProvider, AlgoliaProvider } from 'leaflet-geosearch';
import SelectSearch from 'react-select-search';

const provider = new AlgoliaProvider();

const LocationSearch = () => {
  const getLocation = async (query) => {
    const results = await provider.search({ query });
    console.log(results);

    const locations = await results.map((item) => ({
      name: item.label,
      value: item.raw.place_id,
    }));

    return locations;
  };

  const getOptions = (query) => {
    return getLocation(query);
  };

  return (
    <div className="location-search">
      <SelectSearch
        options={[{ name: 'searching', value: 'searching' }]}
        getOptions={getOptions}
        search
        placeholder="Enter place name"
      />
    </div>
  );
};

export default LocationSearch;
