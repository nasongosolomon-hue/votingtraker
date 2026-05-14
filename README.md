# votingtraker
# CitizenVote Platform

## Purpose
A simplified digital voting application that allows users to view candidates, cast ballots, and see real-time results.

## Features
* **Semantic Structure:** Built using `<header>`, `<nav>`, `<main>`, and `<footer>`.
* **Responsive Design:** Fully functional
* **Data Persistence:** Uses `localStorage` to save voting data so results remain after refresh.
* **Dynamic UI:** JavaScript handles form submission and dynamically generates the results list.

## How It Works
1.  **Home:** Overview of the election and candidates.
2.  **Vote:** Users fill out a validated form (Name, ID, and Candidate).
3.  **Results:** JavaScript retrieves the stored array from the browser and calculates the total.

### 5. JavaScript & Data Persistence
- **Event Handling:** Uses `addEventListener` for form submissions and DOM content loading.
- **DOM Manipulation:** Dynamic creation of vote logs and stats (Total Votes, Frontrunner) without page reloads.
- **Data Persistence:** Utilizes `localStorage` to save ballot data, allowing the results to persist even after the browser is closed or refreshed.

## Technical Details
* **HTML5:** Structured for accessibility.
* **CSS3:** Flexbox and Grid for layout.
* **JavaScript:** Event listeners, DOM manipulation, and JSON storage.

## 📦 How to Run the Project
1. Clone this repository to your local machine:
   ```bash
   git clone [git@github.com:nasongosolomon-hue/votingtraker.git)
