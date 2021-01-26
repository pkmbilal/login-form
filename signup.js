const doSignup = () => {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let username = document.getElementById("uname").value;
  let password = document.getElementById("password").value;
  fetch("https://api.galaxieon.com/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "same-origin",
    body: JSON.stringify({
      name,
      email,
      username,
      password,
    }),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.login) {
        alert("Signup Suceess");
      } else {
        alert(res.err);
      }
    });
};
