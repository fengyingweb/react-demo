import React, {useState, useEffect} from 'react'; // react hooks 相关api
import {Button, List} from 'antd'
import '../../assets/css/reactPage.css';
import {getList} from '../../http/api'

function ReactPage() {
  let [count, setCount] = useState(0);
  let [list, setList] = useState([]);
  const fetchGetList = async ()=> {
    let {data} = await getList();
    setList(data.list)
  }
  // useEffect加入第二个参数[]来模拟componentDidMount, 返回一个函数时可以模拟componentWillUnmount
  useEffect(()=> {
    console.log('useEffect')
    fetchGetList()
    return ()=> { // 此函数相当于componentWillUnmount
      console.log('老弟，你离开了ReactPage页面')
    }
  }, [])
  return (
    <div className="conent-wrapper">
      <h3>react page demo</h3>
      <div>
        <Button type="primary" onClick={()=> {setCount(count--)}}>减小</Button>
        <span className="count">{count}</span>
        <Button type="primary" onClick={()=> {setCount(count++)}}>增加</Button>
      </div>
      <div className="list-wrapper">
        <List
          bordered
          dataSource={list}
          renderItem={(item, index)=>(
            <List.Item onClick={
              ()=> {}
            }>
              {item}
            </List.Item>
          )} />
      </div>
    </div>
  )
}

export default ReactPage