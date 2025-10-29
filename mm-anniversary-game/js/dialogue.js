let typingSound = null;

function typewriterEffect(elementId, text, callback) {
  const element = document.getElementById(elementId);
  element.textContent = '';
  element.dataset.fullText = text;
  let charIndex = 0;
  const typingSpeed = 50;
  
  // Start looping typing sound
  typingSound = document.getElementById('sfx-typing');
  if (typingSound) {
    typingSound.loop = true;
    typingSound.currentTime = 0;
    typingSound.play().catch(e => console.log('Audio play failed:', e));
  }

  function typeNextChar() {
    if (charIndex < text.length) {
      element.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(typeNextChar, typingSpeed);
    } else {
      // Stop typing sound when done
      if (typingSound) {
        typingSound.pause();
        typingSound.currentTime = 0;
        typingSound.loop = false;
      }
      if (callback && typeof callback === 'function') callback();
    }
  }

  typeNextChar();
}

function enableSkipTypewriter(elementId) {
  const element = document.getElementById(elementId);
  function skipHandler() {
    const fullText = element.dataset.fullText;
    if (fullText) {
      element.textContent = fullText;
      // Stop typing sound immediately
      if (typingSound) {
        typingSound.pause();
        typingSound.currentTime = 0;
        typingSound.loop = false;
      }
      element.removeEventListener('click', skipHandler);
    }
  }
  element.addEventListener('click', skipHandler);
}