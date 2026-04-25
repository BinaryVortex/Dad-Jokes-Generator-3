# Dad Jokes Generator

Dad Jokes Generator — a small, fun web app built with HTML, CSS, and JavaScript that shows random dad jokes with a single click. Perfect as a tiny practice project or a playful addition to your portfolio.

![App Screenshot](./Screenshot%202024-08-13%20075512.png)

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [How it works](#how-it-works)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Overview
This project displays random dad jokes on a simple, responsive UI. It’s implemented using vanilla HTML, CSS, and JavaScript — no build tools required. The interface keeps the focus on the joke and the action to generate a new one.

## Features
- Single-click generate a new dad joke
- Clean, responsive layout
- Lightweight: no dependencies or frameworks
- Easy to read and modify — great for beginners

## Demo
Open `index.html` in your browser to run the app locally. (See Installation below for running from a local dev server.)

## Installation
1. Clone the repository:
   git clone https://github.com/BinaryVortex/Dad-Jokes-Generator-3.git

2. Open the project folder:
   cd Dad-Jokes-Generator-3

3. Open `index.html` in your browser:
   - Double-click `index.html`, or
   - Serve it with a simple HTTP server (recommended for consistent behavior):
     - Python 3: `python -m http.server 8000` then visit `http://localhost:8000`

## Usage
- Click the "Get Joke" (or similar) button to fetch/display a new joke.
- Modify the JavaScript or CSS to change behavior or styling.

## How it works
- The UI is built with HTML and styled with CSS.
- JavaScript handles the button click, retrieves or rotates jokes, and updates the DOM.
- Jokes can be hard-coded in an array or fetched from an API — this project keeps things simple and local for learning and customization.

## Project Structure
A typical structure for this repo:
- index.html — main HTML page
- styles.css — styling for the app
- script.js — JavaScript to generate/display jokes
- Screenshot 2024-08-13 075512.png — project screenshot shown above

(Adjust filenames above if yours are named differently.)

## Technologies
- HTML
- CSS
- JavaScript

## Contributing
Contributions are welcome! Suggestions:
- Improve styling and accessibility
- Add animations or transitions
- Pull jokes from a public jokes API (with caching/fallback)
- Add tests or automated formatting

To contribute:
1. Fork the repo
2. Create a feature branch
3. Make changes and open a pull request

## License
This project is provided as-is. Add a license file (e.g., MIT) if you want to permit reuse and clarify terms.

## Contact
Created by BinaryVortex. Open an issue or PR if you want improvements or assistance.

Enjoy the jokes! 😄
