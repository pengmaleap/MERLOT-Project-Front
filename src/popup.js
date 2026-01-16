// popup.js - UPDATED TO FULL-SCREEN PAGE
export function createRecommendationPage() {
    // Create full-screen recommendations page
    const pageHTML = `
        <style>
            /* Full-screen page styles */
            .recommendations-page {
                display: none;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, #0f0c29, #302b63, #24243e);
                z-index: 1001;
                overflow-y: auto;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                color: white;
            }
            
            .page-container {
                max-width: 1200px;
                margin: 0 auto;
                padding: 40px 20px;
                animation: fadeIn 0.8s ease;
            }
            
            @keyframes fadeIn {
                from { opacity: 0; transform: translateY(20px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .page-header {
                text-align: center;
                margin-bottom: 50px;
                padding-bottom: 30px;
                border-bottom: 3px solid rgba(255, 255, 255, 0.2);
            }
            
            .page-header h1 {
                font-size: 48px;
                margin-bottom: 10px;
                color: #fff;
                text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            }
            
            .page-subtitle {
                font-size: 28px;
                color: #aaa;
                font-weight: 300;
            }
            
            .movies-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
                gap: 30px;
                margin-bottom: 60px;
            }
            
            .movie-card {
                background: rgba(255, 255, 255, 0.1);
                backdrop-filter: blur(10px);
                border-radius: 20px;
                padding: 30px;
                border: 1px solid rgba(255, 255, 255, 0.2);
                transition: all 0.3s ease;
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            }
            
            .movie-card:hover {
                transform: translateY(-10px);
                background: rgba(255, 255, 255, 0.15);
                box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
            }
            
            .movie-title {
                font-size: 24px;
                margin: 0 0 20px 0;
                color: #fff;
                padding-bottom: 15px;
                border-bottom: 2px solid rgba(255, 255, 255, 0.1);
                display: flex;
                align-items: center;
            }
            
            .movie-title:before {
                content: "🎬";
                margin-right: 15px;
                font-size: 28px;
            }
            
            .movie-details {
                margin-left: 10px;
            }
            
            .detail-row {
                display: flex;
                justify-content: space-between;
                margin: 15px 0;
                padding: 12px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .detail-label {
                font-weight: bold;
                color: #aaa;
                font-size: 16px;
            }
            
            .detail-value {
                color: #fff;
                font-size: 18px;
                font-weight: 600;
            }
            
            .rating-value {
                color: #FFD700;
            }
            
            .genre-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
                margin-top: 25px;
            }
            
            .genre-tag {
                background: rgba(76, 175, 80, 0.2);
                color: #4CAF50;
                padding: 8px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 500;
                border: 1px solid rgba(76, 175, 80, 0.3);
            }
            
            .close-section {
                text-align: center;
                margin-top: 60px;
                padding-top: 40px;
                border-top: 2px solid rgba(255, 255, 255, 0.1);
            }
            
            .close-btn {
                background: linear-gradient(135deg, #ff416c, #ff4b2b);
                color: white;
                border: none;
                padding: 18px 60px;
                border-radius: 50px;
                font-size: 20px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s;
                box-shadow: 0 10px 25px rgba(255, 65, 108, 0.3);
            }
            
            .close-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 15px 35px rgba(255, 65, 108, 0.4);
            }
            
            /* Back button */
            .back-btn {
                position: fixed;
                top: 30px;
                left: 30px;
                background: rgba(255, 255, 255, 0.1);
                color: white;
                border: 1px solid rgba(255, 255, 255, 0.3);
                padding: 12px 25px;
                border-radius: 30px;
                font-size: 16px;
                cursor: pointer;
                backdrop-filter: blur(10px);
                z-index: 1002;
            }
            
            .back-btn:hover {
                background: rgba(255, 255, 255, 0.2);
            }
            
            /* Scrollbar */
            ::-webkit-scrollbar {
                width: 10px;
            }
            
            ::-webkit-scrollbar-track {
                background: rgba(255, 255, 255, 0.05);
            }
            
            ::-webkit-scrollbar-thumb {
                background: rgba(255, 255, 255, 0.2);
                border-radius: 5px;
            }
            
            ::-webkit-scrollbar-thumb:hover {
                background: rgba(255, 255, 255, 0.3);
            }
        </style>
        
        <div id="recommendationsPage" class="recommendations-page">
            <button class="back-btn">← Back to Form</button>
            
            <div class="page-container">
                <header class="page-header">
                    <h1>MerlOT</h1>
                    <p class="page-subtitle">Movie Recommendation Results</p>
                </header>
                
                <div class="movies-container" id="moviesContainer">
                    <!-- Movies will be inserted here -->
                </div>
                
                <div class="close-section">
                    <button class="close-btn">Close Recommendations</button>
                </div>
            </div>
        </div>
    `;
    
    // Add to DOM
    document.body.insertAdjacentHTML('beforeend', pageHTML);
    
    // Get elements
    const page = document.getElementById('recommendationsPage');
    const backBtn = page.querySelector('.back-btn');
    const closeBtn = page.querySelector('.close-btn');
    const moviesContainer = document.getElementById('moviesContainer');
    
    // Close function - hides the page
    const closePage = () => {
        page.style.display = 'none';
        moviesContainer.innerHTML = '';
    };
    
    // Show function - displays the page with movies
    const showPage = (movies) => {
        displayMovies(movies);
        page.style.display = 'block';
        // Scroll to top
        window.scrollTo(0, 0);
    };
    
    // Add event listeners
    backBtn.addEventListener('click', closePage);
    closeBtn.addEventListener('click', closePage);
    
    // Display movies function
    function displayMovies(movies) {
        console.log('Displaying movies on full page:', movies);
        
        if (!movies || movies.length === 0) {
            moviesContainer.innerHTML = `
                <div style="text-align: center; padding: 80px; color: #aaa; font-size: 20px;">
                    🎬 No recommendations found. Try selecting different preferences.
                </div>
            `;
            return;
        }
        
        moviesContainer.innerHTML = movies.map(movie => `
            <div class="movie-card">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-details">
                    <div class="detail-row">
                        <span class="detail-label">Rating:</span>
                        <span class="detail-value rating-value">${movie.rating}/5</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Votes:</span>
                        <span class="detail-value">${movie.votes}</span>
                    </div>
                    <div class="detail-row">
                        <span class="detail-label">Average Rating:</span>
                        <span class="detail-value">${movie.avgRating}</span>
                    </div>
                    <div class="genre-tags">
                        ${movie.genre.split(', ').map(genre => 
                            `<span class="genre-tag">${genre}</span>`
                        ).join('')}
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    // Return public methods
    return {
        show: showPage,
        hide: closePage
    };
}