import axios from 'axios';

export const submitOrder = async data => {
  try {
    const response = await axios.post(
      'https://script.google.com/macros/s/AKfycbwGNE5UVZqPbUbTNllZ5eegu9lhs7PnZH-tfLWzjwr4xa5yFjULUsD00Simh5iSc_dw/exec',
      data
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};
