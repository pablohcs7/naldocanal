const reaction = document.querySelector('#reaction');
const buttons = document.querySelectorAll('[data-sound]');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    reaction.textContent = button.dataset.sound;
    button.animate([
      { transform: 'rotate(0deg) scale(1)' },
      { transform: 'rotate(-4deg) scale(1.08)' },
      { transform: 'rotate(3deg) scale(1.02)' },
      { transform: 'rotate(0deg) scale(1)' },
    ], {
      duration: 420,
      easing: 'cubic-bezier(.2,.8,.2,1)',
    });
  });
});
