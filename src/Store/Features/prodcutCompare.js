import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    p1: {},
    p2: {},
    loading: false,
    active: null,
};

const ProductCompare = createSlice({
    name: 'mySlice',
    initialState,
    reducers: {
        setp1: (state, action) => {
            state.p1 = action.payload;
        },
        setp2: (state, action) => {
            state.p2 = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        setactive: (state, action) => {
            state.active = action.payload
        }
    },
});

export const { setp1, setp2, setLoading, setactive } = ProductCompare.actions;

export default ProductCompare.reducer;
