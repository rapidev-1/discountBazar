import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    profile: {},
    loading: false,
}

export const ProfileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state , action) => { state.profile = action.payload },
        load: (state) => { state.loading = true },
        unload: (state) => { state.loading = false },
    },
})

// Action creators are generated for each case reducer function
export const { setProfile, load, unload } = ProfileSlice.actions
export const PROFILE = (state, action) => state.profile.profile
export const isLoading = (state) => state.profile.loading

export default ProfileSlice.reducer