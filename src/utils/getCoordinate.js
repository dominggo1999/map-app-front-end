export const getCoordinate = (url) => {
  const splitUrl = url.split('!3d');
  const latLong = splitUrl[splitUrl.length - 1].split('!4d');
  let longitude;

  if (latLong.indexOf('?') !== -1) {
    longitude = latLong[1].split('\\?')[0];
  } else {
    longitude = latLong[1];
  }
  const latitude = latLong[0];

  return [latitude, longitude];
};
