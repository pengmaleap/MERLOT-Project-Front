// form-popup.js - UPDATED: COMPACT & BEAUTIFUL
export function createPreferencesFormPopup() {
    const formPopupHTML = `
        <style>
            .form-popup-overlay {
                display: flex;
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(135deg, 
                    rgba(15, 12, 41, 0.95), 
                    rgba(48, 43, 99, 0.95), 
                    rgba(36, 36, 62, 0.95));
                z-index: 1000;
                justify-content: center;
                align-items: center;
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                backdrop-filter: blur(5px);
            }
            
            .form-popup-container {
                background: rgba(255, 255, 255, 0.95);
                width: 85%;
                max-width: 500px; /* More compact */
                border-radius: 20px;
                padding: 30px;
                box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
                border: 1px solid rgba(255, 255, 255, 0.3);
                animation: slideUp 0.5s ease;
                max-height: 85vh;
                overflow-y: auto;
            }
            
            @keyframes slideUp {
                from { opacity: 0; transform: translateY(30px); }
                to { opacity: 1; transform: translateY(0); }
            }
            
            .form-header {
                text-align: center;
                margin-bottom: 20px;
            }
            
            .form-header h1 {
                color: #333;
                font-size: 28px; /* Smaller */
                margin: 0 0 8px 0;
                font-weight: 700;
                background: linear-gradient(135deg, #667eea, #764ba2);
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            
            .form-description {
                color: #666;
                font-size: 15px; /* Smaller */
                margin-bottom: 25px;
                text-align: center;
                line-height: 1.4;
            }
            
            .question-section {
                margin-bottom: 25px; /* Less spacing */
                padding: 18px;
                background: rgba(248, 249, 250, 0.8);
                border-radius: 12px;
                border-left: 4px solid #4CAF50;
                transition: transform 0.2s;
            }
            
            .question-section:hover {
                transform: translateX(5px);
            }
            
            .question-number {
                font-size: 16px; /* Smaller */
                font-weight: bold;
                color: #333;
                margin-bottom: 12px;
                display: flex;
                align-items: center;
            }
            
            .question-number:before {
                content: counter(question) ". ";
                counter-increment: question;
                color: #4CAF50;
                font-weight: bold;
                margin-right: 8px;
                font-size: 18px;
            }
            
            .options-list {
                margin-left: 15px;
            }
            
            .option-item {
                margin: 10px 0; /* Tighter spacing */
                display: flex;
                align-items: center;
                font-size: 15px; /* Smaller */
                transition: all 0.2s;
            }
            
            .option-item:hover {
                transform: translateX(5px);
            }
            
            .checkbox-custom {
                width: 18px; /* Smaller */
                height: 18px;
                margin-right: 12px;
                cursor: pointer;
                accent-color: #4CAF50;
                transition: transform 0.2s;
            }
            
            .checkbox-custom:hover {
                transform: scale(1.1);
            }
            
            .checkbox-label {
                cursor: pointer;
                color: #444;
                transition: color 0.2s;
            }
            
            .checkbox-label:hover {
                color: #2196F3;
            }
            
            .submit-section {
                text-align: center;
                margin-top: 25px; /* Less spacing */
                padding-top: 20px;
                border-top: 2px solid rgba(76, 175, 80, 0.2);
            }
            
            .submit-btn {
                background: linear-gradient(135deg, #4CAF50, #45a049);
                color: white;
                border: none;
                padding: 14px 35px; /* Smaller */
                border-radius: 10px;
                font-size: 16px;
                cursor: pointer;
                font-weight: bold;
                transition: all 0.3s;
                box-shadow: 0 5px 15px rgba(76, 175, 80, 0.3);
                position: relative;
                overflow: hidden;
            }
            
            .submit-btn:before {
                content: '';
                position: absolute;
                top: 0;
                left: -100%;
                width: 100%;
                height: 100%;
                background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
                transition: 0.5s;
            }
            
            .submit-btn:hover {
                transform: translateY(-3px);
                box-shadow: 0 8px 20px rgba(76, 175, 80, 0.4);
            }
            
            .submit-btn:hover:before {
                left: 100%;
            }
            
            .submit-btn:active {
                transform: translateY(-1px);
            }
            
            /* Close button */
            .form-close-btn {
                position: absolute;
                top: 25px;
                right: 25px;
                background: rgba(255, 71, 87, 0.9);
                color: white;
                border: none;
                width: 36px; /* Smaller */
                height: 36px;
                border-radius: 50%;
                font-size: 20px;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255, 255, 255, 0.3);
                transition: all 0.3s;
            }
            
            .form-close-btn:hover {
                background: #ff3742;
                transform: rotate(90deg);
            }
            
            /* Decorative elements */
            .form-decoration {
                position: absolute;
                z-index: -1;
            }
            
            .decoration-1 {
                width: 200px;
                height: 200px;
                background: radial-gradient(circle, rgba(102, 126, 234, 0.1) 0%, transparent 70%);
                top: 10%;
                left: 10%;
            }
            
            .decoration-2 {
                width: 150px;
                height: 150px;
                background: radial-gradient(circle, rgba(118, 75, 162, 0.1) 0%, transparent 70%);
                bottom: 15%;
                right: 10%;
            }
            
            /* Scrollbar for the form */
            .form-popup-container::-webkit-scrollbar {
                width: 6px;
            }
            
            .form-popup-container::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.05);
                border-radius: 10px;
            }
            
            .form-popup-container::-webkit-scrollbar-thumb {
                background: #4CAF50;
                border-radius: 10px;
            }
            
            /* Checkbox animation */
            input[type="checkbox"]:checked + .checkbox-label {
                color: #4CAF50;
                font-weight: 600;
            }
            
            /* Responsive */
            @media (max-width: 600px) {
                .form-popup-container {
                    width: 90%;
                    padding: 20px;
                    max-height: 80vh;
                }
                
                .form-header h1 {
                    font-size: 24px;
                }
            }
        </style>
        
        <div id="preferencesFormPopup" class="form-popup-overlay">
            <!-- Decorative background elements -->
            <div class="form-decoration decoration-1"></div>
            <div class="form-decoration decoration-2"></div>
            
            <button class="form-close-btn" title="Close">&times;</button>
            
            <div class="form-popup-container">
                <div class="form-header">
                    <h1>Movie & Series Preferences</h1>
                </div>
                
                <p class="form-description">
                    Please select all options that match your interests.
                </p>
                
                <form id="moviePreferencesForm">
                    <!-- Question 1 -->
                    <div class="question-section">
                        <div class="question-number">Which genres do you enjoy?</div>
                        <div class="options-list">
                            <div class="option-item">
                                <input type="checkbox" id="genre-action" name="genre" value="action" class="checkbox-custom">
                                <label for="genre-action" class="checkbox-label">Action</label>
                            </div>
                            <div class="option-item">
                                <input type="checkbox" id="genre-romance" name="genre" value="romance" class="checkbox-custom">
                                <label for="genre-romance" class="checkbox-label">Romance</label>
                            </div>
                            <div class="option-item">
                                <input type="checkbox" id="genre-comedy" name="genre" value="comedy" class="checkbox-custom">
                                <label for="genre-comedy" class="checkbox-label">Comedy</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Question 2 -->
                    <div class="question-section">
                        <div class="question-number">What type of story do you prefer?</div>
                        <div class="options-list">
                            <div class="option-item">
                                <input type="checkbox" id="story-true" name="story" value="true-stories" class="checkbox-custom">
                                <label for="story-true" class="checkbox-label">True stories (based on real events)</label>
                            </div>
                            <div class="option-item">
                                <input type="checkbox" id="story-fictional" name="story" value="fictional" class="checkbox-custom">
                                <label for="story-fictional" class="checkbox-label">Fictional stories</label>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Question 3 -->
                    <div class="question-section">
                        <div class="question-number">What kind of theme do you like?</div>
                        <div class="options-list">
                            <div class="option-item">
                                <input type="checkbox" id="theme-mystery" name="theme" value="mystery" class="checkbox-custom">
                                <label for="theme-mystery" class="checkbox-label">Mystery</label>
                            </div>
                            <div class="option-item">
                                <input type="checkbox" id="theme-light" name="theme" value="light" class="checkbox-custom">
                                <label for="theme-light" class="checkbox-label">Light and fun</label>
                            </div>
                        </div>
                    </div>
                    
                    <div class="submit-section">
                        <button type="submit" class="submit-btn">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    // Add to DOM
    document.body.insertAdjacentHTML('beforeend', formPopupHTML);
    
    // Get elements
    const formPopup = document.getElementById('preferencesFormPopup');
    const closeBtn = formPopup.querySelector('.form-close-btn');
    const form = document.getElementById('moviePreferencesForm');
    
    // Close function
    const closeFormPopup = () => {
        formPopup.style.display = 'none';
    };
    
    // Add event listeners
    closeBtn.addEventListener('click', closeFormPopup);
    formPopup.addEventListener('click', (e) => {
        if (e.target === formPopup) closeFormPopup();
    });
    
    // Form submit handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Collect form data
        const preferences = {
            genres: [],
            storyTypes: [],
            themes: []
        };
        
        // Get selected genres
        document.querySelectorAll('input[name="genre"]:checked').forEach(checkbox => {
            preferences.genres.push(checkbox.value);
        });
        
        // Get selected story types
        document.querySelectorAll('input[name="story"]:checked').forEach(checkbox => {
            preferences.storyTypes.push(checkbox.value);
        });
        
        // Get selected themes
        document.querySelectorAll('input[name="theme"]:checked').forEach(checkbox => {
            preferences.themes.push(checkbox.value);
        });
        
        console.log('User preferences:', preferences);
        
        // Add animation before closing
        formPopup.style.opacity = '0';
        formPopup.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            closeFormPopup();
            // Trigger recommendations display (handled by main.js)
            if (window.triggerRecommendations) {
                window.triggerRecommendations(preferences);
            }
        }, 300);
        
        return preferences;
    });
    
    // Public methods
    return {
        show: function() {
            formPopup.style.display = 'flex';
            formPopup.style.opacity = '0';
            formPopup.style.transform = 'translateY(20px)';
            
            // Animate in
            setTimeout(() => {
                formPopup.style.opacity = '1';
                formPopup.style.transform = 'translateY(0)';
            }, 10);
        },
        hide: closeFormPopup,
        getForm: function() {
            return form;
        }
    };
}