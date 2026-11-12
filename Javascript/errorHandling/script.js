function calculateResult(marks) {
  if (marks < 0 || marks > 100) {
    throw new Error("Marks must be between 0 and 100.");
  }

  return marks >= 40 ? "Pass" : "Fail";
}

document.getElementById("checkResult").addEventListener("click", function () {
  const marksInput = document.getElementById("marks");
  const resultOutput = document.getElementById("result");
  const errorOutput = document.getElementById("errorMessage");
  const processOutput = document.getElementById("processMessage");

  resultOutput.textContent = "";
  errorOutput.textContent = "";
  processOutput.textContent = "";

  try {
    if (marksInput.value.trim() === "") {
      throw new Error("Please enter the student's marks.");
    }

    const marks = Number(marksInput.value);

    console.log("Entered marks:", marks);

    const result = calculateResult(marks);

    console.log("Result:", result);

    resultOutput.textContent = "Marks: " + marks + " — Result: " + result;
  } catch (error) {
    console.error("Unable to calculate result:", error.message);

    errorOutput.textContent = "Error: " + error.message;
  } finally {
    console.log("Result-checking process finished.");

    processOutput.textContent = "Result-checking process finished.";
  }
});
