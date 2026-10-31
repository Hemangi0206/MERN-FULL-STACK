// RICR Student Profile Manager

const student = {
  name: "Hemangi",
  age: 19,

  address: {
    city: "Bhopal",
    state: "Madhya Pradesh",
    pincode: 462001,
  },

  course: {
    title: "MERN Stack Development",
    duration: "6 Months",
  },
};

// Displaying student details using dot notation

console.log("Student Name: " + student.name);
console.log("Student City: " + student.address.city);
console.log("Student State: " + student.address.state);
console.log("Course Title: " + student.course.title);

// Displaying details using bracket notation

console.log("Pincode: " + student["address"]["pincode"]);
console.log("Course Duration: " + student["course"]["duration"]);

// Accessing property dynamically

const propertyName = "city";

console.log("Dynamic City: " + student.address[propertyName]);

// Updating student address

student.address.city = "Indore";
student.address.state = "Madhya Pradesh";

// Adding a new landmark property

student.address.landmark = "Rajwada Palace";

console.log("Updated Student Address:", student.address);

// RICR Institute Campus Information Manager

const institute = {
  name: "Sagar Institute of science and technology",

  campus: {
    location: {
      city: "Bhopal",
      state: "Madhya Pradesh",
    },
  },
};

// Displaying institute information using dot notation

console.log("Institute Name: " + institute.name);
console.log("Campus City: " + institute.campus.location.city);
console.log("Campus State: " + institute.campus.location.state);

// Accessing nested properties using bracket notation

console.log("City: " + institute["campus"]["location"]["city"]);
console.log("State: " + institute["campus"]["location"]["state"]);

// Accessing property dynamically

const locationProperty = "state";

console.log("Dynamic Location: " + institute.campus.location[locationProperty]);

// Updating campus city

institute.campus.location.city = "Indore";

// Adding pincode property

institute.campus.location.pincode = 452001;

console.log("Updated Campus Location:", institute.campus.location);

// Using optional chaining

console.log("Campus Landmark: " + institute.campus.location?.landmark);
console.log("Building Details: " + institute.campus.building?.name);
