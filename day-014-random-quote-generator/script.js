const SELECTORS = {
  form: "form",
  quotes: ".quotes",
};

const QUOTES_API_URL = "https://type.fit/api/quotes";

const $form = document.querySelector(SELECTORS.form);
const $quotes = document.querySelector(SELECTORS.quotes);

/**
 *
 * @returns {Promise<{
 *  text: string,
 *  author: string
 * }[]>}
 */
function getQuotes() {
  return fetch(QUOTES_API_URL).then((response) => response.json());
}

/**
 *
 * @param {{
 * text: string,
 * author: string
 * }[]} quotes
 * @returns {void}
 */
function renderQuotes(quotes) {
  const quotesHTML = quotes
    .map(
      ({ author, text }) => `
    <li>
      <p>${text}</p>
      <p>${author}</p>
    </li>
  `
    )
    .join("");
  $quotes.innerHTML = quotesHTML;
}

document.addEventListener("DOMContentLoaded", async () => {
  const quotes = await getQuotes();

  $form.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = new FormData(event.target).get("number");
    if (!input) {
      return alert("Please enter a number");
    }
    const number = Number(input);
    if (isNaN(number)) {
      return alert("Please enter a valid number");
    }
    if (number < 1 || number > quotes.length) {
      return alert(`Please enter a number between 1 and ${quotes.length}`);
    }
    const randomQuotes = quotes
      .sort(() => Math.random() - 0.5)
      .slice(0, number);
    renderQuotes(randomQuotes);
  });
});
