// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample room data (you can replace this with data from a backend)
    const rooms = [
        { type: "Single", price: 100 },
        { type: "Double", price: 150 },
        { type: "Suite", price: 250 }
    ];

    const roomOptions = document.getElementById("room-options");

    // Populate room options
    rooms.forEach(room => {
        const option = document.createElement("div");
        option.innerHTML = `
            <h3>${room.type}</h3>
            <p>Price: $${room.price}/night</p>
        `;
        roomOptions.appendChild(option);
    });

    // Handle booking button click
    document.getElementById("book-btn").addEventListener("click", function() {
        const checkInDate = document.getElementById("check-in").value;
        const checkOutDate = document.getElementById("check-out").value;
        const numGuests = document.getElementById("guests").value;

        // Perform booking logic (e.g., send data to backend)
        console.log("Booking Details:");
        console.log("Check-in Date:", checkInDate);
        console.log("Check-out Date:", checkOutDate);
        console.log("Number of Guests:", numGuests);
    });
});
