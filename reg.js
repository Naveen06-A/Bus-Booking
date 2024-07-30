document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // 1. Bus Number Validation
    document.getElementById('registrationForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        // 1. Bus Number Validation
        document.getElementById('registrationForm').addEventListener('submit', function(e) {
            e.preventDefault();
        
            // 1. Bus Number Validation
            const regNumber = document.getElementById('regNumber').value;
            const regNumberPattern = /^[A-Za-z]{2}\d{2}[A-Za-z]{2}\d{4}$/; // Updated pattern
            if (!regNumberPattern.test(regNumber)) {
                document.getElementById('regNumberError').textContent = 'Bus Number must be in the format "AA11AA1111" (two letters, two digits, two letters, four digits).';
                return;
            } else {
                document.getElementById('regNumberError').textContent = '';
            }
        
            // ... (Rest of your validation code)
        });
        
    
        // ... (Rest of your validation code)
    });
    

    // 2. Bus Name Validation (Basic)
    const busName = document.getElementById('busName').value;
    if (busName.trim() === '') {
        document.getElementById('busNameError').textContent = 'Please enter a valid bus name.';
        return;
    } else {
        document.getElementById('busNameError').textContent = '';
    }

    // 3. Date Range Validation
    const dateFrom = new Date(document.getElementById('dateFrom').value);
    const dateTo = new Date(document.getElementById('dateTo').value);
    if (dateFrom >= dateTo) {
        document.getElementById('dateFromError').textContent = 'Date Range To must be greater than Date Range From.';
        document.getElementById('dateToError').textContent = 'Date Range To must be greater than Date Range From.';
        return;
    } else {
        document.getElementById('dateFromError').textContent = '';
        document.getElementById('dateToError').textContent = '';
    }

    // 4. Number of Seats Validation
    const seats = document.getElementById('seats').value;
    if (isNaN(seats) || seats <= 0) {
        document.getElementById('seatsError').textContent = 'Number of seats must be a positive number.';
        return;
    } else {
        document.getElementById('seatsError').textContent = '';
    }
    //5.amount 
    // Validate Form Function
function validateForm() {
    var amountInput = document.getElementById('amount');
    var amountValue = amountInput.value.trim();

    if (!/^\d+(\.\d+)?$/.test(amountValue)) {
        document.getElementById('amountError').textContent = 'Amount must be a numeric value.';
        return false;
    } else {
        document.getElementById('amountError').textContent = '';
        return true;
    }
}

// Form Submission Event Listener
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    if (!validateForm()) {
        event.preventDefault(); // Prevent form submission if validation fails
    }
});


    // 6. Unique Bus Number Validation (using .NET backend)
    // ... (See .NET code below)

    // If all validations pass
    alert('Form submitted successfully!');
    this.submit();
});
