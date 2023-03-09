import { configureStore } from '@reduxjs/toolkit'
import ProfileSliceReducer from "./Features/ProfileSlice"
import LoaderReducer from "./Features/LoaderSlice"
import ProductCompareReducer from "./Features/prodcutCompare"
export const store = configureStore({
    reducer: {
        profile: ProfileSliceReducer,
        loader: LoaderReducer,
        compare: ProductCompareReducer
    },
})