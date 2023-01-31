let url = "http://localhost:3001";
let responseFromLogin;

const onLogin = async () => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    let urlForTask = tabs[0].url;
    alert(urlForTask);
    // use `url` here inside the callback because it's asynchronous!
  });
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
    .then(
      (response) =>
        chrome.storage.sync
          .set({ key: JSON.stringify(response.id) })
          .then(() => {
            // alert(`Your response is ${JSON.stringify(response.id)}`);
            alert(urlForTask);
          })
      // chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
      //   const activeTab = tabs[0];
      //   chrome.tabs.sendMessage(activeTab.id, { command: "openModal" });
      // })
    );
};

const loginBtn = document
  .getElementById("login-btn")
  .addEventListener("click", onLogin);
