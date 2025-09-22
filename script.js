
let input = document.querySelector('#search');
let results = document.querySelector('#results');

let data = [
  { name: "Bulb", src: "./Bulb.jpg" },
  { name: "Character", src: "./Character.jpg" },
  { name: "Fire", src: "./Fire.jpg" },
  { name: "Horses", src: "./Horses.webp" },
  { name: "Mountain", src: "./Mountain.jpg" },
  { name: "Lambo", src: "./Lambo.jpg" }
];

function renderItems(items) {
  let html = "";
  items.forEach((e) => {
    html += `
      <div class="member">
        <img src="${e.src}" alt="${e.name}">
        <h2>${e.name}</h2>
      </div>
    `;
  });
  results.innerHTML = html;
}

renderItems(data);

input.addEventListener('input', () => {
  let filter = input.value.trim().toLowerCase();
  let filtered = data.filter((e) =>
    e.name.toLowerCase().startsWith(filter)
  );
  renderItems(filtered);
});
