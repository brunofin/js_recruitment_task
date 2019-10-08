
export const ReadLaterActions = {
    ADD_READ_LATER: 'ADD_READ_LATER',
    REMOVE_READ_LATER: 'REMOVE_READ_LATER'
};

export function addReadLater(article) {
    return {
        type: ReadLaterActions.ADD_READ_LATER,
        article
    };
};

export function removeReadLater(article) {
    return {
        type: ReadLaterActions.REMOVE_READ_LATER,
        article
    };
};

export const FilterActions = {
    SET_QUERY: 'SET_QUERY',
    SET_SECTION: 'SET_SECTION',
    SET_PAGE: 'SET_PAGE',
    SET_TOTAL_PAGES: 'SET_TOTAL_PAGES',
    CLEAN_FILTERS: 'CLEAN_FILTERS',
    SET_FILTER_SECTION_VALUES: 'SET_FILTER_SECTION_VALUES'
};

export function setFilterQuery(query = '') {
    return {
        type: FilterActions.SET_QUERY,
        query
    };
};

export function setFilterSection(section = '') {
    return {
        type: FilterActions.SET_SECTION,
        section
    };
};

export function setFilterPage(page = 1) {
    return {
        type: FilterActions.SET_PAGE,
        page
    };
};

export function setFilterTotalPages(totalPages = 1) {
    return {
        type: FilterActions.SET_TOTAL_PAGES,
        totalPages
    };
};

export function setFilterSectionValues(sectionValues) {
    return {
        type: FilterActions.SET_FILTER_SECTION_VALUES,
        sectionValues
    }
}

export function cleanFilters() {
    return {
        type: FilterActions.CLEAN_FILTERS
    };
};

export const NewsResults = {
    SET_RESULTS: 'SET_RESULTS'
};

export function setNewsResults(results = []) {
    return {
        type: NewsResults.SET_RESULTS,
        results
    };
};
