(function() {
  function $(id) {
    return document.getElementById(id);
  }

  var card = $('card'),
      openB = $('open'),
      closeB = $('close'),
      timer = null;
  console.log('wat', card);
  // openB.addEventListener('click', function () {
  //   card.setAttribute('class', 'open-half');
  //   if (timer) clearTimeout(timer);
  //   timer = setTimeout(function () {
  //     card.setAttribute('class', 'open-fully');
  //     timer = null;
  //   }, 1000);
  // });

  closeB.addEventListener('click', function () {
    card.setAttribute('class', 'close-half');
    if (timer) clearTimerout(timer);
    timer = setTimeout(function () {
      card.setAttribute('class', '');
      timer = null;
    }, 1000);
  });

}());


// VOLUME BUTTON
document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("bg-music");
  const volumeBtn = document.getElementById("volume-btn");

  let isMuted = false;

  volumeBtn.addEventListener("click", function () {
      isMuted = !isMuted;
      audio.muted = isMuted;
      volumeBtn.innerHTML = isMuted ? "🔇 <span class='volume-text'>dhur</span>" : "🔊 <span class='volume-text'>dhur</span>";
  });
});


// Flashcard Navigation Logic
document.addEventListener('DOMContentLoaded', () => {
  const flashcards = document.querySelectorAll('.flashcard');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const pageIndicator = document.getElementById('page-indicator');
  let currentIndex = 0;

  function updateFlashcards() {
      flashcards.forEach((card, index) => {
          card.classList.toggle('active', index === currentIndex);
      });
      pageIndicator.textContent = `${currentIndex + 1} / ${flashcards.length}`;
      prevBtn.disabled = currentIndex === 0;
      nextBtn.disabled = currentIndex === flashcards.length - 1;
  }

  prevBtn.addEventListener('click', () => {
      if (currentIndex > 0) {
          currentIndex--;
          updateFlashcards();
      }
  });

  nextBtn.addEventListener('click', () => {
      if (currentIndex < flashcards.length - 1) {
          currentIndex++;
          updateFlashcards();
      }
  });

  // Initialize the first flashcard
  updateFlashcards();
});
