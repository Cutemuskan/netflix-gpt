import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailorVideo: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addTrailorVideos: (state, action) => {
            state.trailorVideo = action.payload;
        }
    },
});
export const { addNowPlaying, addTrailorVideos } = movieSlice.actions;
export default movieSlice.reducer;