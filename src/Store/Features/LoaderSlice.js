import { createSlice } from "@reduxjs/toolkit";

const loaderSlice = createSlice({
    name: "loader",
    initialState: {
        isLoading: true,
        count: 0,
    },
    reducers: {
        showLoader: (state) => {
            state.count += 1;
            if (state.count > 0) {
                state.isLoading = true;
            }
        },
        hideLoader: (state) => {
            state.count -= 1;
            if (state.count < 1) {
                state.isLoading = false;
            }
        },
    },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
