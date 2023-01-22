import LunchMenu from "./SodexoData.json";
console.log("lunch menu object", LunchMenu);

let language = "en";
let coursesList = [];
const getCoursesList = (() => {
  const courses = document.getElementById("courses");
  return function (language) {
    coursesList = [];
    for (let course in LunchMenu.courses) {
      if (language === "en") {
        coursesList.push(LunchMenu.courses[course].title_en);
      } else {
        coursesList.push(LunchMenu.courses[course].title_fi);
      }
    }
    courses.innerHTML = coursesList.join("<br>");
  };
})();

const languageSwitch = (() => {
  const LanguageBtn = document.getElementById("Language");
  return function () {
    LanguageBtn.addEventListener("click", function () {
      if (language === "en") {
        language = "fi";
      } else {
        language = "en";
      }
      getCoursesList(language);
    });
  };
})();

const sortCourses = (() => {
  const sortCoursesBtn = document.getElementById("sortCourses");
  return function () {
    sortCoursesBtn.addEventListener("click", function () {
      coursesList.sort();
      courses.innerHTML = coursesList.join("<br>");
    });
  };
})();

const randomBtn = (() => {
  const randomBtn = document.getElementById("randomBtn");
  return function () {
    randomBtn.addEventListener("click", function () {
      const randomIndex = Math.floor(Math.random() * coursesList.length);
      const randomDish = coursesList[randomIndex];
      courses.innerHTML = randomDish;
    });
  };
})();

export { getCoursesList, languageSwitch, sortCourses, randomBtn };
