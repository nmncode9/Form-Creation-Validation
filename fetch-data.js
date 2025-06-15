async function fetchUserData() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";
    const dataContainer = document.getElementById("api-data");
    const errorMsg = "Failed to load user data.";

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);
        
        // Check if response is OK (status 200-299)
        if (!response.ok) {
            throw new Error(errorMsg);
        }
        
        // Parse JSON data
        const users = await response.json();
        
        // Build HTML string with user names
        let html = "<ul>";
        users.forEach(user => {
            html += `<li>${user.name}</li>`;
        });
        html += "</ul>";

        // Inject HTML into the container
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = html;

    } catch (e) {
        // Display error message
        dataContainer.textContent = errorMsg;
    }
}


document.addEventListener("DOMContentLoaded", fetchUserData)
