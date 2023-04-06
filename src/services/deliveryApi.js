import { http } from './api';

export const getPostDepartments = ({ cityName }, deliveryType) => {
  const postTypes = {
    novaPoshtaDepartment: '841339c7-591a-42e2-8233-7a0a00f0ed6f',
    novaPoshtaMailBox: 'f9316480-5f2d-425d-bc2c-ac7cd29decf0',
  };

  if (deliveryType.includes('novaPoshta')) {
    return http
      .post('https://api.novaposhta.ua/v2.0/json/', {
        apiKey: '240ef9f179d3915765ffe529c873f9b7',
        modelName: 'Address',
        calledMethod: 'getWarehouses',
        methodProperties: {
          CityName: cityName,
          TypeOfWarehouseRef: postTypes[deliveryType],
        },
      })
      .then(({ data: { data } }) => data);
  }
};

// export const getRegionId = ({ regionName }) => {
//   http
//     .get(
//       `https://ukrposhta.ua/address-classifier-ws/get_regions_by_region_ua?region_name=${regionName}`
//     )
//     .then(resp => console.log(resp));
// };

// export const getDistrictId = ({ districtName }) => {
//   http
//     .get(
//       `https://ukrposhta.ua/address-classifier-ws/get_regions_by_region_ua?region_name=${districtName}`
//     )
//     .then();
// };
