const SELECTORS = {
  input: "input",
  list: "ul",
};

const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
];

const $input = document.querySelector(SELECTORS.input);
const $list = document.querySelector(SELECTORS.list);

function renderList(list) {
  $list.innerHTML = list.map((item) => `<li>${item}</li>`).join("");
}

$input.addEventListener("input", (event) => {
  const value = event.target.value.trim().toLowerCase();

  if (!value) {
    renderList(US_STATES);
    return;
  }

  const filteredList = US_STATES.filter((item) =>
    item.toLowerCase().includes(value)
  );

  renderList(filteredList);
});

renderList(US_STATES);
