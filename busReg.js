const dateFromInput = document.getElementById('dateFrom');
const dateToInput = document.getElementById('dateTo');
const busListContainer = document.getElementById('busListContainer');

// Function to set the min attribute for the date inputs
function setMinDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const minDate = `${year}-${month}-${day}`;

    // Set min date for both date inputs
    dateFromInput.setAttribute('min', minDate);
    dateToInput.setAttribute('min', minDate);

    // Initialize the max date for the date inputs
    updateDateToMaxDate();
}

// Function to update the max date for 'Date To' based on 'Date From'
function updateDateToMaxDate() {
    const dateFrom = new Date(dateFromInput.value);
    const maxDate = new Date(dateFrom);
    maxDate.setDate(dateFrom.getDate() + 30); // Set maxDate to 30 days after dateFrom, adjust as needed

    const maxYear = maxDate.getFullYear();
    const maxMonth = (maxDate.getMonth() + 1).toString().padStart(2, '0');
    const maxDay = maxDate.getDate().toString().padStart(2, '0');
    dateToInput.setAttribute('max', `${maxYear}-${maxMonth}-${maxDay}`);
}

// Event listener for dateFrom input change
dateFromInput.addEventListener('change', updateDateToMaxDate);

// Form submission handler
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // 1. Validate Date Range
    const dateFrom = new Date(dateFromInput.value);
    const dateTo = new Date(dateToInput.value);
    if (dateTo < dateFrom) {
        alert('Invalid date range. "Date To" must be greater than or equal to "Date From".');
        return;
    }

    // 2. Collect form data and submit via fetch
    const formData = new FormData(this);
    fetch('/api/book', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

// Set the min date when the page loads
window.onload = setMinDate;
