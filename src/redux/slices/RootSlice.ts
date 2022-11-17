import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        name: 'Name',
        style: 'Style',
        country: 'Country',
        region: 'Region',
    },
    reducers: {
        chooseName: (state, action) => { state.name = action.payload},
        chooseStyle: (state, action) => { state.style = action.payload},
        chooseCountry: (state, action) => { state.country = action.payload},
        chooseRegion: (state, action) => { state.region = action.payload},
    }
})

// Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseName, chooseStyle, chooseCountry, chooseRegion } = rootSlice.actions;