**Simple Wordle Clone 🟩🟨⬜**

A lightweight recreation of the popular word guessing game, built with Next.js and React.

🎮 How to Play

Guess the 5-letter secret word in 6 tries.

After each guess, the tiles change color to show how close you are:

Green: Letter is in the word and in the correct spot.

Yellow: Letter is in the word but in the wrong spot.

Gray: Letter is not in the word.

✨ Features

Random Word Generation: Picks a new word from a local JSON list on every refresh.

Game Logic: Handles input validation, word comparison, and win/loss states.

Auto-Focus: Keeps the keyboard active for seamless typing.

Responsive Design: Styled with SCSS Modules.

🛠️ Tech Stack

Next.js (Pages Router)

React

Sass/SCSS

🚀 Getting Started

Follow these steps to run the project locally:

Clone the repository:

```bash
git clone https://github.com/Brkic365/WordleClone.git
cd wordle-clone
```

Install dependencies

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

📂 Project Structure

pages/index.js: Main game page and logic container.

components/WordGrid.jsx: Handles the grid rendering, user input, and coloring logic.

public/words.json: The list of valid 5-letter words used for the game.

styles/: CSS and SCSS modules for styling.
