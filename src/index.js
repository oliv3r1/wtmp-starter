const coursesEn = [
  "Hamburger, cream sauce and poiled potates",
  "Goan style fish curry and whole grain rice",
  "Vegan Chili sin carne and whole grain rice",
  "Broccoli puree soup, side salad with two napas",
  "Lunch baguette with BBQ-turkey filling",
  "Cheese / Chicken / Vege / Halloum burger and french fries",
];
const coursesFi = [
  "Jauhelihapihvi, ruskeaa kermakastiketta ja keitettyä perunaa",
  "Goalaista kalacurrya ja täysjyväriisiä",
  "vegaani Chili sin carne ja täysjyväriisi",
  "Parsakeittoa,lisäkesalaatti kahdella napaksella",
  "Lunch baguette with BBQ-turkey filling",
  "Juusto / Kana / Kasvis / Halloumi burgeri ja ranskalaiset",
];
let language = "en";

const courses = document.getElementById("courses");

if (language === "en") {
  courses.innerHTML = coursesEn.join("<br>");
} else {
  courses.innerHTML = coursesFi.join("<br>");
}

const LanguageBtn = document.getElementById("Language");
LanguageBtn.addEventListener("click", function () {
  if (language === "en") {
    language = "fi";
  } else {
    language = "en";
  }
  if (language === "en") {
    courses.innerHTML = coursesEn.join("<br>");
  } else {
    courses.innerHTML = coursesFi.join("<br>");
  }
});

const sortCoursesBtn = document.getElementById("sortCourses");
sortCoursesBtn.addEventListener("click", function () {
  if (language === "en") {
    coursesEn.sort();
    courses.innerHTML = coursesEn.join("<br>");
  } else {
    coursesFi.sort();
    courses.innerHTML = coursesFi.join("<br>");
  }
});

const randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", function () {
  let randomDish;
  if (language === "en") {
    randomDish = coursesEn[Math.floor(Math.random() * coursesEn.length)];
  } else {
    randomDish = coursesFi[Math.floor(Math.random() * coursesFi.length)];
  }
  courses.innerHTML = randomDish;
});
