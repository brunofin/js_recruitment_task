import React from 'react';
import { connect } from 'react-redux';
import { setFilterQuery, setFilterSection, setFilterPage } from '../flux/actions';

class FiltersSection extends React.Component {
  sectionSelectValues = [
    {
      value: 'all',
      label: 'All'
    }, {
      value: 'books',
      label: 'Books'
    }, {
      value: 'business',
      label: 'Business'
    }, {
      value: 'culture',
      label: 'Culture'
    }, {
      value: 'sport',
      label: 'Sport'
    }
  ];

  onNewsContentSearchChange = event => {
    this.props.setFilterQuery(event.target.value);
  };

  onSectionSelectChange = event => {
    this.props.setFilterSection(event.target.value);
  };

  onActivePageSelectChange = event => {
    this.props.setFilterPage(event.target.value);
  };

  render = () => {
    return (
      <section className="container filtersContainer">
        <div className="row">
          <div className="column searchColumn">
            <label htmlFor="newsContentSearch">News content search</label>
            <input type="search"
              placeholder="News content search"
              id="newsContentSearch"
              onChange={this.onNewsContentSearchChange}
              value={this.props.filterParameters.query} />
          </div>
          <div className="column">
            <label htmlFor="sectionSelect">Section</label>
            <select id="sectionSelect" value={this.props.filterParameters.section} onChange={this.onSectionSelectChange}>
              <option value="">All</option>
              {this.props.filterParameters.sectionValues.map(({ value, label }) => <option key={value} value={value}>{label}</option>)}
            </select>
          </div>
        </div>
        <div className="row">
          <div className="column column-20">
            <label htmlFor="activePageSelect">Active Page</label>
            <input type="number" min="1" max={this.props.filterParameters.totalPages} id="activePageSelect" value={this.props.filterParameters.page} onChange={this.onActivePageSelectChange} />
            <span>of {this.props.filterParameters.totalPages} pages</span>
          </div>
        </div>
      </section>
    );
  }
};


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFilterQuery: content => {
      dispatch(setFilterQuery(content));
    },
    setFilterSection: section => {
      dispatch(setFilterSection(section));
    },
    setFilterPage: page => {
      dispatch(setFilterPage(page));
    }
  }
}

const mapStateToProps = ({ filterParameters }) => {
  return {
    filterParameters
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FiltersSection);
