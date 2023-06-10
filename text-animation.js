// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const intro1 = document.getElementById("intro1");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
  
    // Add a class to the first paragraph after a delay
    setTimeout(function() {
      text1.classList.add("show");
    }, 2000);

    setTimeout(function() {
        text1.classList.add("exit");
      }, 13000);

    // Add a class to the second paragraph after a delay
    setTimeout(function() {
      text2.classList.add("show");
    }, 15000);
  });
  