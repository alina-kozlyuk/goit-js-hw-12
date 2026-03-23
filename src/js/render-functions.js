import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMoreBtn = document.querySelector('.load-more-button')
const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});


export function createGallery(images) {
    const markup = images.map(image => `
        <li class="gallery-item">
      <a href="${image.largeImageURL}">
        <img class="gallery-image" src="${image.webformatURL}" alt="${image.tags}" loading="lazy" />
      </a>
      <div class="info">
        <p>Likes: ${image.likes}</p>
        <p>Views: ${image.views}</p>
        <p>Comments: ${image.comments}</p>
        <p>Downloads: ${image.downloads}</p>
      </div>
    </li>
        `).join('');
    
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.style.display = 'block';
}

export function hideLoader() {
    loader.style.display = 'none';
}

export function showLoadMoreButton() {
    loadMoreBtn.classList.remove('hide');
}

export function hideLoadMoreButton() {
    loadMoreBtn.classList.add('hide');
}