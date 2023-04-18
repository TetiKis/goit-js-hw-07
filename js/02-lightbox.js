import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryCards(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);


function createGalleryCards(galleryItems) {
    return galleryItems
        .map(({ preview, description, original }) =>
        `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`)
        .join('');
};

const lightbox = new SimpleLightbox('.gallery a', { captionsData:"alt",captionDelay: 250, captionPosition: "bottom",});

console.log(galleryItems);
