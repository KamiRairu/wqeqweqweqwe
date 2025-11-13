// 💌 Show selected love language
function showMessage(language) {
  const message = document.getElementById('message');
  message.textContent = `You selected: ${language} ❤️`;
}

// 🌸 Background music logic
window.addEventListener('DOMContentLoaded', () => {
  const playButton = document.getElementById('playButton');
  const bgMusic = document.getElementById('bg-music');

  // Smooth fade-in function
  function fadeInAudio(audio, duration) {
    audio.volume = 0;
    audio.play();
    let step = 0.02; // volume increase step
    let interval = setInterval(() => {
      if (audio.volume < 1) {
        audio.volume = Math.min(audio.volume + step, 1);
      } else {
        clearInterval(interval);
      }
    }, duration / 50); // adjust fade speed
  }

  // 🎵 Play background music when button clicked
  if (playButton && bgMusic) {
    playButton.addEventListener('click', () => {
      fadeInAudio(bgMusic, 2000); // 2s fade-in
      playButton.style.display = 'none';
    });
  }

  // 🌸 Ticket Modal Logic
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('ticketModal');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close');
  const tickets = document.querySelectorAll('.ticket-img');

  tickets.forEach(ticket => {
    ticket.addEventListener('click', () => {
      modal.style.display = 'block';
      modalImg.src = ticket.src;
    });
  });

  closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.style.display = 'none';
    }
  });
});


  // Close popup when clicking close button or outside image
  if (close) {
    close.addEventListener("click", () => popup.style.display = "none");
  }

  if (popup) {
    popup.addEventListener("click", e => {
      if (e.target === popup) popup.style.display = "none";
    });
  }
});
