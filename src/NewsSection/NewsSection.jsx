import React from 'react';
import Article from '../Article/Article';
import ReadLater from '../ReadLater/ReadLater';
import { connect } from 'react-redux';

class NewsSection extends React.Component {
  render() {
    return (
      <section className="container newsContainer">
        <div className="row">
          <div className="column column-65">
            <h2 className="newsColumnTitle">News List</h2>

            <ul className="newsList">
              {this.props.newsResults.map(article => <li key={article.id}><Article article={article}></Article></li>)}
            </ul>
          </div>

          <ReadLater></ReadLater>
        </div>
      </section>
    )
  }
};

const mapStateToProps = ({ newsResults }) => {
  return {
    newsResults
  };
};

export default connect(mapStateToProps)(NewsSection);
