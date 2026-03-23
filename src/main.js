import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from "./js/pixabay-api";
import { createGallery } from "./js/render-functions";
import { clearGallery } from "./js/render-functions";
import { showLoader } from "./js/render-functions";
import { hideLoader } from "./js/render-functions";


const refs = {
    form: document.querySelector('.form'),
}

refs.form.addEventListener('submit', e => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const query = formData.get('search-text').trim();

    if (query === '') {
        iziToast.error({
            message: 'Please enter a search query!',
            position: 'topRight'
        });
        return;
    }

    clearGallery();
    showLoader();
    
    getImagesByQuery(query)
        .then(data => {
            hideLoader();
            
            if (data.hits.length === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please try again!',
                    position: 'topRight'
                });
            } else {
                createGallery(data.hits);
            }
        })
        .catch(error => {
            hideLoader();
            iziToast.error({
        message: 'Oops, something went wrong!',
        position: 'topRight'
    });
            console.log(error);
        });
});


