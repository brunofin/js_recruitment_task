import { createStore } from 'redux'
import theGuardianApp from './reducers'

const store = createStore(theGuardianApp, {
    newsResults: [],
    readLater: [],
    filterParameters: {
        query: '',
        section: '',
        page: 1,
        totalPages: 1,
        sectionValues: []
    }
});

export default store;
