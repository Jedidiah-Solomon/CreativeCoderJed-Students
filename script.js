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

      // Clear previous content
      greetingElement.textContent = "";

      // Create and append a new h2 element to avoid using innerHTML - warning given to us by codacy
      const h2Element = document.createElement("h2");
      h2Element.textContent = `${timeOfDay}, ${studentName}! Welcome to Creative Coder Jed's Class 🎉`;
      greetingElement.appendChild(h2Element);

      greetingElement.style.display = "block";

      // Show banner and program section
      document.getElementById("banner").style.display = "block";
      document.getElementById("programSection").style.display = "block";
    } else {
      greetingElement.textContent = ""; // Clear previous content
      const h4Element = document.createElement("h4");
      h4Element.textContent = "Please enter your name to proceed.";
      h4Element.style.color = "red";
      greetingElement.appendChild(h4Element);

      greetingElement.style.display = "block";
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
    messageElement.textContent = ""; // Clear previous content

    let messageText = "";

    switch (selectedPrograms.length) {
      case 1:
        messageText = "Awesome choice! You're going to excel in: ";
        break;
      case 2:
        messageText = "Great choice for two programs! You're ready for: ";
        break;
      case 3:
        messageText =
          "You chose them all! Remember, the task load will be good, but you'll rock at: ";
        break;
      default:
        messageText =
          "You need to select at least one program! Passion and hard work await.";
    }

    if (selectedPrograms.length > 0) {
      messageElement.style.color = "";
      const strongElement = document.createElement("strong");
      strongElement.textContent = selectedPrograms.join(", ");

      // Append the dynamic message
      messageElement.appendChild(document.createTextNode(messageText));
      messageElement.appendChild(strongElement);
      messageElement.appendChild(
        document.createTextNode(". Let's get started! 💪")
      );
    } else {
      messageElement.textContent = messageText;
      messageElement.style.color = "red"; // Show the "no selection" message
    }
  });
