/**
 *  Political Voting System
 
 */

// 1. DATA INITIALIZATION
// Retrieve votes from localStorage or start with an empty array
let electionData = JSON.parse(localStorage.getItem('electionData')) || [];

// 2. PAGE-SPECIFIC LOGIC
document.addEventListener('DOMContentLoaded', () => {
    
    // Check which page we are currently on
    if (document.getElementById('votingForm')) {
        initVotingPage();
    } 
    
    if (document.getElementById('results-list')) {
        initResultsPage();
    }
});

/**
 * --- VOTE PAGE LOGIC ---
 * Handles the submission of the ballot
 */
function initVotingPage() {
    const votingForm = document.getElementById('votingForm');
    const feedbackBox = document.getElementById('formFeedback');
    const feedbackMsg = document.getElementById('feedbackMessage');

    votingForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent page refresh

       