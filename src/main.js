import "./style.css";

async function loadHello() {
  const res = await fetch("http://127.0.0.1:5000/api/hello");
  const data = await res.json();

  const app = document.querySelector("#app");
  if (app) {
    app.innerHTML = `
      <h1>Frontend + Flask</h1>
      <p>${data.message}</p>
    `;
  }
}

loadHello();
