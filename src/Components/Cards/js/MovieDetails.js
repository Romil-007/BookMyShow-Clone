import React from "react";
import { useParams, Link } from "react-router-dom";
import "../css/MovieDetails.css";
import "../css/Common.css";

// Assuming these imports are already configured correctly in your setup
import card1 from "../Image/RecommendedMovie/card1.avif";
import card2 from "../Image/RecommendedMovie/card2.avif";
import card3 from "../Image/RecommendedMovie/card3.avif";
import card4 from "../Image/RecommendedMovie/card4.avif";
import card5 from "../Image/RecommendedMovie/card5.avif";
import card6 from "../Image/RecommendedMovie/card6.avif";
import card7 from "../Image/RecommendedMovie/card7.avif";
import card8 from "../Image/RecommendedMovie/card8.avif";
import card9 from "../Image/RecommendedMovie/card9.avif";
import card10 from "../Image/RecommendedMovie/card10.avif";

// Define array of recommended movies
const cards = [
    {
        image: card1,
        type: "like",
        rating: 9.4,
        votes: "146.7K",
        title: "Manjummel Boys",
        genre: "Adventure/Drama/Thriller",
        desc: " A young man's visit to his native village unveils a family secret and a vengeful spirit, Munjya, who wants to get married. Now the young man must fight to protect himself and his love from Munjya's clutches leading to a humorously chaotic and terrifying adventure.",
    },
    {
        image: card2,
        type: "like",
        rating: 8.6,
        votes: "10K",
        title: "Kung Fu Panda 4",
        genre: "Action/Adventure/Animation/Comedy",
        desc: "After Po is tapped to become the Spiritual Leader of the Valley of Peace, he needs to find and train a new Dragon Warrior, while a wicked sorceress plans to re-summon all the master villains whom Po has vanquished to the spirit realm.",
    },
    {
        image: card3,
        type: "interest",
        rating: 0,
        votes: "126.7K",
        title: "Godzilla x Kong: The New Empire",
        genre: "Action/Sci-Fi/Thriller",
        desc: "Two ancient titans, Godzilla and Kong, clash in an epic battle as humans unravel their intertwined origins and connection to Skull Island's mysteries.",
    },
    {
        image: card4,
        type: "like",
        rating: 8,
        votes: "80.7K",
        title: "Shaitaan",
        genre: "Supernatural/Thriller",
        desc: "",
    },
    {
        image: card5,
        type: "like",
        rating: 9.2,
        votes: "96.3K",
        title: "Premalu",
        genre: "Comedy/Romantic",
    },
    {
        image: card6,
        type: "like",
        rating: 9.1,
        votes: "32K",
        title: "Dune: Part Two",
        genre: "Action/Adventure/Drama/Sci-Fi",
    },
    {
        image: card7,
        type: "like",
        rating: 8.1,
        votes: "10.4K",
        title: "Lover",
        genre: "Drama/Romantic",
    },
    {
        image: card8,
        type: "like",
        rating: 8.2,
        votes: "14.7K",
        title: "Yodha",
        genre: "Action/Thriller",
    },
    {
        image: card9,
        type: "like",
        rating: 9.3,
        votes: "112.8K",
        title: "Article 370",
        genre: "Drama/Political",
    },
    {
        image: card10,
        type: "like",
        rating: 8.4,
        votes: "1.2K",
        title: "J Baby",
        genre: "Drama/Family",
    },
];

const MovieDetails = () => {
    const { title } = useParams();
    const movie = cards.find((card) => card.title === title);

    if (!movie) {
        return <div>Movie not found</div>;
    }

    return (
        <>
            <div className="movie-details-container">
                <div className="movie-details-left">
                    <img src={movie.image} alt={movie.title} />
                </div>
                <div className="movie-details-right">
                    <h2>{movie.title}</h2>
                    <p>
                        <strong>Rating:</strong> {movie.rating} ({movie.votes}{" "}
                        Votes)
                    </p>
                    <p>
                        <strong>Format:</strong> 2D
                    </p>
                    <p>
                        <strong>Language:</strong> Hindi
                    </p>
                    <p>
                        <strong>Duration:</strong> 2h 3m
                    </p>
                    <p>
                        <strong>Genres:</strong> {movie.genre}
                    </p>
                    <p>
                        <strong>Rating:</strong> UA
                    </p>
                    <p>
                        <strong>Release Date:</strong> 7 Jun, 2024
                    </p>
                    <Link to="/nearby-theatres" className="book-tickets-btn">
                        Book tickets
                    </Link>
                </div>
            </div>

            <div className="movie-description">
                <h3>About the movie:</h3>
                <p>{movie.desc}</p>
            </div>
        </>
    );
};

export default MovieDetails;
