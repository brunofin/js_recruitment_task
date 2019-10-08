import React from 'react';
import { connect } from 'react-redux';

import {
  addReadLater,
} from '../flux/actions';

class Article extends React.Component {

  isReadLaterButtonAvailable = () => {
    try {
      return this.props.readLater.findIndex(article => article.id === this.props.article.id) === -1;
    } catch (e) {
      console.error(e);
      return true;
    }
  }

  render = () => {
    return (
      <article>
        <header>
          <h3>{this.props.article.webTitle}</h3>
        </header>
        <section className="newsDetails">
          <ul>
            <li><strong>Section Name: </strong>{this.props.article.sectionName}</li>
            <li><strong>Publication Date: </strong>{this.props.article.webPublicationDate}</li>
          </ul>
        </section>
        <section className="newsActions">
          <a target="_blank" rel="noopener noreferrer" href={this.props.article.webUrl} className="button">Full article</a>
          {
            this.isReadLaterButtonAvailable() &&
            <button className="button button-outline" onClick={this.props.addToReadLater}>Read Later</button>
          }
        </section>
      </article>
    )
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addToReadLater: () => {
      dispatch(addReadLater(ownProps.article))
    }
  }
}

const mapStateToProps = ({ readLater }) => {
  return {
    readLater
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);
