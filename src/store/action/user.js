import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUsers = createAsyncThunk(
  'users/fetchUsers',
  async () => {
    const response = await fetch(
      `${process.env.REACT_APP_BASE_URL}/api/v1/users`
    )

    if (!response.ok) {
      throw new Error('Failed to fetch')
    }

    return await response.json()
  }
)
