function initParallax() {
  const bgImage = document.getElementById('bg-image');
  
  document.addEventListener('mousemove', (e) => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    
    const centerX = windowWidth / 2;
    const centerY = windowHeight / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const offsetX = (mouseX - centerX) / centerX * -10;
    const offsetY = (mouseY - centerY) / centerY * -10;
    
    bgImage.style.transform = `translate(calc(-50% + ${offsetX}%), calc(-50% + ${offsetY}%))`;
  });
}

