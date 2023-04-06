import { createAsyncThunk } from '@reduxjs/toolkit';
import * as orderApi from 'services/submitOrder';

export const orderUser = createAsyncThunk('order', async userData => {
  const data = await orderApi.submitOrder(userData);
  return data;
});
