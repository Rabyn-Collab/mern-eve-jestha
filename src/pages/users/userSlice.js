import { createSlice } from "@reduxjs/toolkit";
import { getUserFromLocal, setUserToLocal } from "../../local/local.js";




export const userSlice = createSlice({
  name: 'userSlice',
  initialState: {
    users: getUserFromLocal()
  },


  reducers: {

    addUser: (state, action) => {
      state.users.push(action.payload);
      setUserToLocal(state.users);
    },

    updateUser: (state, action) => {

    },

    removeUser: (state, action) => {
      state.users.splice(action.payload, 1);
      setUserToLocal(state.users);
    }

  }



});

export const { addUser, removeUser, updateUser } = userSlice.actions;