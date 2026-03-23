import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";
import { showLoadMoreButton } from "./js/render-functions";
import { hideLoadMoreButton } from "./js/render-functions";


const refs = {
    form: document.querySelector('.form'),
    loadMoreBtn: document.querySelector('.load-more-button'),

}

let query = '';
let page = 1;
let totalHits = 0;

refs.form.addEventListener('submit', async e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    query = formData.get('search-text').trim();

    if (query === '') {
        iziToast.error({
            message: 'Please enter a search query!',
            position: 'topRight'
        });
        return;
    }

    page = 1;
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    
    try {
        const data = await getImagesByQuery(query, page);
        totalHits = data.totalHits;
            
        if (data.hits.length === 0) {
            iziToast.error({
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight'
            });
            return;
        }
       
        createGallery(data.hits);

          if (data.hits.length < 15 || page * 15 >= totalHits) {
              hideLoadMoreButton();
          } else {
            showLoadMoreButton();
          }
        
    } catch (error) {
        hideLoader();

        iziToast.error({
            message: 'Oops, something went wrong!',
            position: 'topRight'
        });
        console.log(error);
    } finally {
        hideLoader();
    }
});

refs.loadMoreBtn.addEventListener('click', async () => {
    page += 1;

    showLoader();

    try {
        const data = await getImagesByQuery(query, page);

        createGallery(data.hits);

        if (page * 15 >= totalHits) {
            hideLoadMoreButton();

            iziToast.info({
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight'

            });
        }

        const card = document.querySelector('.gallery-item');
        if (card) {
    const height = card.getBoundingClientRect().height;

    window.scrollBy({
        top: height * 2,
        behavior: 'smooth'
    });
        }
    } catch (error) {
        iziToast.error({
            message: 'Oops, something went wrong!',
            position: 'topRight'
        });
        console.log(error);
    } finally {
        hideLoader();
    }
});
        