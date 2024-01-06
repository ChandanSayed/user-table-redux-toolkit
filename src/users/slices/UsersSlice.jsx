import { createSlice } from '@reduxjs/toolkit';

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: [],
  reducers: {
    addUser() {},
    removeUser() {},
    deleteUsers() {}
  }
});

export { UsersSlice };
