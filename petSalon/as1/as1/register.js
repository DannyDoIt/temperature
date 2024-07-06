// scripts.js
$(document).ready(function() {
    // Salon Object Literal
    const salon = {
        name: "The Fashion Pet",
        address: {
            street: "123 Pet Street",
            city: "Pet City",
            state: "CA",
            zip: "90210"
        },
        hours: {
            open: "9:00 AM",
            close: "6:00 PM"
        },
        pets: []
    };

    // Pet Constructor
    function Pet(name, age, gender, breed, service, type) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.breed = breed;
        this.service = service;
        this.type = type;
    }

    // Predefined Pets
    let pets = [
        new Pet("Scooby", 88, "Male", "Great Dane", "Grooming", "Dog"),
        new Pet("Scrappy", 44, "Male", "Great Dane", "Vaccination", "Dog"),
        new Pet("Pixie", 4, "Female", "Xolo", "Checkup", "Dog")
    ];

    // Add predefined pets to salon
    salon.pets = pets;

    // Display Pet count
    function displayPetCount() {
        $('#petCount').text(salon.pets.length);
    }

    // Display Pet names
    function displayPetNames() {
        const petList = $('#petList');
        petList.empty(); // Clear any existing list items

        for (let pet of salon.pets) {
            let listItem = $('<li></li>').text(pet.name);
            petList.append(listItem);
        }
    }

    // Register new pet
    $('#petForm').on('submit', function(event) {
        event.preventDefault(); // Prevent the form from submitting

        // Get values from form
        const name = $('#name').val();
        const age = $('#age').val();
        const gender = $('#gender').val();
        const breed = $('#breed').val();
        const service = $('#service').val();
        const type = $('#type').val();

        // Create new pet object
        const newPet = new Pet(name, age, gender, breed, service, type);

        // Add new pet to salon pets array
        salon.pets.push(newPet);

        // Display new pet in console
        console.log(newPet);

        // Clear the form
        $('#petForm')[0].reset();

        // Update pet count and list
        displayPetCount();
        displayPetNames();
    });

    // Initialize the display when the page loads
    if (window.location.pathname.endsWith('index.html')) {
        displayPetCount();
        displayPetNames();
    }
});