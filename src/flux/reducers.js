import { combineReducers } from 'redux'
import { ReadLaterActions, FilterActions, NewsResults } from './actions';

function readLater(state = [], action) {
  switch (action.type) {
    case ReadLaterActions.ADD_READ_LATER:
      return (() => {
        const index = state.findIndex(article => article.id === action.article.id);
        if (index === -1) {
          return [
            ...state,
            action.article
          ];
        } else {
          return state;
        }
      })()
    case ReadLaterActions.REMOVE_READ_LATER:
      return (() => {
        const index = state.findIndex(article => article.id === action.article.id);
        if (index !== -1) {
          state.splice(index, 1);
          return [...state];
        } else {
          return state;
        }
      })();
    default:
      return state
  }
};

function filterParameters(state = {}, action) {
  switch (action.type) {
    case FilterActions.SET_QUERY:
      return Object.assign({}, state, { query: action.query });
    case FilterActions.SET_SECTION:
      return Object.assign({}, state, { section: action.section });
    case FilterActions.SET_PAGE:
      return Object.assign({}, state, { page: Number(action.page) });
    case FilterActions.SET_TOTAL_PAGES:
      console.log(Number(action.totalPages));
      return Object.assign({}, state, { totalPages: Number(action.totalPages) });
    case FilterActions.SET_FILTER_SECTION_VALUES:
      return Object.assign({}, state, { sectionValues: action.sectionValues });
    case FilterActions.CLEAN_FILTERS:
      return {};
    default:
      return state;
  };
};

function newsResults(state = [], action) {
  switch (action.type) {
    case NewsResults.SET_RESULTS:
      return [...action.results];
    default:
      return state;
  };
};

const theGuardianApp = combineReducers({
  readLater,
  filterParameters,
  newsResults
});

export default theGuardianApp;
