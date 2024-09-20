document
  .getElementById("nameForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const studentName = document.getElementById("studentName").value.trim();
    const greetingElement = document.getElementById("greeting");

    if (studentName) {
      const currentHour = new Date().getHours();
      let timeOfDay;

      if (currentHour < 12) {
        timeOfDay = "Good morning";
      } else if (currentHour < 16) {
        timeOfDay = "Good afternoon";
      } else {
        timeOfDay = "Good evening";
      }

      greetingElement.innerHTML = `<h2>${timeOfDay}, ${studentName}! Welcome to Creative Coder Jed's Class 🎉</h2>`;
      greetingElement.style.display = "block";

      // Show banner and program section
      document.getElementById("banner").style.display = "block";
      document.getElementById("programSection").style.display = "block";
    } else {
      greetingElement.innerHTML = "<h4>Please enter your name to proceed.</h4>";
      greetingElement.style.display = "block";
      greetingElement.style.color = "red";
    }
  });

document
  .getElementById("programForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const checkboxes = document.querySelectorAll(
      'input[name="program"]:checked'
    );
    const selectedPrograms = [];
    checkboxes.forEach((checkbox) => {
      selectedPrograms.push(checkbox.value);
    });

    const messageElement = document.getElementById("message");

    if (selectedPrograms.length > 0) {
      messageElement.innerHTML = `Awesome choice! You're going to excel in: <strong>${selectedPrograms.join(
        ", "
      )}</strong>. Now, let's dive in! 💪`;
    } else {
      messageElement.innerHTML = `You need to select at least one program! Passion and hard work await.`;
    }
  });
