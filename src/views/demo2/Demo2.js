import React from 'react';
import {Link, useSearchParams} from 'react-router-dom';
import ToDoList from '../../components/ToDoList'

function Demo2() {
  let [searchParams, setSearchParams, params] = useSearchParams();
  console.log(searchParams.get('id')) // 获取query参数
  return (
    <div>
      <h2>Demo2</h2>
      <div><Link to="/">返回首页</Link></div>
      <ToDoList />
    </div>
  )
}

export default Demo2
