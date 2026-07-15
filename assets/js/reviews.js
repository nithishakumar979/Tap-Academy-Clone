/* ═══════════════════════════════════════════════════════
   TAP ACADEMY – REVIEWS JS
   Testimonial slider with auto-play and touch support
   ═══════════════════════════════════════════════════════ */

let currentSlide = 0;
const totalSlides = 5;
let autoPlayTimer;
let touchStartX = 0;

function goToSlide(index) {
  currentSlide = (index + totalSlides) % totalSlides;
  const track = document.getElementById('slider-track');
  if (track) {
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
  }
  document.querySelectorAll('.dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === currentSlide);
  });
  resetAutoPlay();
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function resetAutoPlay() {
  clearInterval(autoPlayTimer);
  autoPlayTimer = setInterval(nextSlide, 5000);
}

// Touch/swipe support
const sliderWrapper = document.getElementById('testimonial-slider');
if (sliderWrapper) {
  sliderWrapper.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  }, { passive: true });
  sliderWrapper.addEventListener('touchend', (e) => {
    const diff = touchStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      diff > 0 ? nextSlide() : prevSlide();
    }
  }, { passive: true });
}

// Keyboard support
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
});

// Start auto-play
resetAutoPlay();
