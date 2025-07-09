const customName = document.getElementById('customname');
const generateBtn = document.getElementById('generate');
const story = document.getElementById('story');

generateBtn.addEventListener('click', () => {
  let userName = customName.value.trim(); // Get input and remove extra spaces
  let newStory = `One day, Bob ate a pizza in the jungle. It was wild! 😂`;

  if (userName !== '') {
    newStory = newStory.replace('Bob', userName);
  }

  story.textContent = newStory;
});
