import galleryItems from '../template/galleryItems.hbs';
import refs from './refs';

function updateHitsMarkup(hits) {
  const markup = galleryItems(hits);
  refs.hitsContainer.insertAdjacentHTML('beforeend', markup);
}
export default updateHitsMarkup;
