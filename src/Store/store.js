import { configureStore } from '@reduxjs/toolkit'
import ProfileSliceReducer from "./Features/ProfileSlice"

export const store = configureStore({
    reducer: {
        profile: ProfileSliceReducer,
    },
})