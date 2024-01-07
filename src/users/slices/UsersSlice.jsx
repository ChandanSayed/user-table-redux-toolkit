import { createSlice } from '@reduxjs/toolkit';

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {},
    deleteUsers(state, action) {}
  }
});

export const { addUser, removeUser, deleteUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
