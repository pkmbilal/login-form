const doLogin = () => {
  let email = document.getElementById("uname").value;
  let password = document.getElementById("password").value;
  fetch("https://api.galaxieon.com/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.login) {
        alert("Login Suceess");
      } else {
        alert(res.err);
      }
    });
};
