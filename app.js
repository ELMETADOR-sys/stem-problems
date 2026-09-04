// ===== Application State =====
const appState = {
    currentUser: null,
    users: {},
    problems: [],
    comments: {},
    userProgress: {},
    userScores: {},
    isQuizMode: false,
    currentQuiz: null,
    quizAnswers: {}
};

// ===== Sample Problems Data (Basic - expanded database imported separately) =====
const basicProblems = [
    {
        id: 1,
        subject: 'mathematics',
        difficulty: 'easy',
        title: 'Solving Linear Equations',
        description: 'Learn how to solve basic linear equations',
        problem: 'Solve for x: 2x + 5 = 13',
        image: 'https://images.unsplash.com/photo-1633356122544-f134324ef6db?w=400&h=250&fit=crop',
        solution: 'Step 1: Subtract 5 from both sides\n2x + 5 - 5 = 13 - 5\n2x = 8\n\nStep 2: Divide both sides by 2\nx = 8/2\nx = 4',
        steps: [
            { number: 1, title: 'Identify the equation', content: '2x + 5 = 13' },
            { number: 2, title: 'Subtract 5 from both sides', content: '2x + 5 - 5 = 13 - 5\n2x = 8' },
            { number: 3, title: 'Divide by 2', content: 'x = 8/2\nx = 4' },
            { number: 4, title: 'Verify', content: '2(4) + 5 = 8 + 5 = 13 ✓' }
        ],
        explanation: 'To solve linear equations, isolate the variable by performing the same operations on both sides.',
        views: 1205,
        solved: 342,
        quizQuestion: {
            type: 'multiple',
            question: 'Solve for x: 2x + 5 = 13',
            options: ['x = 3', 'x = 4', 'x = 5', 'x = 6'],
            correct: 1,
            points: 5
        }
    }
];

// ===== Initialize App =====
function initializeApp() {
    loadFromLocalStorage();
    setupEventListeners();
    
    // Merge basic problems with expanded database
    if (typeof expandedProblems !== 'undefined') {
        appState.problems = expandedProblems;
    } else {
        appState.problems = basicProblems;
    }
    
    updateStats();
    
    if (!appState.currentUser) {
        document.getElementById('heroSection').style.display = 'flex';
        document.querySelector('.main-container').style.display = 'none';
        showLoginModal();
    } else {
        updateUserDisplay();
        loadProblems();
    }
}

// ===== Local Storage =====
function saveToLocalStorage() {
    const dataToSave = {
        currentUser: appState.currentUser,
        users: appState.users,
        comments: appState.comments,
        userProgress: appState.userProgress,
        userScores: appState.userScores,
        isQuizMode: appState.isQuizMode
    };
    localStorage.setItem('appState', JSON.stringify(dataToSave));
}

function loadFromLocalStorage() {
    const saved = localStorage.getItem('appState');
    if (saved) {
        const loaded = JSON.parse(saved);
        appState.currentUser = loaded.currentUser;
        appState.users = loaded.users;
        appState.comments = loaded.comments;
        appState.userProgress = loaded.userProgress;
        appState.userScores = loaded.userScores;
        appState.isQuizMode = loaded.isQuizMode;
    }
}

// ===== Event Listeners =====
function setupEventListeners() {
    // Login/Logout
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('signupForm').addEventListener('submit', handleSignup);
    
    // Modal
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', closeAllModals);
    });
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeAllModals();
        });
    });
    
    // Toggle signup/login
    document.querySelectorAll('.toggle-signup').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthForms();
        });
    });
    document.querySelectorAll('.toggle-login').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            toggleAuthForms();
        });
    });
    
    // Filters
    document.querySelectorAll('.filter-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', loadProblems);
    });
    document.getElementById('sortBy').addEventListener('change', loadProblems);
    document.getElementById('clearFilters').addEventListener('click', clearAllFilters);
    
    // Search
    document.getElementById('searchBar').addEventListener('input', () => {
        debounceSearch();
    });
    document.querySelector('.search-btn').addEventListener('click', loadProblems);
    
    // Toggle view
    document.getElementById('toggleView').addEventListener('click', toggleViewMode);
}

// ===== Authentication =====
function showLoginModal() {
    document.getElementById('loginModal').classList.add('active');
}

function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.classList.remove('active');
    });
}

function toggleAuthForms() {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    
    if (loginForm.style.display === 'none') {
        loginForm.style.display = 'flex';
        signupForm.style.display = 'none';
    } else {
        loginForm.style.display = 'none';
        signupForm.style.display = 'flex';
    }
}

function handleLogin(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (appState.users[username] && appState.users[username].password === password) {
        appState.currentUser = {
            username: username,
            email: appState.users[username].email,
            points: appState.users[username].points || 0,
            joinedDate: appState.users[username].joinedDate
        };
        saveToLocalStorage();
        closeAllModals();
        updateUserDisplay();
        document.getElementById('heroSection').style.display = 'none';
        document.querySelector('.main-container').style.display = 'grid';
        loadProblems();
    } else {
        alert('❌ Invalid credentials. Try username: student1, password: password123');
    }
}

function handleSignup(e) {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('❌ Passwords do not match');
        return;
    }
    
    if (appState.users[username]) {
        alert('❌ Username already exists');
        return;
    }
    
    appState.users[username] = {
        email: email,
        password: password,
        points: 0,
        joinedDate: new Date().toISOString()
    };
    
    appState.currentUser = {
        username: username,
        email: email,
        points: 0,
        joinedDate: new Date().toISOString()
    };
    
    saveToLocalStorage();
    closeAllModals();
    updateUserDisplay();
    document.getElementById('heroSection').style.display = 'none';
    document.querySelector('.main-container').style.display = 'grid';
    loadProblems();
    alert('✅ Account created successfully!');
}

function logout() {
    appState.currentUser = null;
    appState.isQuizMode = false;
    saveToLocalStorage();
    document.getElementById('userDisplay').style.display = 'none';
    document.getElementById('loginBtn').style.display = 'block';
    document.getElementById('heroSection').style.display = 'flex';
    document.querySelector('.main-container').style.display = 'none';
}

function updateUserDisplay() {
    if (appState.currentUser) {
        document.getElementById('userDisplay').style.display = 'flex';
        document.getElementById('loginBtn').style.display = 'none';
        document.getElementById('userName').textContent = appState.currentUser.username;
        document.getElementById('userPoints').textContent = appState.currentUser.points + ' pts';
    }
}

// ===== Problems Loading =====
function loadProblems() {
    if (appState.isQuizMode) {
        loadQuizMode();
        return;
    }
    
    const container = document.getElementById('problemsContainer');
    
    // Get filter values
    const selectedSubjects = Array.from(
        document.querySelectorAll('.filter-checkbox:checked')
    ).filter(el => ['mathematics', 'science', 'physics', 'biology', 'chemistry'].includes(el.value))
     .map(el => el.value);
    
    const selectedDifficulties = Array.from(
        document.querySelectorAll('.filter-checkbox:checked')
    ).filter(el => ['easy', 'medium', 'hard'].includes(el.value))
     .map(el => el.value);
    
    const searchTerm = document.getElementById('searchBar').value.toLowerCase();
    const sortBy = document.getElementById('sortBy').value;
    
    // Filter problems
    let filtered = appState.problems.filter(p => {
        const matchesSubject = selectedSubjects.length === 0 || selectedSubjects.includes(p.subject);
        const matchesDifficulty = selectedDifficulties.length === 0 || selectedDifficulties.includes(p.difficulty);
        const matchesSearch = p.title.toLowerCase().includes(searchTerm) || 
                            p.description.toLowerCase().includes(searchTerm);
        return matchesSubject && matchesDifficulty && matchesSearch;
    });
    
    // Sort
    if (sortBy === 'popular') {
        filtered.sort((a, b) => b.views - a.views);
    } else if (sortBy === 'difficulty') {
        const diffOrder = { easy: 0, medium: 1, hard: 2 };
        filtered.sort((a, b) => diffOrder[a.difficulty] - diffOrder[b.difficulty]);
    }
    
    // Display
    if (filtered.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #64748b;">No problems found. Try adjusting your filters.</p>';
        return;
    }
    
    container.innerHTML = filtered.map(problem => `
        <div class="problem-card" onclick="openProblem(${problem.id})">
            <div class="problem-card-header">
                <div class="problem-badges">
                    <span class="badge badge-subject">${problem.subject}</span>
                    <span class="badge badge-difficulty ${problem.difficulty}">${problem.difficulty}</span>
                </div>
                <button class="icon-btn" onclick="event.stopPropagation(); bookmarkProblem(${problem.id})" title="Bookmark">⭐</button>
            </div>
            <h3>${problem.title}</h3>
            <p>${problem.description}</p>
            <img src="${problem.image}" alt="${problem.title}" class="problem-card-image">
            <div class="problem-card-footer">
                <div class="problem-stats">
                    <span>👁️ ${problem.views}</span>
                    <span>✓ ${problem.solved}</span>
                </div>
                <div class="problem-card-actions">
                    <button class="icon-btn" onclick="event.stopPropagation()" title="View">→</button>
                </div>
            </div>
        </div>
    `).join('');
}

// ===== Quiz Mode =====
function loadQuizMode() {
    const container = document.getElementById('problemsContainer');
    
    if (appState.problems.length === 0) {
        container.innerHTML = '<p>No problems available for quiz.</p>';
        return;
    }
    
    // Shuffle problems
    const shuffled = [...appState.problems].sort(() => Math.random() - 0.5).slice(0, 10);
    
    appState.currentQuiz = {
        problems: shuffled,
        currentIndex: 0,
        score: 0,
        answers: {}
    };
    
    displayQuizProblem();
}

function displayQuizProblem() {
    const container = document.getElementById('problemsContainer');
    
    if (!appState.currentQuiz || appState.currentQuiz.currentIndex >= appState.currentQuiz.problems.length) {
        finishQuiz();
        return;
    }
    
    const problem = appState.currentQuiz.problems[appState.currentQuiz.currentIndex];
    const question = problem.quizQuestion;
    
    const html = `
        <div style="grid-column: 1/-1; background: white; padding: 2rem; border-radius: 12px; box-shadow: var(--shadow);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
                <h3>Quiz Mode</h3>
                <span style="font-weight: 600;">Question ${appState.currentQuiz.currentIndex + 1} of ${appState.currentQuiz.problems.length}</span>
            </div>
            
            <div style="margin-bottom: 2rem; padding: 1.5rem; background: #f0f9ff; border-radius: 8px; border-left: 4px solid var(--primary-color);">
                <h2 style="font-size: 1.5rem; margin-bottom: 1rem;">${problem.title}</h2>
                <p style="color: #64748b; margin-bottom: 1rem;">${problem.description}</p>
                <p style="font-size: 1.1rem; font-weight: 500;">${question.question}</p>
            </div>
            
            <div style="display: grid; gap: 1rem; margin-bottom: 2rem;">
                ${question.options.map((option, index) => `
                    <label style="display: flex; align-items: center; padding: 1rem; border: 2px solid var(--border-color); border-radius: 8px; cursor: pointer; transition: all 0.3s ease;">
                        <input type="radio" name="quiz-answer" value="${index}" style="width: 20px; height: 20px; cursor: pointer;">
                        <span style="margin-left: 1rem; font-size: 1rem;">${option}</span>
                    </label>
                `).join('')}
            </div>
            
            <div style="display: flex; gap: 1rem;">
                <button class="btn-primary" onclick="submitQuizAnswer()">Submit Answer</button>
                <button class="btn-secondary" onclick="skipQuizQuestion()">Skip Question</button>
            </div>
            
            <div style="margin-top: 2rem; background: #f8fafc; padding: 1rem; border-radius: 8px;">
                <strong>Progress:</strong>
                <div style="width: 100%; height: 8px; background: var(--border-color); border-radius: 4px; margin-top: 0.5rem; overflow: hidden;">
                    <div style="width: ${(appState.currentQuiz.currentIndex / appState.currentQuiz.problems.length) * 100}%; height: 100%; background: var(--primary-color); transition: width 0.3s ease;"></div>
                </div>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

function submitQuizAnswer() {
    const selected = document.querySelector('input[name="quiz-answer"]:checked');
    if (!selected) {
        alert('Please select an answer');
        return;
    }
    
    const answer = parseInt(selected.value);
    const problem = appState.currentQuiz.problems[appState.currentQuiz.currentIndex];
    const question = problem.quizQuestion;
    
    appState.currentQuiz.answers[problem.id] = answer;
    
    if (answer === question.correct) {
        appState.currentQuiz.score += question.points;
        alert('✅ Correct! +' + question.points + ' points');
    } else {
        alert('❌ Incorrect. The correct answer is: ' + question.options[question.correct]);
    }
    
    appState.currentQuiz.currentIndex++;
    displayQuizProblem();
}

function skipQuizQuestion() {
    appState.currentQuiz.currentIndex++;
    displayQuizProblem();
}

function finishQuiz() {
    const container = document.getElementById('problemsContainer');
    const totalQuestions = appState.currentQuiz.problems.length;
    const correctAnswers = Object.keys(appState.currentQuiz.answers).length;
    const percentage = (appState.currentQuiz.score / (totalQuestions * 10)) * 100;
    
    // Save score
    if (!appState.userScores[appState.currentUser.username]) {
        appState.userScores[appState.currentUser.username] = [];
    }
    
    appState.userScores[appState.currentUser.username].push({
        date: new Date().toISOString(),
        score: appState.currentQuiz.score,
        percentage: percentage.toFixed(1)
    });
    
    // Award points
    const pointsEarned = Math.round(appState.currentQuiz.score);
    appState.currentUser.points += pointsEarned;
    appState.users[appState.currentUser.username].points = appState.currentUser.points;
    
    saveToLocalStorage();
    updateUserDisplay();
    
    const html = `
        <div style="grid-column: 1/-1; background: white; padding: 3rem; border-radius: 12px; box-shadow: var(--shadow); text-align: center;">
            <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">🎉 Quiz Complete!</h2>
            
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin: 2rem 0;">
                <div style="padding: 1.5rem; background: #f0fdf4; border-radius: 8px; border: 2px solid var(--success-color);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--success-color);">${percentage.toFixed(1)}%</div>
                    <div style="color: #64748b; margin-top: 0.5rem;">Score</div>
                </div>
                <div style="padding: 1.5rem; background: #fef3c7; border-radius: 8px; border: 2px solid var(--warning-color);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--warning-color);">${correctAnswers}/${totalQuestions}</div>
                    <div style="color: #64748b; margin-top: 0.5rem;">Correct</div>
                </div>
                <div style="padding: 1.5rem; background: #dbeafe; border-radius: 8px; border: 2px solid var(--primary-color);">
                    <div style="font-size: 2rem; font-weight: 700; color: var(--primary-color);">+${pointsEarned}</div>
                    <div style="color: #64748b; margin-top: 0.5rem;">Points</div>
                </div>
            </div>
            
            <div style="margin: 2rem 0; padding: 1.5rem; background: #f8fafc; border-radius: 8px;">
                <h3 style="margin-bottom: 1rem;">Performance</h3>
                <p style="color: #64748b; margin-bottom: 0.5rem;">Great job! Keep practicing to improve your score.</p>
                <div style="margin-top: 1rem; padding: 1rem; background: white; border-radius: 6px; border-left: 4px solid var(--primary-color);">
                    <p style="font-size: 0.9rem;"><strong>Total Points:</strong> ${appState.currentUser.points}</p>
                </div>
            </div>
            
            <div style="display: flex; gap: 1rem; justify-content: center; margin-top: 2rem;">
                <button class="btn-primary" onclick="toggleViewMode()">Return to Problems</button>
                <button class="btn-secondary" onclick="loadQuizMode()">Take Another Quiz</button>
            </div>
        </div>
    `;
    
    container.innerHTML = html;
}

// ===== Problem Detail =====
function openProblem(id) {
    if (!appState.currentUser) {
        alert('Please login first');
        return;
    }
    
    const problem = appState.problems.find(p => p.id === id);
    if (!problem) return;
    
    // Populate modal
    document.getElementById('problemTitle').textContent = problem.title;
    document.getElementById('problemSubject').textContent = problem.subject;
    document.getElementById('problemSubject').className = 'badge badge-subject';
    document.getElementById('problemDifficulty').textContent = problem.difficulty;
    document.getElementById('problemDifficulty').className = `badge badge-difficulty ${problem.difficulty}`;
    document.getElementById('problemStatement').textContent = problem.problem;
    document.getElementById('problemImage').src = problem.image;
    document.getElementById('problemImage').style.display = 'block';
    document.getElementById('problemSolution').textContent = problem.solution;
    
    // Steps
    const stepsHTML = problem.steps.map(step => `
        <div class="step">
            <div class="step-number">${step.number}</div>
            <div class="step-content">
                <strong>${step.title}</strong><br>
                <span class="problem-text">${step.content}</span>
            </div>
        </div>
    `).join('');
    document.getElementById('stepByStep').innerHTML = stepsHTML;
    
    // Comments
    loadComments(id);
    
    // Mark complete button
    document.getElementById('markCompletedBtn').onclick = () => markProblemComplete(id);
    document.getElementById('submitCommentBtn').onclick = () => submitComment(id);
    document.getElementById('bookmarkBtn').onclick = () => bookmarkProblem(id);
    
    document.getElementById('problemModal').classList.add('active');
}

// ===== Comments =====
function loadComments(problemId) {
    const commentsList = document.getElementById('commentsList');
    const comments = appState.comments[problemId] || [];
    
    if (comments.length === 0) {
        commentsList.innerHTML = '<p style="color: #64748b; text-align: center; padding: 1rem;">No comments yet. Be the first to comment!</p>';
        return;
    }
    
    commentsList.innerHTML = comments.map((comment, index) => `
        <div class="comment">
            <span class="comment-author">👤 ${comment.author}</span>
            <span class="comment-time">${new Date(comment.timestamp).toLocaleDateString()}</span>
            <div class="comment-text">${comment.text}</div>
        </div>
    `).join('');
}

function submitComment(problemId) {
    const text = document.getElementById('commentText').value;
    if (!text.trim()) {
        alert('Please write a comment');
        return;
    }
    
    if (!appState.comments[problemId]) {
        appState.comments[problemId] = [];
    }
    
    appState.comments[problemId].push({
        author: appState.currentUser.username,
        text: text,
        timestamp: new Date().toISOString()
    });
    
    document.getElementById('commentText').value = '';
    saveToLocalStorage();
    loadComments(problemId);
    alert('✅ Comment posted!');
}

// ===== Gamification =====
function markProblemComplete(problemId) {
    const points = 10;
    appState.currentUser.points += points;
    appState.users[appState.currentUser.username].points = appState.currentUser.points;
    
    if (!appState.userProgress[appState.currentUser.username]) {
        appState.userProgress[appState.currentUser.username] = [];
    }
    appState.userProgress[appState.currentUser.username].push({
        problemId: problemId,
        completedDate: new Date().toISOString()
    });
    
    saveToLocalStorage();
    updateUserDisplay();
    alert(`🎉 Problem solved! You earned ${points} points!\n\nTotal Points: ${appState.currentUser.points}`);
}

function bookmarkProblem(problemId) {
    alert('❤️ Problem bookmarked! (Feature coming soon)');
}

// ===== Filters & Search =====
function clearAllFilters() {
    document.querySelectorAll('.filter-checkbox').forEach(cb => cb.checked = true);
    document.getElementById('searchBar').value = '';
    document.getElementById('sortBy').value = 'newest';
    loadProblems();
    alert('✅ Filters cleared');
}

let searchTimeout;
function debounceSearch() {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => loadProblems(), 300);
}

// ===== View Modes =====
function toggleViewMode() {
    appState.isQuizMode = !appState.isQuizMode;
    saveToLocalStorage();
    
    const button = document.getElementById('toggleView');
    if (appState.isQuizMode) {
        button.innerHTML = '📚 Card View';
        button.style.background = '#10b981';
    } else {
        button.innerHTML = '📊 Quiz Mode';
        button.style.background = '';
    }
    
    loadProblems();
}

// ===== Stats =====
function updateStats() {
    const totalUsers = Object.keys(appState.users).length;
    document.getElementById('totalProblems').textContent = appState.problems.length;
    document.getElementById('totalUsers').textContent = totalUsers > 0 ? totalUsers : '1';
}

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', initializeApp);