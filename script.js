const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");
const loadingEl = document.getElementById("loading");

const generateJoke = async () => {
  loadingEl.style.display = 'block'; // Show loading indicator
  const config = {
    headers: { Accept: "application/json" },
  };
  try {
    const res = await fetch("https://icanhazdadjoke.com/", config);
    if (!res.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await res.json();
    jokeEl.innerHTML = data.joke;
  } catch (error) {
    jokeEl.innerHTML = 'Oops! Something went wrong.';
    console.error('There was a problem with the fetch operation:', error);
  } finally {
    loadingEl.style.display = 'none'; // Hide loading indicator
  }
};

generateJoke();

jokeBtn.addEventListener("click", () => generateJoke());
