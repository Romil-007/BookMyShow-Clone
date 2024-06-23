// src/Components/ConfirmationPage/ConfirmationPage.js
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import AppContainer from "../../AppContainer/AppContainer";
import "../css/ConfirmationPage.css"; // Custom CSS for ConfirmationPage

const ConfirmationPage = () => {
    const { theatreName, time, seats } = useParams();
    const navigate = useNavigate();
    const ticketId = Math.random().toString(36).substr(2, 9).toUpperCase(); // Generate a random ticket ID
    const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        theatreName
    )}`;
    const handleGoHome = () => {
        navigate("/");
    };

    return (
        <div className="confirmation-page">
            <AppContainer>
                <h2>Thank You! Your Ticket is Confirmed</h2>
                <p>
                    <strong>Ticket ID:</strong> {ticketId}
                </p>
                <p>
                    <strong>Theatre:</strong> {theatreName}
                </p>
                <p>
                    <strong>Showtime:</strong> {time}
                </p>
                <p>
                    <strong>Seats:</strong> {seats.split(",").join(", ")}
                </p>
                <div className="qr-code">
                    <img
                        src="data:image/png;base64,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"
                        alt="QR Code"
                    />
                </div>
                <div className="confirmation-buttons">
                    <button onClick={handleGoHome}>Go to Home</button>
                    <a href={googleMapsLink} target="_blank">
                        <button>Give Directions</button>
                    </a>
                </div>
            </AppContainer>
        </div>
    );
};

export default ConfirmationPage;
