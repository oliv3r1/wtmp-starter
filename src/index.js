import LunchMenu from '../sodexo-day-example.json';
// Test
console.log('lunch menu object', LunchMenu);

let language = "en";

const courses = document.getElementById("courses");
let coursesList = [];

for (let course in LunchMenu.courses) {
    if (language === "en") {
        coursesList.push(LunchMenu.courses[course].title_en);
    } else {
        coursesList.push(LunchMenu.courses[course].title_fi);
    }
}
courses.innerHTML = coursesList.join("<br>");

const LanguageBtn = document.getElementById("Language");
LanguageBtn.addEventListener("click", function () {
    if (language === "en") {
        language = "fi";
    } else {
        language = "en";
    }

    coursesList = [];
    for (let course in LunchMenu.courses) {
        if (language === "en") {
            coursesList.push(LunchMenu.courses[course].title_en);
        } else {
            coursesList.push(LunchMenu.courses[course].title_fi);
        }
    }
    courses.innerHTML = coursesList.join("<br>");
});

const sortCoursesBtn = document.getElementById("sortCourses");
sortCoursesBtn.addEventListener("click", function () {
    coursesList.sort();
    courses.innerHTML = coursesList.join("<br>");
});

const randomBtn = document.getElementById("randomBtn");
randomBtn.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * coursesList.length);
    const randomDish = coursesList[randomIndex];
    courses.innerHTML = randomDish;
});