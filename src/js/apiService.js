const apiKey = `16290047-7b6548ffe654f3fa0918abe1b`;

export default {
  seachQuery: '',
  page: 1,

  fetchHits(searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${apiKey}`;

    return fetch(url)
      .then(res => res.json())
      .then(({ hits }) => {
        this.incrementPage();
        return hits;
      })
      .catch(error => console.log(error));
  },
  resetPage() {
    this.page = 1;
  },
  incrementPage() {
    this.page += 1;
  },
  get query() {
    return this.seachQuery;
  },
  set query(value) {
    this.seachQuery = value;
  },
};
