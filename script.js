const vehicles = {
  scooter: [
    {
      name: "Honda Activa 6G",
      price: 78000,
      variants: ["Standard", "Deluxe"],
      image: "https://via.placeholder.com/200x120?text=Activa+6G"
    },
    {
      name: "TVS Jupiter",
      price: 76000,
      variants: ["Classic", "ZX", "SmartXonnect"],
      image: "https://via.placeholder.com/200x120?text=TVS+Jupiter"
    }
  ],
  motorcycle: [
    {
      name: "Yamaha FZ-S",
      price: 120000,
      variants: ["Standard", "Dark Knight"],
      image: "https://via.placeholder.com/200x120?text=Yamaha+FZ-S"
    },
    {
      name: "Honda Shine",
      price: 78000,
      variants: ["Drum", "Disc"],
      image: "https://via.placeholder.com/200x120?text=Honda+Shine"
    }
  ],
  ev: [
    {
      name: "Ather 450X",
      price: 145000,
      variants: ["Standard", "Pro Pack"],
      image: "https://via.placeholder.com/200x120?text=Ather+450X"
    },
    {
      name: "Ola S1 Pro",
      price: 139000,
      variants: ["S1", "S1 Pro"],
      image: "https://via.placeholder.com/200x120?text=Ola+S1+Pro"
    }
  ]
};

function showCategory(type) {
  const display = document.getElementById("vehicleDisplay");
  display.innerHTML = `<h2>Showing ${type.toUpperCase()}s</h2>`;
  vehicles[type].forEach(v => {
    const card = document.createElement("div");
    card.className = "vehicleCard";
    card.innerHTML = `
      <img src="${v.image}" alt="${v.name}" />
      <h3>${v.name}</h3>
      <p>Base Price: ₹${v.price}</p>
      <p>Variants: ${v.variants.join(", ")}</p>
      <button class="compareBtn" onclick="addToCompare('${v.name}', ${v.price})">Compare</button>
    `;
    display.appendChild(card);
  });
}

function addToCompare(name, price) {
  const box = document.getElementById("compareBox");
  const item = document.createElement("div");
  item.innerHTML = `<strong>${name}</strong> - ₹${price}`;
  box.appendChild(item);
}

function calculateEMI() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const R = parseFloat(document.getElementById("interestRate").value) / 1200;
  const N = parseInt(document.getElementById("tenure").value);
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  document.getElementById("emiResult").textContent = `Monthly EMI: ₹${emi.toFixed(2)}`;
}
function addToCompare(name, price) {
  const box = document.getElementById("compareBox");
  if (!box) return;
  const item = document.createElement("div");
  item.innerHTML = `<strong>${name}</strong> - ₹${price}`;
  box.appendChild(item);
}

function calculateEMI() {
  const P = parseFloat(document.getElementById("loanAmount").value);
  const R = parseFloat(document.getElementById("interestRate").value) / 1200;
  const N = parseInt(document.getElementById("tenure").value);
  const emi = (P * R * Math.pow(1 + R, N)) / (Math.pow(1 + R, N) - 1);
  document.getElementById("emiResult").textContent = `Monthly EMI: ₹${emi.toFixed(2)}`;
}