function searchOpportunities() {
    const location = document.getElementById('location').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ''; // Clear previous results

    if (location) {
        // Example: Displaying a static message for demonstration purposes
        resultsDiv.innerHTML = `
            <h3>Volunteer Opportunities Near ${location}:</h3>
            <ul>
                <li>Volunteer at Local Shelter</li>
                <li>Clean Up the Park</li>
                <li>Teach English to Refugees</li>
            </ul>
        `;
    } else {
        resultsDiv.innerHTML = '<p>Please enter a location to search.</p>';
    }
}
