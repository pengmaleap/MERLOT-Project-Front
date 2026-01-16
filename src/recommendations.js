// recommendations.js
export function renderRecommendationsPage() {
    const movies = [
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
    
    return `
        <div class="recommendations-page">
            <header class="page-header">
                <h1>MerlOT</h1>
                <p class="page-subtitle">Movie Recommendation Results</p>
            </header>
            
            <div class="movies-container">
                ${movies.map(movie => `
                    <div class="movie-card">
                        <div class="movie-header">
                            <span class="bullet">•</span>
                            <h3 class="movie-name">${movie.title}</h3>
                        </div>
                        <div class="movie-stats">
                            <div class="stat">
                                <span class="stat-label">Rating:</span>
                                <span class="stat-value">${movie.rating}/5</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Votes:</span>
                                <span class="stat-value">${movie.votes}</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Average Rating:</span>
                                <span class="stat-value">${movie.avgRating}</span>
                            </div>
                            <div class="stat">
                                <span class="stat-label">Genre:</span>
                                <span class="stat-value">${movie.genre}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}