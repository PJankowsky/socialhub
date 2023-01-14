import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  token: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
      console.log("state updated");

    },
    logout: (state) => {
      state.isLoggedIn = false
    },
    setToken: (state, action) => {
      state.token = action.payload
    }

  },
})


export const { login, logout, setToken } = authSlice.actions

export default authSlice.reducer