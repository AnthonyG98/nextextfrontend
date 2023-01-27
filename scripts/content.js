let url = "http://localhost:3001";
let responseFromLogin;

const onLogin = async () => {
  const loginData = {
    username: document.getElementById("username").value,
    password: document.getElementById("password").value,
  };
  fetch(`${url}/users/login`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: loginData.username,
      password: loginData.password,
    }),
  })
    .then((response) => response.json())
    .then((response) =>
      chrome.storage.sync.set({ key: JSON.stringify(response.id) }).then(() => {
        alert(`Your response is ${JSON.stringify(response.id)}`);
      })
    );
};

const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", onLogin);
