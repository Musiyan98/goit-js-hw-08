// Add imports above this line
import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

const galleryBox = document.querySelector('.gallery');

createGalleryGrid(galleryItems);

function createGalleryGrid(obj) {
  const galleryGrid = obj.map(createGalleryItem);
  galleryBox.insertAdjacentHTML('beforeend', galleryGrid.join(' '));
}

function createGalleryItem({ preview, original, description }) {
  return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
}

new SimpleLightbox('.gallery a', {
  animationSpeed: 150,
  captionsData: 'alt',
  captionDelay: 250,
});
