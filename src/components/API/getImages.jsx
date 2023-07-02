const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33002129-c8fefc6a81330199b280704a4';

export const getImages = async (search, page) => {
  return fetch(
    `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
};