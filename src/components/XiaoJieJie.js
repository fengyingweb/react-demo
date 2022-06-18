import React, { Component } from 'react';
import XiaoJieJieItem from './XiaoJieJieItem.js'
import {CSSTransition, TransitionGroup} from 'react-transition-group'

class XiaoJieJie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputVal: '',
      list: ['头部按摩', '精油推背'],
      isShow: true
    }
    this.handleChange = this.handleChange.bind(this)
    this.clickBtn = this.clickBtn.bind(this)
    this.deleteItem = this.deleteItem.bind(this)
    this.showBoss = this.showBoss.bind(this)
  }

  // 生命周期
  componentDidMount() {
    console.log('-----componentDidMount-----');
  }

  handleChange() {
    this.setState({
      inputVal: this.input.value
    })
  }

  clickBtn() {
    this.setState({
      list: [...this.state.list, this.state.inputVal]
    }, ()=> {
      console.log(this.state.list.length);
    })
  }
  deleteItem(ind) {
    let cacheList = this.state.list
    cacheList.splice(ind, 1)
    this.setState({
      list: cacheList
    })
  }

  showBoss() {
    this.setState({
      isShow: !this.state.isShow
    })
  }
  render() {
    console.log('----render----');
    return (
      <div>
        <div className="input-wrapper">
          <label>增加服务:</label>
          <input
            id="input"
            className="input-item"
            value={this.state.inputVal}
            onChange={this.handleChange}
            ref={(input)=> {this.input = input}}></input>
          <button className="btn-wrapper" onClick={this.clickBtn}>增加服务</button>
        </div>
        <ul>
          <TransitionGroup>
            {
              this.state.list.map((item, ind)=> {
              return (
                <CSSTransition
                  appear={true}
                  timeout={800}
                  unmountOnExit
                  classNames="boss-in"
                  key={item + ind}>
                  <XiaoJieJieItem
                    index={ind}
                    item={item}
                    deleteItem={this.deleteItem}
                  />
                </CSSTransition>
              )
              })
            }
          </TransitionGroup>
        </ul>
        <div className="boss-wrapper">
          <CSSTransition
            in={this.state.isShow}
            timeout={800}
            classNames="boss-in"
            unmountOnExit>
            <p>召唤Boss级人物--孙悟空</p>
          </CSSTransition>
          
          <button className="btn-wrapper" onClick={this.showBoss}>召唤Boss</button>
        </div>
      </div>
    );
  }
}
 
export default XiaoJieJie;