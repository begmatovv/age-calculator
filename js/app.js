const btn = document.getElementById("btn");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");
const date = new Date();
// const input = document.querySelector("input");
// const labelError = document.querySelectorAll("label");

// age-result
const ageYear = document.getElementById("age-year");
const ageMonth = document.getElementById("age-month");
const ageDay = document.getElementById("age-day");
// age-result

console.log(date.getFullYear(), date.getMonth(), date.getDate());
btn.addEventListener("click", () => {
  if (
    year.value <= date.getFullYear() &&
    month.value <= 12 &&
    day.value <= 31
  ) {
    if (month.value < date.getMonth() + 1) {
      ageYear.textContent = date.getFullYear() - year.value;
    } else {
      ageYear.textContent = date.getFullYear() - year.value - 1;
    }

    if (month.value == date.getMonth() + 1 && day.value == date.getDate()) {
      console.log("heppy bit");
      ageYear.textContent++;
      ageMonth.textContent = 0;
      ageDay.textContent = 0;
    } else if (month.value <= date.getMonth() + 1) {
      ageMonth.textContent = 0;
      ageYear.textContent++;
      ageMonth.textContent = month.value - date.getMonth() - 1;
    } else if (month.value > date.getMonth()) {
      ageMonth.textContent = 12 + date.getMonth() + 1 - month.value;
    } else if ((month.value = date.getMonth())) {
    }

    if (day.value == date.getDate() + 1) {
      ageDay.textContent = 1;
    } else if (day.value < date.getDate()) {
      ageDay.textContent = Math.abs(date.getDate() - day.value);
    } else if (day.value > date.getDate()) {
      ageDay.textContent = Math.abs(date.getDate() - day.value);
    }
  } else {
  }
});

// KABISA YILI
// let yil = 2021;
// if (yil % 100 == 0 && yil % 400 == 0) {
//   console.log(`Kabisa yili`);
// } else if (yil % 4 == 0 && yil % 100 != 0) {
//   console.log(`Kabisa yili`);
// } else {
//   console.log(`KAbisa yili emas`);
// }
