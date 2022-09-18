keys = document.querySelectorAll('.key');

playSound = key => {
    sound = document.querySelectorAll(`audio[data-key='${key}']`);
    sound[0].play();
}

keys.forEach(key => {
  key.addEventListener('click', () => {
    let data = key.dataset.key;
    playSound(data)
  })
});

document.addEventListener('keypress', e => {
    let data = e.key.toUpperCase().charCodeAt(0);
    playSound(data);
});