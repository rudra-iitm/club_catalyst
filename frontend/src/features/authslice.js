import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  access_token: null,
}

export const authslice = createSlice({
  name: 'auth_token',
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    unSetUserToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
  },
})

export const { setUserToken, unSetUserToken } = authslice.actions

export default authslice.reducer