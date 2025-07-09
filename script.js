<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Silly Story Generator</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <main>
    <h1>Random Silly Story Generator</h1>
    <p>Enter a name below and click the button to generate a story:</p>

    <!-- 🔹 Name Input Field -->
    <label for="customname">Custom Name:</label>
    <input type="text" id="customname" placeholder="e.g., Karthik">

    <br><br>

    <!-- 🔹 Generate Button -->
    <button id="generate">Tell me a story!</button>

    <!-- 🔹 Story Output -->
    <p id="story"></p>
  </main>

  <!-- 🔹 JavaScript File -->
  <script>
    const customName = document.getElementById('customname');
    const generateBtn = document.getElementById('generate');
    const story = document.getElementById('story');

    const storyTemplate = "One day, :name: ate a pizza in the jungle. It was wild! 😂";

    generateBtn.addEventListener('click', () => {
      let newStory = storyTemplate;
      const name = customName.value.trim();

      if (name !== '') {
        newStory = newStory.replace(':name:', name);
      } else {
        newStory = newStory.replace(':name:', 'Bob'); // Default fallback
      }

      story.textContent = newStory;
    });
  </script>
</body>
</html>
