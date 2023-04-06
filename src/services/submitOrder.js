import axios from 'axios';

export const submitOrder = async data => {
  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbzhS2K6w7Z1dlwRGpOBcSnu4_Lan6IxdqK1QEBwAm6-kEkOI_7r5GFb1L53hKFANj-7/exec',
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
