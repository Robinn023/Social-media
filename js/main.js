  // JavaScript om het menu te openen en te sluiten
  const openMenuBtn = document.getElementById('open-menu');
  const closeMenuBtn = document.getElementById('close-menu');
  const menu = document.getElementById('menu');

  openMenuBtn.addEventListener('click', function() {
      menu.style.right = '0';
  });

  closeMenuBtn.addEventListener('click', function() {
      menu.style.right = '-300px'; // Verberg het menu weer
  });

// Array van willekeurige afbeeldingen
const images = [
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",
    // Voeg meer afbeeldings-URL's toe indien nodig
    // Je kunt dit handmatig doen, maar hier is een voorbeeld van het genereren van URL's tot 1000:
];

// Genereer URL's voor 1000 slides
for (let i = 4; i <= 1000; i++) {
    images.push(`https://via.placeholder.com/800x300?text=Slide%20${i}`);
}

// Functie om de slider met willekeurige afbeeldingen te vullen
function populateSlider() {
    const slidesContainer = document.getElementById('slides');
    slidesContainer.innerHTML = ''; // Leeg de inhoud van de slides container

    images.forEach(imageUrl => {
        const slide = document.createElement('div');
        slide.classList.add('slide');
        const img = document.createElement('img');
        img.src = imageUrl;
        img.alt = "Slide";
        slide.appendChild(img);
        slidesContainer.appendChild(slide);
    });
}

// Vul de slider bij het laden van de pagina
window.addEventListener('load', populateSlider);

// Array met YouTube-thumbnailafbeeldingen
const youtubeThumbnails = [
    "https://www.youtube.com/watch?v=rtGELHBIcx0",
    // Voeg hier meer thumbnail-URL's toe
  ];
  
  // Functie om een willekeurige thumbnail-URL te krijgen
  function getRandomThumbnail() {
    return youtubeThumbnails[Math.floor(Math.random() * youtubeThumbnails.length)];
  }
  
  // Voeg 500 willekeurige slides toe
  const slidesContainer = document.querySelector('.slides');
  for (let i = 0; i < 500; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slide');
    
    const img = document.createElement('img');
    img.src = getRandomThumbnail();
    img.alt = "YouTube Thumbnail";
    
    slide.appendChild(img);
    slidesContainer.appendChild(slide);
  }