  // JavaScript om het menu te openen en te sluiten
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const menu = document.getElementById('menu');

  openMenuBtn.addEventListener('click', function() {
      menu.style.right = '0';
  });

  closeMenuBtn.addEventListener('click', function() {
      menu.style.right = '-300px';
  });


const images = [

];


for (let i = 1; i <= 1000; i++) {
    images.push(`https://via.placeholder.com/800x300?text=Slide%20${i}`);
}

// Functie om de slider met afbeeldingen te vullen
function populateSlider() {
  const slidesContainer = document.getElementById('slides');
  slidesContainer.innerHTML = ''; 

  images.forEach((imageUrl, index) => {
      const slide = document.createElement('div');
      slide.classList.add('slide');
      const img = document.createElement('img');  
      img.src = imageUrl;
      img.alt = "Slide";
      slide.appendChild(img);

      // Toevoegen van tekst aan de dia's
      const text = document.createElement('div');
      text.classList.add('slide-text');
      text.textContent = `Tekst voor slide ${index + 1}`;
      slide.appendChild(text);

      slidesContainer.appendChild(slide);
  });
}
