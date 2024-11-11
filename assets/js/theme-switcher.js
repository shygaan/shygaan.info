// Array of themes
const themes = ['black', 'red', 'green', 'white'];

// Function to load the initial theme from localStorage or default to 'paper'
function loadInitialTheme() {
    const savedTheme = localStorage.getItem('theme');

    // Log the saved theme for debugging
    console.log('Saved theme from localStorage:', savedTheme);

    // If a saved theme exists, use that. Otherwise, default to 'paper'
    if (savedTheme) {
        document.body.setAttribute('data-theme', savedTheme);
        console.log('Setting theme to:', savedTheme);
    } else {
        document.body.setAttribute('data-theme', themes[0]); // Default to 'paper'
        console.log('No saved theme found, defaulting to:', themes[0]);
    }
}

// Call loadInitialTheme on page load
loadInitialTheme();

// Function to toggle through the themes and save to localStorage
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const currentIndex = themes.indexOf(currentTheme);

    // Calculate the next theme index (wrap around to 0 if at the end)
    const nextIndex = (currentIndex + 1) % themes.length;
    const newTheme = themes[nextIndex];

    document.body.setAttribute('data-theme', newTheme);
    console.log('Switching to theme:', newTheme); // Log the new theme

    // Save the current theme in localStorage
    localStorage.setItem('theme', newTheme);
}

// Listen for system theme changes (optional)
// const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Function to handle changes in the system theme
// function handleThemeChange(e) {
//     if (e.matches) {
//         // If the system prefers dark, set to a suitable theme, e.g., 'black'
//         document.body.setAttribute('data-theme', 'black');
//         localStorage.setItem('theme', 'black');
//     } else {
//         // If the system prefers light, set to a suitable theme, e.g., 'paper'
//         document.body.setAttribute('data-theme', 'beige');
//         localStorage.setItem('theme', 'beige');
//     }
// }

// Add event listener for system theme changes
// mediaQuery.addEventListener('change', handleThemeChange);
