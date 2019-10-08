import React from 'react';
import { connect } from 'react-redux';

import {
  removeReadLater,
} from '../flux/actions';


const mapStateToProps = ({ readLater }) => {
  return {
    readLater
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    markRead: article => {
      dispatch(removeReadLater(article));
    }
  }
}

class ReadLater extends React.Component {

  render() {
    return (
      <div className="column column-55">
        <h2 className="newsColumnTitle">Read Later</h2>

        <ul className="readLaterList">
          {this.props.readLater.map(article => {
            return (
              <li key={article.id}>
                <h4 className="readLaterItem-title">{ article.webTitle }</h4>
                <section>
                  <a target="_blank" rel="noopener noreferrer" href={ article.webUrl } className="button button-clear">Read</a>
                  <button className="button button-clear" onClick={ () => this.props.markRead(article) }>Remove</button>
                </section>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReadLater);
