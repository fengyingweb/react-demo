import React from 'react';
import {Link, useParams} from 'react-router-dom';
import XiaoJieJie from '../../components/XiaoJieJie'

function Demo1() {
  let params = useParams(); // 使用动态路由参数
  console.log(params)
  return (
    <div>
      <h2>Demo1</h2>
      <h2>id: {params.id}</h2>
      <div><Link to="/">返回首页</Link></div>
      <XiaoJieJie />
    </div>
  )
}

export default Demo1
