container.innerHTML = new Array(36).
join(' ').
split(' ').
map(e => '<div></div>').
join('');


// JavaScript for glowing effect on the button
const authBtn = document.querySelector('.auth-btn');

function toggleGlow() {
  authBtn.classList.toggle('glow');
}

// Add a glowing effect every 1 second
setInterval(toggleGlow, 1000);