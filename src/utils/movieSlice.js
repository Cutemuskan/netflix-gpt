import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailorVideo: null,
        popularMovies: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;

        },
        addTrailorVideos: (state, action) => {
            state.trailorVideo = action.payload;
        }
    },
});
export const { addNowPlaying, addTrailorVideos, addPopularMovies } = movieSlice.actions;
export default movieSlice.reducer;