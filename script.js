const button = document.getElementById('generate');
const story = document.getElementById('story');

const characters = ['a ninja', 'a cat', 'an alien', 'a chicken', 'a dancing robot'];
const places = ['in the jungle', 'on the moon', 'under the sea', 'at school', 'in a haunted house'];
const actions = ['ate a pizza', 'did the floss dance', 'sang a rap song', 'built a time machine', 'flew a rocket'];

button.addEventListener('click', () => {
  const randomCharacter = characters[Math.floor(Math.random() * characters.length)];
  const randomPlace = places[Math.floor(Math.random() * places.length)];
  const randomAction = actions[Math.floor(Math.random() * actions.length)];

  const randomStory = `One day, ${randomCharacter} ${randomAction} ${randomPlace}. It was wild! 😂`;

  story.textContent = randomStory;
});
