import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'

import './index.css';
import store from './flux/store'
import * as serviceWorker from './serviceWorker';
import App from './App';
import TheGuardianAPIService from './api/TheGuardianAPIService';
import { setNewsResults, setFilterSectionValues, setFilterTotalPages } from './flux/actions';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

const svc = new TheGuardianAPIService();

svc.getSections()
  .then(sections => store.dispatch(setFilterSectionValues(sections)));

svc.search()
  .then(({ response }) => {
    store.dispatch(setNewsResults(response.results));
    store.dispatch(setFilterTotalPages(response.pages));
  });

let currentQuery;
let currentSection;
let currentPage;
let queryDebouncer;

store.subscribe(function () {
  let previousQuery = currentQuery;
  currentQuery = store.getState().filterParameters.query;

  let previousSection = currentSection;
  currentSection = store.getState().filterParameters.section;

  let previousPage = currentPage;
  currentPage = store.getState().filterParameters.page;

  if (previousQuery !== currentQuery) {
    clearTimeout(queryDebouncer);
    queryDebouncer = setTimeout(() => {
      svc.search(currentQuery, currentSection, currentPage)
        .then(({ response }) => {
          store.dispatch(setNewsResults(response.results));
          store.dispatch(setFilterTotalPages(response.pages));
        });
    }, 500);
  } else if (previousSection !== currentSection ||
    previousPage !== currentPage) {
    svc.search(currentQuery, currentSection, currentPage)
      .then(({ response }) => {
        store.dispatch(setNewsResults(response.results));
        store.dispatch(setFilterTotalPages(response.pages));
      });
  }
});
