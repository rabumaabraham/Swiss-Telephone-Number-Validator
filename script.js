document.getElementById('check-btn').addEventListener('click', function() {
    const userInput = document.getElementById('user-input').value;
    const resultsDiv = document.getElementById('results-div');
    
    if (!userInput) {
        alert("Please provide a phone number");
        return;
    }

    if (validatePhoneNumber(userInput)) {
        resultsDiv.textContent = `Valid Swiss number: ${userInput}`;
    } else {
        resultsDiv.textContent = `Invalid Swiss number: ${userInput}`;
    }
});

document.getElementById('clear-btn').addEventListener('click', function() {
    document.getElementById('results-div').textContent = '';
    document.getElementById('user-input').value = '';
});

function validatePhoneNumber(number) {
    // Swiss phone numbers can start with +41 or 0, followed by 9 digits
    const regex = /^(?:\+41|0)(\d{2})(\d{3})(\d{2})(\d{2})$/;
    return regex.test(number);
}
