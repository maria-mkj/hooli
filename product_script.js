/* burger menu */
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('active');
  });
/* burger menu */



/* image slider */
document.addEventListener('DOMContentLoaded', function() {
  // Array of image URLs for each slider
  const images = [
      [
          "./img/laebepromade_flaeskesteg_lukket.jpg",
          "./img/laebepromade_flaeskesteg.jpg",
          "./img/flaeskesteg_produkt.jpg"
      ],
      [
          "./img/laebepromade_gloeg_lukket.jpg",
          "./img/laebepromade_gloeg.jpg",
          "./img/gloeg_produkt.jpg"
      ],
      [
          "./img/laebepromade_grantrae_lukket.jpg",
          "./img/laebepromade_grantrae.jpg",
          "./img/juletrae_produkt.jpg"
      ],
      [
          "./img/laebepromade_pebernoed_lukket.jpg",
          "./img/laebepromade_pebernoed.jpg",
          "./img/pebernoed_produkt.jpg"
      ],
      [
          "./img/laebepromade_risalamande_lukket.jpg",
          "./img/laebepromade_risalamande.jpg",
          "./img/risalamande_produkt.jpg"
      ],
      [
          "./img/laebepromade_roedkaal_lukket.jpg",
          "./img/laebepromade_roedkaal.jpg",
          "./img/roedkael_produkt.jpg"
      ],
      [
          "./img/laebepromade_sovs_lukket.jpg",
          "./img/laebepromade_sovs.jpg",
          "./img/brunsovs_produkt.jpg"
      ],
  ];

  // Loop through each product container section
  document.querySelectorAll('.product-container').forEach((container, index) => {
      const imgElement = container.querySelector('.product-img');
      const prevButton = container.querySelector('button:first-of-type');
      const nextButton = container.querySelector('button:last-of-type');

      let currentIndex = 0;
      const sliderImages = images[index];

      // Function to change the image source for the specific slider
      function changeImage(direction) {
          if (direction === 'prev') {
              currentIndex = (currentIndex - 1 + sliderImages.length) % sliderImages.length;
          } else {
              currentIndex = (currentIndex + 1) % sliderImages.length;
          }
          imgElement.src = sliderImages[currentIndex];
      }

      // Event listeners for buttons of the specific slider
      prevButton.addEventListener('click', () => {
          changeImage('prev');
      });

      nextButton.addEventListener('click', () => {
          changeImage('next');
      });
  });
});
/* image slider */