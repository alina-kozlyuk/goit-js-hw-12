import axios from "axios";

export async function getImagesByQuery (query, page) {
   const BASE_URL = 'https://pixabay.com';
   const END_POINT = '/api/';
   const params = new URLSearchParams({
       key: '55046527-8fc3f9f8db0162eee6eb185b5',
       q: query,
       image_type: 'photo',
       orientation: 'horizontal',
       safesearch: true,
       page: page,
       per_page: 15,

   });
   const url = BASE_URL + END_POINT + '?' + params;
     
     const response = await axios.get(url)
    return response.data;
   };



