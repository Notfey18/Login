//creare una pagina html che mostra un bottone di login. 
//al click del bottone deve essere visualizzato un bottone per fare il logout. al refresh della pagina deve essere mantenuto lo stato utilizzando il localstorage





function onLoad() {
    const isLogged = localStorage.getItem("isLogged");
    if (isLogged === "true") {
      const newButton = document.createElement("button");
      newButton.textContent = "Logout";
      const page = document.getElementById("page");
      page.appendChild(newButton);
  
      function onClickLogoutButton() {
        localStorage.removeItem("isLogged");
        window.location.reload();
      }
  
      newButton.addEventListener("click", onClickLogoutButton);
    } else {
      const loginButton = document.createElement("button");
      loginButton.textContent = "Login";
      const page = document.getElementById("page");
      page.appendChild(loginButton);
  
      function onClickLoginButton() {
        localStorage.setItem("isLogged", "true");
        window.location.reload();
      }
      loginButton.addEventListener("click", onClickLoginButton);
    }
  }
  
  document.addEventListener("DOMContentLoaded", onLoad);
  