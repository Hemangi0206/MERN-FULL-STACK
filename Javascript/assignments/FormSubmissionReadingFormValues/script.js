document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById("studentForm");

  if (studentForm) {
    studentForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const fullNameInput = document.getElementById("fullName");
      const emailInput = document.getElementById("emailAddress");
      const courseInput = document.getElementById("courseName");

      const studentName = fullNameInput ? fullNameInput.value.trim() : "";
      const studentEmail = emailInput ? emailInput.value.trim() : "";
      const studentCourse = courseInput ? courseInput.value.trim() : "";

      console.log("Student Name:", studentName);
      console.log("Student Email:", studentEmail);
      console.log("Selected Course:", studentCourse);
    });
  }

  const courseEnquiryForm = document.getElementById("courseEnquiryForm");

  if (courseEnquiryForm) {
    courseEnquiryForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const formData = new FormData(courseEnquiryForm);
      const name = formData.get("name");
      const email = formData.get("email");
      const phone = formData.get("phone");
      const course = formData.get("course");

      console.log("Name:", name);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("Interested Course:", course);

      for (const [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
    });
  }
});
