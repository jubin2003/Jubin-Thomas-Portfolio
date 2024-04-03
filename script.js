function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  // Function to change the role text
function animateRole() {
    const roles = ["MERN Stack Developer","Data Analyst", "BCA Graduate"]; // List of roles to cycle through
    let index = 0; // Starting index
    
    // Function to update role text
    function updateRole() {
        document.getElementById("role").textContent = roles[index];
        index = (index + 1) % roles.length; // Cycle through roles
    }
    
    // Initial call to update role
    updateRole();
    
    // Set interval to update role every 2 seconds
    setInterval(updateRole, 2000);
}

// Call the animateRole function when the page loads
window.onload = animateRole;
