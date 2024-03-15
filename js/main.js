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
  "https://example.com/image1.jpg",
  "https://example.com/image2.jpg",
  "https://example.com/image3.jpg",

];


for (let i = 4; i <= 1000; i++) {
    images.push(`https://via.placeholder.com/800x300?text=Slide%20${i}`);
}

// Functie om de slider met afbeeldingen te vullen
function populateSlider() {
    const slidesContainer = document.getElementById('slides');
    slidesContainer.innerHTML = ''; 

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

window.addEventListener('load', populateSlider);

const youtubeThumbnails = [
    "https://www.youtube.com/watch?v=rtGELHBIcx0",

  ];
  
  function getRandomThumbnail() {
    return youtubeThumbnails[Math.floor(Math.random() * youtubeThumbnails.length)];
  }
  
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