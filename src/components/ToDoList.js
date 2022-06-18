import React, { Component } from 'react';
// import store from '../store/store'
import {inputChangeAction, addItemAction, delItemAction, getToDoList} from '../store/actions'
import ToDoListUI from './ToDoListUI'
import {connect} from 'react-redux' // 连接provider
import {message} from 'antd';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    // this.state = store.getState() // 获取状态
    // this.storeChange = this.storeChange.bind(this)
    // store.subscribe(this.storeChange) // 订阅store
    this.clickAddItem = this.clickAddItem.bind(this)
  }
  
  // storeChange() {
  //   this.setState(store.getState())
  // }
  componentDidMount() {
    console.log('didMount:', this.props)
    this.props.getListData() // 获取异步数据
  }
  clickAddItem() {
    if (this.props.inputVal.trim()) {
      this.props.clickBtn()
    } else {
      message.error('请输入内容')
    }
  }
  render() {
    let {placeholder, inputVal, list, inputChange, deleteItem} = this.props
    return (
      <ToDoListUI
       placeholder={placeholder}
       inputVal={inputVal}
       inputChange={inputChange}
       clickBtn={this.clickAddItem}
       list={list}
       deleteItem={deleteItem} />
    );
  }
}

const stateToProps = (state)=> {
  return {
    placeholder: state.placeholder,
    inputVal: state.inputVal,
    list: state.list
  }
}

const dispatchToProps = (dispatch)=> {
  return {
    inputChange(e) {
      const action = inputChangeAction(e.target.value)
      dispatch(action) // 派发action
    },
    clickBtn() {
      const action = addItemAction()
      dispatch(action)
    },
    deleteItem(index) {
      const action = delItemAction(index)
      dispatch(action)
    },
    getListData() {
      // 获取异步数据
      const action = getToDoList()
      dispatch(action)
    }
  }
}
 
export default connect(stateToProps, dispatchToProps)(ToDoList);