import axios from "axios";

export function getImagesByQuery(query) {
   const BASE_URL = 'https://pixabay.com';
   const END_POINT = '/api/';
   const params = new URLSearchParams({
       key: '55046527-8fc3f9f8db0162eee6eb185b5',
       q: query,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: true
   });
   const url = BASE_URL + END_POINT + '?' + params;
     
    return axios.get(url).then(response => response.data)
   
   };



