// Wait for the page to load
document.addEventListener("DOMContentLoaded", function() {
    // Get the elements
    const intro1 = document.getElementById("intro1");
    const intro2 = document.getElementById("intro2");
    const intro3 = document.getElementById("intro3");
    const text1 = document.getElementById("text1");
    const text2 = document.getElementById("text2");
    const music = document.getElementById("play");
  

    // Play the background music
    music.play();
    // Add a class to the first paragraph after a delay
    music.addEventListener("playing", function()
  {
    
    //4 seconds interval in the intro text
    //intro1
    setTimeout(function() {
      intro1.classList.add("show");
    }, 1000);
    setTimeout(function() {
        intro1.classList.add("exit");
      }, 4000);

    //intro2
    // Add a class to the second paragraph after a delay
    setTimeout(function() {
      intro2.classList.add("show");
    }, 5000);

    setTimeout(function() {
      intro2.classList.add("exit");
    }, 8000);

    //intro 3
    setTimeout(function() {
      intro3.classList.add("show");
    }, 9000);

    setTimeout(function() {
      intro3.classList.add("exit");
    }, 11000);

    //main text
    //text1
    setTimeout(function() {
      text1.classList.add("show");
    }, 12000);

    setTimeout(function() {
      text1.classList.add("exit");
    }, 15000);

  });


}); 