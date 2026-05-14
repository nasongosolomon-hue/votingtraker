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

        // Capture Form Data
        const voterName = document.getElementById('voterName').value;
        const voterID = document.getElementById('voterID').value;
        const selection = document.getElementById('candidateSelect').value;

        // Simple Validation Check
        if (voterID.length < 5) {
            alert("Please enter a valid Voter ID.");
            return;
        }

        // Create Vote Object
        const newVote = {
            id: Date.now(), // Unique ID
            name: voterName,
            voterID: voterID,
            candidate: selection,
            date: new Date().toLocaleString()
        };

        // Save to LocalStorage (Data Persistence)
        electionData.push(newVote);
        localStorage.setItem('electionData', JSON.stringify(electionData));

        // DOM Manipulation: Show success message
        votingForm.classList.add('hidden');
        feedbackBox.classList.remove('hidden');
        feedbackMsg.innerHTML = `Success! <strong>${voterName}</strong>, your ballot for <strong>${selection}</strong> has been cast.`;
    });
}

/**
 * --- RESULTS PAGE LOGIC ---
 * Displays data and calculates stats
 */
function initResultsPage() {
    const listContainer = document.getElementById('results-list');
    const totalDisplay = document.getElementById('totalVotesCount');
    const winnerDisplay = document.getElementById('leadingCandidate');

   