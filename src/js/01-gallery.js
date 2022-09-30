// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);


// Change code below this line
const refs = {
    gallery : document.querySelector(".gallery"),
  };

  
const markup = galleryItems.reduce((acc, galleryItem) =>
    acc + `<a class="gallery__item" href="${galleryItem.original}">
          <img class="gallery__image" src="${galleryItem.preview}" alt="${galleryItem.description}" />
       </a>`, "");
       
refs.gallery.insertAdjacentHTML("beforeend", markup);
const lightbox = new SimpleLightbox(".gallery__item", {
    captionsData: "alt",
    captionDelay: 250,
  });