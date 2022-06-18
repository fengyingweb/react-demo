import React from 'react';
import '../assets/css/toDoList.css';
import {Input, Button, List} from 'antd';
// 无状态（state）组件
const ToDoListUI = (props)=> {
  console.log('props: ', props)
  return (
    <div className="to-do-list">
      <div>
        <Input
          className="list-input"
          placeholder={props.placeholder}
          value={props.inputVal}
          onChange={props.inputChange} />
        <Button type="primary" onClick={props.clickBtn}>增加</Button>
      </div>
      <div className="list-wrapper">
        <List
          bordered
          dataSource={props.list}
          renderItem={(item, index)=>(
            <List.Item onClick={
              ()=> {props.deleteItem(index)}
            }>
              {item}
            </List.Item>
          )} />
      </div>
    </div>
  );
}
 
export default ToDoListUI;