const output = document.getElementById("output");

let results = "";

for (let i = 0; i <= 100; i += 2) {
  results += i + " ";
}

output.textContent = results;
