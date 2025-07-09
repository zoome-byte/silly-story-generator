function generateStory() {
  var character = document.getElementById("character").value;

  if (character.trim() === "") {
    document.getElementById("story").textContent = "Please enter a character name.";
    return;
  }

  var actions = ["danced nicely", "sneezed fire", "ate bread", "sang a song", "built a rocket"];
  var places = ["on the stage", "in a haunted house", "at school", "in a forest", "in a heavy park"];
  var times = ["at midnight", "during breakfast", "while it was raining", "on a sunny Tuesday", "during the full moon"];

  var action = actions[Math.floor(Math.random() * actions.length)];
  var places = places[Math.floor(Math.random() * places.length)];
  var times = times[Math.floor(Math.random() * times.length)];


  var story = character + " " + action + " " + places + " " + times + ".";
  document.getElementById("story").textContent = story;
}
