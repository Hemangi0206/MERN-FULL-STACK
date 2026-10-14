let country = "India";

function outer() {
    let city = "Bhopal";

    function inner() {
        let name = "Raj";

        console.log(name);
        console.log(city);
        console.log(country);
    }

    inner();
}

outer();


/*function outer() {
    let message = "Hello";

    function inner() {
        console.log(message);
    }

    inner();
}

outer();*/

//globalfunction

let course = "JavaScript";

function showCourse() {
    console.log(course);
}

showCourse();