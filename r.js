// Dark Mode
const darkMode = document.getElementById("darkMode");

darkMode.addEventListener("click", function () {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        darkMode.innerHTML = "☀️";
    } else {
        darkMode.innerHTML = "🌙";
    }
});


// Kalkulator BMI
function calculateBMI() {

    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const result = document.getElementById("result");

    if (!weight || !height || weight <= 0 || height <= 0) {
        result.innerHTML = "⚠️ Masukkan berat dan tinggi badan terlebih dahulu.";
        result.style.color = "red";
        return;
    }

    const heightMeter = height / 100;

    const bmi = weight / (heightMeter * heightMeter);

    let category = "";

    if (bmi < 18.5) {
        category = "Berat badan kurang";
    } else if (bmi < 25) {
        category = "Berat badan normal";
    } else if (bmi < 30) {
        category = "Berat badan berlebih";
    } else {
        category = "Obesitas";
    }

    result.innerHTML =
        `BMI kamu: ${bmi.toFixed(1)}<br>${category}`;

    result.style.color = "#67d5da";
}