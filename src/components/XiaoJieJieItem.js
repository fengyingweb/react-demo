import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaoJieJieItem extends Component {
  constructor(props) {
    super(props)
    this.clickItem = this.clickItem.bind(this)
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('---shouldComponentUpdate---')
    console.log(nextProps)
    if (nextProps.item !== this.props.item) {
      return true;
    } else {
      return false;
    }
  }

  clickItem() {
    console.log(this.props)
    this.props.deleteItem(this.props.index)
  }

  render() {
    return (
      <li onClick={this.clickItem}>{`${this.props.avName}为你做: ${this.props.item}`}</li>
    );
  }
}

XiaoJieJieItem.propTypes = {
  index: PropTypes.number,
  item: PropTypes.string,
  deleteItem: PropTypes.func
}

XiaoJieJieItem.defaultProps = {
  avName: '苍井空'
}
 
export default XiaoJieJieItem;