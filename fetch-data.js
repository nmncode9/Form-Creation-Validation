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
        const userList = document.createElement('ul');
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Inject HTML into the container
        dataContainer.innerHTML = "";
        dataContainer.innerHTML = html;

    } catch (e) {
        // Display error message
        dataContainer.innerHTML = "";
        dataContainer.textContent = errorMsg;
    }
}


document.addEventListener("DOMContentLoaded", fetchUserData)
