import './styles.css';
import './styles.css';
import updateHitsMarkup from './js/updateHitsMarkup';
import apiService from './js/apiService';
import refs from './js/refs';
import loadMoreBtn from './js/loadMoreButton.js';
import { alert, error, defaultModules } from '@pnotify/core/dist/PNotify.js';
import * as PNotifyMobile from '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';

defaultModules.set(PNotifyMobile, {});

refs.searchForm.addEventListener('submit', searchFormsSubmitHandler);
refs.loadMoreBtn.addEventListener('click', fetchHits);

function searchFormsSubmitHandler() {
  event.preventDefault();
  const form = event.currentTarget;
  apiService.query = form.elements.query.value.trim();
  if (!apiService.query) {
    return error({
      text: 'Ничего не найдено',
    });
  }
  //if (!apiService.query.text) {
  //return error({
  //text: 'Эй, такого здесь точно нет!',
  //});

  clearHitsContainer();
  form.reset();
  apiService.resetPage();
  fetchHits();
}

function fetchHits() {
  loadMoreBtn.disable();
  apiService.fetchHits().then(hits => {
    updateHitsMarkup(hits);
    loadMoreBtn.hide();
    loadMoreBtn.enable();
    window.scrollTo({
      top: document.documentElement.offsetHeight,
      behavior: 'smooth',
    });
  });
}
function clearHitsContainer() {
  refs.hitsContainer.innerHTML = '';
}
