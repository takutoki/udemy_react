import geolib from 'geolib';
import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = '1043672633542649366';

// eslint-disable-next-line import/prefer-default-export
export const searchHotelByLocation = (location) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
  };
  return Rakuten.Travel.simpleHotelSearch(params)
    .then(result =>
      result.data.hotels.map((hotels) => {
        const basicInfo = hotels.hotel[0].hotelBasicInfo;
        const price = basicInfo.hotelMinCharge;
        const distance = geolib.getDistance(
          { latitude: location.lat, longitude: location.lng },
          { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
        );
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          tuhmUrl: basicInfo.hotelThumbnailUrl,
          price: price ? `${price}円` : '空室なし',
          reviewAverage: basicInfo.reviewAverage,
          reviewCount: basicInfo.reviewCount,
          distance,
        };
      }));
};
