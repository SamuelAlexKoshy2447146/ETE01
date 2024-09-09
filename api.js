baseurl = "https://samuelalexkoshy2447146.github.io/ETE01/coures.json";
// baseurl = "https://api.coursera.org/api/courses.v1";

let allcourses = [];
let courses = [];
let page = 1;

document.addEventListener(
    "DOMContentLoaded",
    async () =>
        await fetch(baseurl)
            .then((response) => response.json())
            .then((result) => {
                allcourses = result;
                courses = allcourses;
                console.log(result);
                displayCourses();
            })
);

function displayCourses() {
    document.getElementById("row").innerHTML = "";
    start = (page - 1) * 2;
    end = start + 2;
    for (let i = start; i < Math.min(end, courses.length); i++) {
        let newcourse = document.createElement("div");
        newcourse.className = "course";
        let title = document.createElement("div");
        title.className = "title";
        title.innerHTML = courses[i].title;
        let content = document.createElement("div");
        content.innerHTML = "Instructor: " + courses[i].instructor;
        content.innerHTML += "<br/>Category: " + courses[i].category;
        content.innerHTML += "<br/>Duration: " + courses[i].duration;
        content.innerHTML += "<br/>Rating: " + courses[i].rating;
        content.innerHTML += `<br/>Price: ${courses[i].price}`;
        newcourse.appendChild(title);
        newcourse.appendChild(content);
        document.getElementById("row").appendChild(newcourse);
    }
    prevPage = document.getElementById("prevPage").disabled = page === 1;
    nextPage = document.getElementById("nextPage").disabled =
        courses.length <= end;
}

function changePage(index) {
    page = page + index;
    displayCourses();
}

function search() {
    const titleQuery = document.getElementById("title").value.toLowerCase();
    const instructorQuery = document
        .getElementById("instructor")
        .value.toLowerCase();
    const categoryQuery = document
        .getElementById("category")
        .value.toLowerCase();
    const ratingQuery = document.getElementById("rating").value;
    const durationQuery = document.getElementById("duration").value;
    const sortCriteria = document.getElementById("sortCriteria").value;

    const filteredcourses = allcourses.filter(
        (course) =>
            (titleQuery === "" ||
                course.title.toLowerCase().includes(titleQuery)) &&
            (instructorQuery === "" ||
                course.instructor.toLowerCase().includes(instructorQuery)) &&
            (categoryQuery === "" ||
                course.category.toLowerCase().includes(categoryQuery)) &&
            (ratingQuery === "" || course.rating >= ratingQuery) &&
            (durationQuery === "" || course.duration <= durationQuery)
    );
    if (sortCriteria) {
        filteredcourses.sort((a, b) => {
            if (typeof a[sortCriteria] === "string") {
                return a[sortCriteria].localeCompare(b[sortCriteria]);
            } else if (typeof a[sortCriteria] === "number") {
                return a[sortCriteria] - b[sortCriteria];
            }
            return 0;
        });
    }
    page = 1;
    courses = filteredcourses;
    displayCourses();
}
