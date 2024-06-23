import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import SubNavBar from "./Components/SubNavBar/SubNavBar";
import Banner from "./Components/Banner/Banner";
import RecommendedMovieCard from "./Components/Cards/js/RecommendedMovieCard";
import LiveEvent from "./Components/Cards/js/LiveEvent";
import Premiere from "./Components/Cards/js/Premiere";
import ConfirmationPage from "./Components/Cards/js/ConfirmationPage";
import MusicStudio from "./Components/Cards/js/MusicStudio";
import MusicDetails from "./Components/Cards/js/MusicDetails";
import OutdoorEvent from "./Components/Cards/js/OutdoorEvent";
import NearbyTheatres from "./Components/Cards/js/NearbyTheatres";
import LaughterTherapy from "./Components/Cards/js/LaughterTherapy";
import PopularEvent from "./Components/Cards/js/PopularEvent";
import LatestPlay from "./Components/Cards/js/LatestPlay";
import TopGame from "./Components/Cards/js/TopGame";
import MovieDetails from "./Components/Cards/js/MovieDetails";
import TopGameDetails from "./Components/Cards/js/TopGameDetails";
import LatestPlayDetail from "./Components/Cards/js/LatestPlaydetail";
import SelectSeats from "./Components/Cards/js/SelectSeat";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <SubNavBar />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <>
                                <Banner />
                                <RecommendedMovieCard />
                                <LiveEvent />
                                <Premiere />
                                <MusicStudio />
                                <OutdoorEvent />
                                <LaughterTherapy />
                                <PopularEvent />
                                <LatestPlay />
                                <TopGame />
                            </>
                        }
                    />
                    <Route
                        path="/music-details/:id"
                        element={<MusicDetails />}
                    />
                    <Route
                        path="/confirmation/:theatreName/:time/:seats"
                        element={<ConfirmationPage />}
                    />
                    <Route
                        path="/latest-play/:id"
                        element={<LatestPlayDetail />}
                    />
                    <Route
                        path="/nearby-theatres"
                        element={<NearbyTheatres />}
                    />
                    <Route
                        path="/select-seats/:theatreName/:time"
                        element={<SelectSeats></SelectSeats>}
                    />
                    <Route path="/movie/:title" element={<MovieDetails />} />
                    <Route
                        path="/top-game-details/:id"
                        element={<TopGameDetails />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
