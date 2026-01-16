// main.js - SIMPLIFIED VERSION
import { createPreferencesFormPopup } from './form-popup.js';
import { createRecommendationPage } from './popup.js';

// Initialize both popups
const preferencesPopup = createPreferencesFormPopup();
const recommendationsPopup = createRecommendationPage();

// Show preferences form when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('🎬 MerlOT: Movie Recommendation System');
    
    // Show the preferences form popup automatically
    preferencesPopup.show();
    
    // Get the form
    const form = document.getElementById('moviePreferencesForm');
    
    // Handle form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('Form submitted!');
        
        // 1. Get user preferences
        const selectedGenres = getSelectedValues('genre');
        const selectedStories = getSelectedValues('story');
        const selectedThemes = getSelectedValues('theme');
        
        console.log('User selected:', {
            genres: selectedGenres,
            stories: selectedStories,
            themes: selectedThemes
        });
        
        // 2. Close preferences popup
        preferencesPopup.hide();
        
        // 3. Show recommendations popup with sample movies
        showMovieRecommendations();
    });
});

// Helper function to get checkbox values
function getSelectedValues(name) {
    const checkboxes = document.querySelectorAll(`input[name="${name}"]:checked`);
    return Array.from(checkboxes).map(cb => cb.value);
}

// Function to show movie recommendations
function showMovieRecommendations() {
    const recommendedMovies = [
        {
            title: "Star Wars: The Last Jedi",
            rating: "4.5",
            votes: "10,000",
            avgRating: "4.8",
            genre: "Sci-Fi, Fantasy"
        },
        {
            title: "Stranger Things",
            rating: "4.7",
            votes: "20,000",
            avgRating: "4.6",
            genre: "Horror, Adventure"
        },
        {
            title: "Batman Begins",
            rating: "4.9",
            votes: "15,000",
            avgRating: "4.7",
            genre: "Action, Adventure"
        },
        {
            title: "Spider-Man: Into the Spider-Verse",
            rating: "4.6",
            votes: "10,000",
            avgRating: "4.7",
            genre: "Animation, Adventure"
        },
        {
            title: "Dunkirk",
            rating: "4.8",
            votes: "10,000",
            avgRating: "4.7",
            genre: "War, Drama"
        },
        {
            title: "DON'T FRATTER ME",
            rating: "4.7",
            votes: "10,000",
            avgRating: "4.7",
            genre: "Comedy"
        }
    ];
    
    // Show the recommendations popup
    recommendationsPopup.show(recommendedMovies);
}

// For debugging: Make functions available in console
window.testPopup = function() {
    preferencesPopup.show();
};

console.log('✅ Main.js loaded successfully');