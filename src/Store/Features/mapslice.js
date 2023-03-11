import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    coordu: [],
    coordv: [],
    defaultcoords: [],
    address: '',
    loading: false,
};

const mapSlice = createSlice({
    name: 'mapclice',
    initialState,
    reducers: {
        setcoordsu: (state, action) => {
            state.coordu = action.payload;
        },
        setcoordsv: (state, action) => {
            state.coordv = action.payload;
        },
        setdefault: (state, action) => {
            state.defaultcoords = action.payload;
        },
        setaddress: (state, action) => {
            state.address = action.payload;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },

    },
});

export const {
    setcoordsu,
    setcoordsv,
    setaddress,
    setLoading,
    setdefault
} = mapSlice.actions;

export default mapSlice.reducer;
