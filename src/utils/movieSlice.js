import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailorVideo: null,
        popularMovies: null,
        upcomingMovies: null,
        topratedMovies: null,
    },
    reducers: {
        addNowPlaying: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;

        },
        addUpComingMovies: (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
           state.topratedMovies = action.payload;
        },
        addTrailorVideos: (state, action) => {
            state.trailorVideo = action.payload;
        }
    },
});
export const { addNowPlaying, addTrailorVideos, addPopularMovies, addUpComingMovies, addTopRatedMovies } = movieSlice.actions;
export default movieSlice.reducer;