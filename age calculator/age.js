// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get the form element and attach a submit event listener
    document.getElementById('ageForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior

        // Get the input birthdate value and parse it into a Date object
        const birthdate = new Date(document.getElementById('birthdate').value);

        // Get the current date
        const today = new Date();

        // Calculate the age in years
        let age = today.getFullYear() - birthdate.getFullYear();

        // Get the month difference
        const monthDiff = today.getMonth() - birthdate.getMonth();

        // Adjust age if the birthdate hasn't occurred yet this year
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        // Display the result in the result div
        const resultDiv = document.getElementById('result');
        if (!isNaN(age) && age >= 0) {
            resultDiv.textContent = `Your age is: ${age} years`;
        } else {
            resultDiv.textContent = 'Please enter a valid birthdate.';
        }
    });
});
