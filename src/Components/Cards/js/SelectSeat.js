import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AppContainer from "../../AppContainer/AppContainer";
import "../css/SelectSeats.css"; // Custom CSS for SelectSeats

const SelectSeats = () => {
    const { theatreName, time } = useParams();
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [reservedSeats, setReservedSeats] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const theaters = [
            {
                name: "Little World Kharghar",
                showtimes: ["10:00 AM", "1:00 PM", "4:00 PM"],
                reservedSeats: generateReservedSeats(),
            },
            {
                name: "Nexus SeaWoods",
                showtimes: ["11:00 AM", "2:00 PM", "5:00 PM", "8:00 PM"],
                reservedSeats: generateReservedSeats(),
            },
            {
                name: "Phoenix Mall Kurla",
                showtimes: ["9:30 AM", "12:30 PM", "3:30 PM", "6:30 PM"],
                reservedSeats: generateReservedSeats(),
            },
        ];

        const selectedTheatre = theaters.find(
            (theatre) => theatre.name === theatreName
        );
        const reservedSeatsForShowtime =
            selectedTheatre.reservedSeats.find(
                (showtime) => showtime.time === time
            )?.seats || [];

        setReservedSeats(reservedSeatsForShowtime);
    }, [theatreName, time]);

    const generateReservedSeats = () => {
        const reservedSeats = [
            { time: "10:00 AM", seats: ["1A", "2B", "5C", "6D"] },
            { time: "1:00 PM", seats: ["3A", "4B", "7C", "8D"] },
            { time: "4:00 PM", seats: ["2A", "3B", "6C", "7D"] },
            { time: "11:00 AM", seats: ["5A", "6B", "9C", "10D"] },
            { time: "2:00 PM", seats: ["7A", "8B", "11C", "12D"] },
            { time: "5:00 PM", seats: ["4A", "5B", "8C", "9D"] },
            { time: "8:00 PM", seats: ["1B", "2C", "5D", "6A"] },
            { time: "9:30 AM", seats: ["3D", "4A", "7B", "8C"] },
            { time: "12:30 PM", seats: ["2D", "3A", "6B", "7C"] },
            { time: "3:30 PM", seats: ["5A", "6B", "9C", "10D"] },
            { time: "6:30 PM", seats: ["7A", "8B", "11C", "12D"] },
        ];

        return reservedSeats;
    };

    const handleSeatClick = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    const isSeatReserved = (seat) => {
        return reservedSeats.includes(seat);
    };

    const renderSeatGrid = () => {
        const rows = 6;
        const cols = 10;
        const seatGrid = [];

        for (let row = 1; row <= rows; row++) {
            for (let col = 1; col <= cols; col++) {
                const seatNumber = `${row}${String.fromCharCode(64 + col)}`;
                const isReserved = isSeatReserved(seatNumber);

                let seatClass = "seat";
                if (selectedSeats.includes(seatNumber)) {
                    seatClass += " selected";
                } else if (isReserved) {
                    seatClass += " reserved";
                }

                seatGrid.push(
                    <button
                        key={seatNumber}
                        className={seatClass}
                        disabled={isReserved}
                        onClick={() => handleSeatClick(seatNumber)}>
                        {seatNumber}
                    </button>
                );
            }
        }

        return seatGrid;
    };

    const handleConfirmSelection = () => {
        navigate(
            `/confirmation/${theatreName}/${time}/${selectedSeats.join(",")}`
        );
    };

    return (
        <div className="select-seats">
            <AppContainer>
                <h2 className="select-seats-heading">
                    Select Seats for {theatreName}
                </h2>
                <p className="showtime-info">Showtime: {time}</p>
                <div className="seat-grid">{renderSeatGrid()}</div>
                <div className="selection-summary">
                    <p className="selected-seats-info">
                        Selected Seats: {selectedSeats.join(", ")}
                    </p>
                    <button
                        className="confirm-button"
                        onClick={handleConfirmSelection}>
                        Confirm Selection
                    </button>
                </div>
            </AppContainer>
        </div>
    );
};

export default SelectSeats;
