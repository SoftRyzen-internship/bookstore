import axios from 'axios';

export const submitOrder = async data => {
  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbzaAmyTTICtYfq1T5RKBFA1-DrzhXNyMfPJcetPJDrC9tqZq2SkZZG7FytXCEc8vDpy/exec',
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
