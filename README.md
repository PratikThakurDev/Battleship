🛳️ Battleship Game – Player vs Computer
A browser-based Battleship game built with JavaScript, HTML, and CSS.
Play against a computer opponent that remembers your ship hits and targets nearby cells using basic AI logic.



🎮 Features
🔷 10×10 Grid for both player and computer

🚢 Ships placed randomly at game start or reshuffle

✅ Click on enemy grid to attack

💥 Hits turn red, misses turn gray

🧠 Smart AI: computer targets adjacent cells after scoring a hit

🕹️ Restart & Reshuffle buttons

🌓 Dark theme styling

🧠 Smart AI
After hitting one of your ships, the computer will:

Store the hit coordinates

Try adjacent cells (up, down, left, right) in future moves

Fall back to random moves if no smart guesses are available

📂 File Structure
graphql
Copy
Edit
Battleship/
├── index.html            # Main game HTML layout
├── style.css             # Dark themed CSS styling
├── index.js              # Main game logic & event handling
├── gameSetup.js          # Board generation & ship placement
├── playingLogic.js       # Attack handling, win checks
├── DOMstuff.js           # Functions for rendering boards & hits
├── README.md             # You're here :)
🧪 Tech Used
JavaScript (ES6 modules)

HTML5 + CSS3

Webpack (module bundler)

No external libraries

🚀 How to Run
Clone the repo

bash
Copy
Edit
git clone https://github.com/your-username/battleship-game.git
cd battleship-game
Install dependencies

nginx
Copy
Edit
npm install
Start the development server

arduino
Copy
Edit
npm run start
Open http://localhost:8080 in your browser.

🔧 Future Improvements
Let users place their own ships

Add animations and sounds

Track moves and turns

Multiplayer (local or online)

Smarter AI with direction-tracking