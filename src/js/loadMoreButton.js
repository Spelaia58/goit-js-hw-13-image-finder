import refs from './refs.js';

const loadMoreBtn = {
  enable() {
    refs.loadMoreBtn.disabled = false;
    refs.loadMoreBtnLable.textContent = 'Show more';
    refs.loadMoreBtnSpinner.classList.add('is-hidden');
  },
  disable() {
    refs.loadMoreBtn.disabled = true;
    refs.loadMoreBtnLable.textContent = 'Loading...';
    refs.loadMoreBtnSpinner.classList.remove('is-hidden');
  },
  hide() {
    refs.loadMoreBtn.classList.remove('is-hidden');
  },
};
export default loadMoreBtn;
