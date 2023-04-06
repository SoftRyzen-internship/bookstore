import { useState } from 'react';
import {
  // getDistrictId,
  getPostDepartments,
} from 'services/deliveryApi';

import s from './DeliveryOptions.module.scss';

export const DeliveryOptions = ({ deliveryType }) => {
  const [deliveryInfo, setDeliveryInfo] = useState({
    regionName: '',
    districtName: '',
    cityName: '',
  });
  const [postDepartments, setPostDepartments] = useState([]);

  const handleChangeInput = e => {
    setDeliveryInfo({
      ...deliveryInfo,
      [e.target.dataset.id]: e.target.value,
    });

    if (!e.target.value) {
      setPostDepartments([]);
    }
  };

  const handleBlurInput = e => {
    if (
      e.target.value &&
      e.target.dataset.id === 'cityName' &&
      deliveryType.includes('novaPoshta')
    ) {
      getPostDepartments(deliveryInfo, deliveryType).then(resp =>
        setPostDepartments(resp)
      );
    }

    // if (e.target.value && e.target.dataset.id === 'regionName') {
    //   getRegionId(deliveryInfo);
    // }

    // if (e.target.value && e.target.dataset.id === 'districtName') {
    //   getDistrictId(deliveryInfo);
    // }
  };

  const { regionName, districtName, cityName } = deliveryInfo;

  return (
    <>
      {deliveryType === 'ukrPoshta' && (
        <>
          <input
            data-id="regionName"
            className={s.input}
            type="text"
            placeholder="Введіть область"
            onBlur={handleBlurInput}
            onChange={handleChangeInput}
            value={regionName}
          />
          <input
            data-id="districtName"
            className={s.input}
            type="text"
            placeholder="Введіть район"
            onBlur={handleBlurInput}
            onChange={handleChangeInput}
            value={districtName}
          />
        </>
      )}
      <input
        data-id="cityName"
        className={s.input}
        type="text"
        placeholder="Введіть назву населеного пункту"
        onBlur={handleBlurInput}
        onChange={handleChangeInput}
        value={cityName}
      />
      <select className={`${s.departmentSelect} ${s.input}`} name="select">
        <option value="">Виберіть відділення</option>
        {postDepartments.map(department => (
          <option key={department.Ref} value={department.Description}>
            {department.Description}
          </option>
        ))}
      </select>
    </>
  );
};
