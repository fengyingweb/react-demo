import React, {useContext} from 'react'
import {Button} from 'antd'
import {CountCtx} from '../views/home/VuePage' // 引入父组件创建的上下文

function Count() {
  let {count, dispatch} = useContext(CountCtx); // 关键代码使用useContext接收父组件数据
  return (
    <div>
      <Button type="primary" onClick={()=> {dispatch({type: 'sub'})}}>减小</Button>
      <span className="count">{count}</span>
      <Button type="primary" onClick={()=> {dispatch({type: 'add'})}}>增加</Button>
    </div>
  )
}

export default Count
