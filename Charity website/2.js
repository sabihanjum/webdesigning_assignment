
const slides = document.querySelectorAll('.slide'); // Get all slide elements
let currentSlide = 0;

function showSlide() {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[currentSlide].classList.add('active');

    // Increment the slide index
    currentSlide++;

    // If the index exceeds the number of slides, reset it to 0
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }

    // Call the showSlide function every 3 seconds
    setTimeout(showSlide, 3000);
}

// Start the slideshow
showSlide();

// Sample volunteer data
const volunteers = [
    {
        name: "Sophia Martinez", photo:
            "https://th.bing.com/th/id/OIP.Uqy6xqtDtaUBuTSzi0bkpwHaHa?w=183&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "Noah Davis", photo:
            "https://th.bing.com/th/id/OIP.W2DgKUM4ewzVToLogMUa3gHaC3?w=345&h=135&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "Emma Johnson", photo:
            "https://th.bing.com/th/id/OIP.9TFhbOeio_QIChsiv4L2MQHaEq?w=276&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "James Anderson", photo:
            "https://th.bing.com/th/id/OIP.QfSWU59XMiw4q4H9gPB4GQHaKD?w=146&h=198&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
    {
        name: "Mason Miller  ", photo:
            "https://th.bing.com/th/id/OIP.JkPZinI1J3qW0HznoQBsEQHaE7?w=261&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
    },
];

// Function to create volunteer cards
function createVolunteerCard(volunteer) {
    const volunteerCard = document.createElement("div");
    volunteerCard.classList.add("volunteer-card");

    const volunteerPhoto = document.createElement("img");
    volunteerPhoto.classList.add("volunteer-photo");
    volunteerPhoto.src = volunteer.photo;
    volunteerPhoto.alt = volunteer.name;

    const volunteerName = document.createElement("p");
    volunteerName.classList.add("volunteer-name");
    volunteerName.textContent = volunteer.name;

    volunteerCard.appendChild(volunteerPhoto);
    volunteerCard.appendChild(volunteerName);

    return volunteerCard;
}

// Function to display volunteers
function displayVolunteers() {
    const volunteersSection = document.getElementById("volunteers-section");

    volunteers.forEach((volunteer) => {
        const volunteerCard = createVolunteerCard(volunteer);
        volunteersSection.appendChild(volunteerCard);
    });
}

// Call the function to display volunteers when the page loads
window.addEventListener("load", displayVolunteers);