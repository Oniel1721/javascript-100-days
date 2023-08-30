const REQUEST_WITH_FETCH = "fetch"; // 'ajax'
const REQUEST_WITH_AJAX = "ajax"; // 'ajax'
const REQUEST_WITH = REQUEST_WITH_FETCH;

const SELECTORS = {
  button: "button",
  usersList: "#users-list",
};

const $button = document.querySelector(SELECTORS.button);
const $usersList = document.querySelector(SELECTORS.usersList);

const renderUsers = (users) => {
  const usersHTML = users.map((user, i) => {
    return `
      <li><strong>${user.name}</strong> <span>${user.email}</span></li>
      ${i === users.length - 1 ? "" : "<hr>"}
    `;
  });

  $usersList.innerHTML = usersHTML.join("");
};

const getUsersWithFetch = () => {
  const url = "/day-013-http-request/users.json";
  return fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
};

const getUsersWithAjax = () => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    const url = "/day-013-http-request/users.json";
    xhr.open("GET", url);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject("Could not fetch users");
      }
    };
    xhr.send();
  });
};

const getUsers = () => {
  if (REQUEST_WITH === REQUEST_WITH_FETCH) {
    return getUsersWithFetch();
  } else if (REQUEST_WITH === REQUEST_WITH_AJAX) {
    return getUsersWithAjax();
  }
};

$button.addEventListener("click", () => {
  getUsers()
    .then(renderUsers)
    .catch(() => {
      alert("Could not fetch users");
    });
});
