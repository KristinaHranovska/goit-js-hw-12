import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { createMarkup } from "./create-markup";
import { getPictures } from "./get-pictures";


const formSearch = document.querySelector('.js-search');
const listImages = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const btnLoader = document.querySelector('.btn-load');
const loaderMore = document.querySelector('.loader-more');
let currentPage = 1;
let inputSearch = '';
let simpleLightboxExem;


loader.style.display = 'none';
loaderMore.style.display = 'none';
btnLoader.style.display = 'none';

formSearch.addEventListener('submit', onSearch);
btnLoader.addEventListener('click', onLoadMore);


function onSearch(event) {
  event.preventDefault();
  listImages.innerHTML = '';
  loader.style.display = 'block';
  btnLoader.style.display = 'none';
  currentPage = 1;

  inputSearch = event.target.elements.search.value;

  if (!inputSearch) {
    iziToast.warning({
      title: 'Caution',
      message: 'Sorry, but you did not fill out the field!',
    });
    loader.style.display = 'none';
    return;
  }

  getPictures(inputSearch, currentPage)
    .then(({ data }) => {
      loader.style.display = 'none';

      if (!data.hits.length) {
        iziToast.error({
          title: 'Error',
          message: 'Sorry, there are no images matching your search query. Please try again!',
        });
        return;
      }

      listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));

      simpleLightboxExem = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      simpleLightboxExem.refresh();

      btnLoader.style.display = 'block';
      formSearch.reset();
    })
    .catch((err) => {
      loader.style.display = 'none';
      console.log(err);
    });
}

function onLoadMore() {
  currentPage += 1;
  simpleLightboxExem.destroy();

  loaderMore.style.display = 'block';
  btnLoader.style.display = 'none';

  const getHeightImgCard = () => document.querySelector('.gallery-item').getBoundingClientRect();

  getPictures(inputSearch, currentPage)
    .then(({ data }) => {
      listImages.insertAdjacentHTML("beforeend", createMarkup(data.hits));
      window.scrollBy({
        top: getHeightImgCard().height * 2,
        left: 0,
        behavior: "smooth",
      });

      simpleLightboxExem = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        captionDelay: 250,
      });
      simpleLightboxExem.refresh();

      const totalPages = Math.ceil(data.totalHits / perPage);

      if (currentPage > totalPages) {
        iziToast.info({
          title: 'Caution',
          message: `We're sorry, but you've reached the end of search results.`,
        });

        btnLoader.style.display = 'none';
        loaderMore.style.display = 'none';

        return;
      }

      loaderMore.style.display = 'none';
      btnLoader.style.display = 'block';
    })
    .catch(error => console.log(error));
}