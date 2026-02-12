import { createSlice } from '@reduxjs/toolkit'

import { fetchUsers } from '../action/user'

const initialState = {
  users: [],
  user: {},
  loading: false,
  error: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export default userSlice.reducer
