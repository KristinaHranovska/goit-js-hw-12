import axios from "axios";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export { getPictures }

const perPage = 40;

async function getPictures(name, page) {
    const KEY = '40891115-11d0b88dd3a60afc830d1d27f';

    try {
        if (name.includes(' ')) {
            name.replace(/\s+/g, '+');
        }

        const response = await axios.get(`https://pixabay.com/api/`, {
            params: {
                key: KEY,
                q: name,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage,
            }
        })
        return response;
    }
    catch {
        iziToast.error({
            title: 'Error',
            message: 'Sorry! The site is currently unavailable. Please try later!',
        });
        console.error(error.message);
    }
}