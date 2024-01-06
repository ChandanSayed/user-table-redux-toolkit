import { createSlice } from '@reduxjs/toolkit';

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeUser(state, action) {},
    deleteUsers(state, action) {}
  }
});

console.log(UsersSlice.actions);
export default UsersSlice.reducer;
