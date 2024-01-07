import { createSlice } from '@reduxjs/toolkit';

const UsersSlice = createSlice({
  name: 'UsersSlice',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      state.splice(0, state.length);
    }
  }
});

export const { addUser, removeUser, deleteUsers } = UsersSlice.actions;
export default UsersSlice.reducer;
