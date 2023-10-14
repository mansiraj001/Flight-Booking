// Get references to the form elements
const form = document.querySelector('.search-form');
const fromInput = document.getElementById('from');
const toInput = document.getElementById('to');

// Simulated list of airports (replace with real data)
const airports = ['Airport A', 'Airport B', 'Airport C', 'Airport D'];

// Function to populate the "From" and "To" selects
function populateSelects() {
    for (const airport of airports) {
        const option = document.createElement('option');
        option.textContent = airport;
        fromSelect.appendChild(option.cloneNode(true));
        toSelect.appendChild(option);
    }
}

// Call the function to populate the selects
populateSelects();

// Event listener to update the "To" select based on "From" selection
fromSelect.addEventListener('change', function () {
    const selectedAirport = fromSelect.value;
    toSelect.innerHTML = '';
    for (const airport of airports) {
        if (airport !== selectedAirport) {
            const option = document.createElement('option');
            option.textContent = airport;
            toSelect.appendChild(option);
        }
    }
});


const dateInput = document.getElementById('date');

// Get the current date in the format 'YYYY-MM-DD'
function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
}

// Set the 'min' attribute of the date input to the current date
dateInput.min = getCurrentDate();

const travelersInput = document.getElementById('travelers');
const classInput = document.getElementById('class');

// Add an event listener to the form for form submission
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    // Get the values from the form inputs
    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    const date = dateInput.value.trim();
    let travelers = parseInt(travelersInput.value, 10);
    const selectedClass = classInput.value;

    // Simple form validation
    if (from === '' || to === '' || date === '' || isNaN(travelers) || travelers < 1 || selectedClass === '') {
        alert('Please fill in all the fields.');
        return;
    }

    // Simulate flight search - you can replace this with your actual search logic
    alert(`Searching for flights from ${from} to ${to} on ${date} for ${travelers} traveler(s) in ${selectedClass} class.`);
});
