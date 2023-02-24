import { configureStore } from '@reduxjs/toolkit'
import ProfileSliceReducer from "./Features/ProfileSlice"
import LoaderReducer from "./Features/LoaderSlice"

export const store = configureStore({
    reducer: {
        profile: ProfileSliceReducer,
        loader: LoaderReducer
    },
})