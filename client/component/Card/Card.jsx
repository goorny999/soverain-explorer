
import Component from 'core/Component';
import PropTypes from 'prop-types';
import React from 'react';

export default class Card extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    title: PropTypes.string
  };

  render() {
    const { props } = this;

    return (
      <div
        className={ `card ${ props.className ? props.className : '' }` }
        style={ !!props.style ? props.style : {} }>
        <div className="card__title--noline">
          <div className="card__title--left">
            <p>{ props.title }</p>
          </div>
          <div className="card__title--right">
            <p>{ props.subTitle }</p>
          </div>
        </div>
        {this.props.footer ? <div className="card__footer">
          <p>{ props.footer }</p>
        </div> : null}
        {this.props.single ? props.children : <div className="card__body">
          { props.children }
        </div>}
      </div>
    );
  };
}
